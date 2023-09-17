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

def get_embeddings(liked_courses_text_dict, all_courses_text_dict):
    
    liked_courses_text_array = []
    for course in liked_courses_text_dict:
        liked_courses_text_array.append(liked_courses_text_dict[course])
    
    all_courses_text_array = []
    for course in all_courses_text_dict:
        all_courses_text_array.append(all_courses_text_dict[course])
    
    
    liked_courses_embed_array = co.embed(texts=liked_courses_text_array).embeddings
    all_courses_embed_array = co.embed(texts=all_courses_text_array).embeddings
    
    
    liked_courses_embed_dict = {}
    all_courses_embed_dict = {}
    for idx, course in enumerate(liked_courses_text_dict):
        liked_courses_embed_dict[course] = liked_courses_embed_array[idx]
    for idx, course in enumerate(all_courses_text_dict):
        all_courses_embed_dict[course] = all_courses_embed_array[idx]
    
    return (liked_courses_embed_dict, all_courses_embed_dict)

def get_similarity_scores(liked_courses_text_dict, all_courses_text_dict):
    (liked_courses_embed_dict, all_courses_embed_dict) = get_embeddings(liked_courses_text_dict, all_courses_text_dict)
    
    similarity_scores_dict = {}
    for all_course in all_courses_embed_dict:
        # calculate cosine similarity between this liked course and all liked_courses
        similarity_score_sum = 0
        for liked_course in liked_courses_embed_dict:
            similarity_score_sum += cosine_similarity(all_courses_embed_dict[all_course], liked_courses_embed_dict[liked_course])
        similarity_score = similarity_score_sum / len(liked_courses_embed_dict)
        similarity_scores_dict[all_course] = similarity_score
    return similarity_scores_dict

def get_similarity_sources(course_code):
    course = course_collection.find_one({"code" : course_code}, {"source" : 1, "_id" : 0})
    return course['source']

def get_liked_similarity_sources(array_liked):
    dict_sources = {}
    for course_code in array_liked:
        course_sources = get_similarity_sources(course_code)
        dict_sources[course_code] = course_sources
    return dict_sources

def get_all_similarity_sources():
    dict_sources = {}
    for course in course_collection.find():
        course_sources = get_similarity_sources(course['code'])
        dict_sources[course['code']] = course_sources
    return dict_sources

def get_review_course_summary(course_code):
    course = course_collection.find_one({"code" : course_code}, {"summary" : 1, "_id" : 0})
    return course['summary']

def get_personalized_explanation(pref, course_code):
    message = "Explain this course's pros and cons targeting this student, the following are student's preferences\n" + pref + "\n" + "The following is summarized course description and review\n" + get_review_course_summary(course_code)
    
    response = co.chat(
        message, 
        model="command", 
        temperature=0.3
    )

    return response.text