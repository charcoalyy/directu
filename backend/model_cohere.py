import cohere
import numpy as np
from dotenv import load_dotenv
load_dotenv()

import os
COHERE_API_KEY = os.getenv("COHERE_API_KEY")
co = cohere.Client(COHERE_API_KEY)

def cosine_similarity(a, b):
    return np.dot(a, b)/(np.linalg.norm(a) * np.linalg.norm(b))

def get_similarity_score_single_course():
    


def get_course_summary(course_code, course_num):
    