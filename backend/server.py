from flask import Flask, request, jsonify
from flask_cors import CORS
from scrape import get_course_dict
from database import get_all_courses, get_one_course, update_status, update_similarity_score

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
            update_status(data['course'], data['status'])
            return {"updated": "success"}
        else:
            return bad_request("Missing user ID and/or course ID")
        
@app.route("/profile", methods=["POST"])
def profile():
    data = request.get_json()
    if data['id']:
        # run through data model with data['body'] --> generate list of courses --> save to database as collection
        course_dict = get_course_dict()
        for subject in course_dict:
            for course in course_dict[subject]:
                update_similarity_score(data['liked'], subject, course)
        return {"created": data['id']}
    else:
        return bad_request("Missing user ID")

if __name__ == "__main__":
    app.run(debug=True)