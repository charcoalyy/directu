import cohere
import numpy as np
from dotenv import load_dotenv
from database import get_similarity_sources
load_dotenv()

import os
COHERE_API_KEY = os.getenv("COHERE_API_KEY")
co = cohere.Client(COHERE_API_KEY)

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
        print("Similarity score:", course_liked["course_subject"], course_liked["course_num"], "and", course_potential_subject, course_potential_num, "->", potential_course_similarity)
    potential_course_similarity_score = potential_course_similarity_sum / len(course_liked_array)
    print("Final similarity score:", potential_course_similarity_score)
    
    return potential_course_similarity_score


    


def get_course_summary():
    pass
