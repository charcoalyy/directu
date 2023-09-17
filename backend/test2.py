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

for course in course_collection.find():
    new_reviews = []
    for review in course["reviews"]:
        new_reviews.append("-" + review)
    course_collection.update_one({"code": course["code"]}, { "$set": {'reviews' : new_reviews} })