# routes required: 
# post user profiling information
# get all recommended courses
# post changes to courses i.e. add or drop

from flask import Flask
from flask_cors import CORS

app=Flask(__name__)
cors = CORS(app)

@app.route("/dummy")
def dummy():
    return {"message": "this is functioning?"}

if __name__ == "__main__":
    app.run(debug=True)