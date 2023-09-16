from flask import Flask, request, jsonify
from flask_cors import CORS

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
                return {"course": {
                    "name": "placeholder55",
                    "code": "placeholder",
                    "term": "placeholder",
                    "desc": "placeholder",
                    "score": 0,
                    "matches": ["placeholder"],
                    "summary": ["placeholder"],
                    "reviews": ["placeholder"],
                    "status": "added"
                }}
            else:
                # retrieve list of pure course names & term
                return {"courses": [
                    {"name": "placeholder1","term": "1", "status": "added"},
                    {"name": "placeholder2","term": "1", "status": "added"},
                    {"name": "placeholder3","term": "2", "status": "not added"},
                    {"name": "placeholder4","term": "2", "status": "added"},
                    {"name": "placeholder5","term": "3", "status": "added"},
                    {"name": "placeholder6","term": "3", "status": "not added"},
                    {"name": "placeholder7","term": "4", "status": "not added"},
                    {"name": "placeholder8","term": "4", "status": "not added"},
                    {"name": "placeholder9","term": "5", "status": "added"},
                    {"name": "placeholder99","term": "5", "status": "not added"}
                ]}
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