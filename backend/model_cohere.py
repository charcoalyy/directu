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

def get_similarity_sources(course_code, course_number):
    mongo_username = os.getenv("MONGO_USER")
    mongo_password = os.getenv("MONGO_PASSWORD")

    uri = "mongodb+srv://{0}:{1}@cluster0.2qomck2.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp".format(mongo_username, mongo_password)

    client = MongoClient(uri)
    db = client['course_database']

    collection_name = "course_collection"
    course_collection = db[collection_name]
    course = course_collection.find_one({"code": course_code + course_number})
    if course:
        sources = course['reviews']
        sources.append(course['desc'])
        sources.append(course['name'])
        return sources
    else:
        return None
    
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

# takes in array of strings
def parse_liked(liked_array):
    array_dicts = []
    for course in liked_array:
        for num_start, char in enumerate(course):
            if not char.isalpha():
                course_subject = course[:num_start]
                course_num = course[num_start:]
                break
        array_dicts.append({"course_subject": course_subject, "course_num": course_num})
    return array_dicts

def feed_liked_courses_here(liked_array, potential_course_subject, potential_course_num):
    # parse the
    liked_array_dicts = parse_liked(liked_array)
    
    potential_similarity_score = get_similarity_score_liked(liked_array_dicts, potential_course_subject, potential_course_num)
    return potential_similarity_score

def get_course_summary():
    pass
