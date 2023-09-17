import cohere
import numpy as np
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
import time
load_dotenv()

import os
COHERE_API_KEY = os.getenv("COHERE_API_KEY")
co = cohere.Client(COHERE_API_KEY)
mongo_username = os.getenv("MONGO_USER")
mongo_password = os.getenv("MONGO_PASSWORD")

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
