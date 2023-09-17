from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import pymongo
import cohere
from dotenv import load_dotenv
load_dotenv()
import os

COHERE_API_KEY = os.getenv("COHERE_API_KEY")
co = cohere.Client(COHERE_API_KEY)

mongo_username = os.getenv("MONGO_USER")
mongo_password = os.getenv("MONGO_PASSWORD")

uri = "mongodb+srv://{0}:{1}@cluster0.2qomck2.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp".format(mongo_username, mongo_password)

client = MongoClient(uri)
db = client['course_database']

collection_name = "course_collection"
course_collection = db[collection_name]

def generate_summary(course_code):
    reviews = course_collection.find_one({"code": course_code}, {"reviews" : 1, "_id": 0})
    txt = ""
    for review in reviews:
        txt += review + "\n"
    txt += course_collection.find_one({"code": course_code}, {"desc" : 1, "_id": 0})["desc"]

    if len(txt) < 250:
        return txt
    
    response = co.summarize(
        text=txt,
        model='command',
        length='long',
        extractiveness='medium'
    )

    return response.summary

for course in course_collection.find():
    summary = generate_summary(course["code"])
    course_collection.update_one({"code": course["code"]}, { "$set": {'summary' : summary} })