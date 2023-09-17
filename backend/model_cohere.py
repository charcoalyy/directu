import cohere
import numpy as np
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
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

def cosine_similarity(a, b):
    return np.dot(a, b)/(np.linalg.norm(a) * np.linalg.norm(b))

# takes in arrays
def get_similarity_score_single(course_1_info, course_2_info):
    course_1_embeddings = co.embed(texts=course_1_info, model="small").embeddings
    course_2_embeddings = co.embed(texts=course_2_info, model="small").embeddings
    
    count = len(course_1_embeddings) * len(course_2_embeddings)
    similarity_sum = 0
    for course_1_embedding_vector in course_1_embeddings:
        for course_2_embedding_vector in course_2_embeddings:
            similarity_sum += cosine_similarity(course_1_embedding_vector, course_2_embedding_vector)
    similarity_score_single_single = similarity_sum / count
    return similarity_score_single_single
    
# course_liked_array is array of dictionaries
def get_similarity_score_liked(course_liked_array, course_potential_subject, course_potential_num):
    potential_course_similarity_sum = 0
    for course_liked in course_liked_array:
        course_liked_similarity_source = get_similarity_sources(course_liked["course_subject"], course_liked["course_num"])
        course_potential_similarity_source = get_similarity_sources(course_potential_subject, course_potential_num)
        potential_course_similarity = get_similarity_score_single(course_liked_similarity_source[:30], course_potential_similarity_source[:30])
        potential_course_similarity_sum += potential_course_similarity
    potential_course_similarity_score = potential_course_similarity_sum / len(course_liked_array)    
    return potential_course_similarity_score

def get_similarity_sources(course_code):
    course = course_collection.find_one({"code" : course_code}, {"source" : 1, "_id" : 0})
    return course

def get_embedded_liked_similarity_sources(array_liked):
    array_sources = []
    for course_code in array_liked:
        course_sources = get_similarity_sources(course_code)
        array_sources.append({course_code : course_sources})
    return array_sources

def get_embedded_all_similarity_sources():
    array_sources = []
    for course in course_collection.find():
        course_sources = get_similarity_sources(course['code'])
        array_sources.append({course['code'] : course_sources})
    return array_sources

def get_review_course_summary():
    pass

def get_personalized_explanation():
    pass