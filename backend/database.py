from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from scrape import scrape_reviews, scrape_descriptions
from dotenv import load_dotenv
load_dotenv()
import os

mongo_username = os.getenv("MONGO_USER")
mongo_password = os.getenv("MONGO_PASSWORD")

uri = "mongodb+srv://{0}:{1}@cluster0.2qomck2.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp".format(mongo_username, mongo_password)

client = MongoClient(uri)
db = client['course_database']

collection_name = "course_collection"
course_collection = db[collection_name]

def add_course_db(course_code, course_num):
    course_data = {
        "name": "placeholder55",
        "code": "placeholder",
        "term": "placeholder",
        "desc": "placeholder",
        "score": 0,
        "matches": ["placeholder"],
        "summary": ["placeholder"],
        "reviews": ["placeholder"],
        "status": "added"
    }

    result = course_collection.insert_one(course_data)
    return result

def add_course_review_summary(course_code, course_num):