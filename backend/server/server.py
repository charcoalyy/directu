from flask import Flask, request, jsonify
from flask_cors import CORS

from database import get_all_courses, get_one_course

app=Flask(__name__)
cors = CORS(app)

@app.errorhandler(400)
def bad_request(e):
    return jsonify(e), 400

@app.route("/courses", methods=["GET", "POST"])
def courses():
    if request.method == 'GET':
        user_id = request.args.get('id')
        if user_id:
            course_id = request.args.get('course_id') # corresponds to course #
            if course_id:
                # retrieve details for individual course
                return {"course": get_one_course(course_id)}
            else:
                # retrieve list of pure course names & term
                return {"courses": get_all_courses()}
        else:
            return bad_request("Missing user ID")
    elif request.method == 'POST':
        data = request.get_json()
        if data['id'] and data['course']:
            # update doc corresponding to data['course'] status with added or not added --> return doc updated
            return {"updated": "39459"}
        else:
            return bad_request("Missing user ID and/or course ID")
        
@app.route("/profile", methods=["POST"])
def profile():
    data = request.get_json()
    if data['id']:
        # run through data model with data['body'] --> generate list of courses --> save to database as collection
        return {"created": data['id']}
    else:
        return bad_request("Missing user ID")

if __name__ == "__main__":
    app.run(debug=True)