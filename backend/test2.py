from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
load_dotenv()
import os

mongo_username = os.getenv("MONGO_USER")
mongo_password = os.getenv("MONGO_PASSWORD")

uri = "mongodb+srv://{0}:{1}@cluster0.2qomck2.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp".format(mongo_username, mongo_password)

client = MongoClient(uri, ssl=False)
db = client['course_database']

collection_name = "course_collection"
course_collection = db[collection_name]
