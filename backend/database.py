from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import pymongo
from scrape import scrape_reviews, scrape_descriptions, get_course_name
from model_cohere import similarity_scores
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
        "name": get_course_name(course_code, course_num),
        "code": course_code + course_num,
        "term": None,
        "desc": scrape_descriptions(course_code, course_num),
        "score": 0,
        "summary": [],
        "reviews": scrape_reviews(course_code + course_num),
        "status": False
    }
    result = course_collection.insert_one(course_data)
    return result

def get_one_course(course_code):
    course = course_collection.find_one({"code": course_code}, {"code" : 1, "name" : 1, "term" : 1, "desc" : 1, "summary" : 1, "review" : 1, "status" : 1, "score" : 1, "_id": 0})
    return course

def get_all_courses():
    course_array = []
    courses = course_collection.find({}, { "code" : 1, "name" : 1, "term" : 1, "status" : 1, "score" : 1, "_id": 0 })
    for course in courses:
        if course:
            course_array.append(course)
    return course_array

def update_status(course_code, status):
    result = course_collection.update_one({"code" : course_code}, {"$set" : {"status" : status}})
    return result

def update_term(course_code, term):
    result = course_collection.update_one({"code" : course_code}, {"$set" : {"term" : term}})
    return result
    
def update_similarity_score(dict_score):
    for course_code in dict_score:
        result = course_collection.update_one({"code" : course_code}, {"$set" : {"score" : dict_score[course_code]}})
    
    top_10_documents = course_collection.find().sort("score", pymongo.DESCENDING).limit(10)
    for document in top_10_documents:
        course_collection.update_one({"_id": document["_id"]}, {'status' : True})
    
    return result