from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import pymongo
from scrape import scrape_reviews, scrape_descriptions, get_course_name
from model_cohere import get_personalized_explanation
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

from numpy import random

def course_to_term(course):
    for char in course:
        if char.isnumeric():
            char = min(int(char), 4)
            half = random.choice(["A", "B"])
            return str(char) + half
    return "1A"

for course in course_collection.find():
    course_collection.update_one({"code": course["code"]}, { "$set": {'term' : course_to_term(course["code"]) } })