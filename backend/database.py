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
        "code": course_code + course_num,
        "term": None,
        "desc": scrape_descriptions(course_code, course_num),
        "score": 0,
        "summary": ["placeholder"],
        "reviews": scrape_reviews(course_code + course_num),
        "status": False
    }

    result = course_collection.insert_one(course_data)
    return result

def get_all_courses():
    print(course_collection.find({}, { "code" : 1, "name" : 1, "term" : 1, "status" : 1, "score" : 1, "_id": 0 }))