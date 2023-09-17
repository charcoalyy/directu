import cohere
import numpy as np
from dotenv import load_dotenv
from pymongo.mongo_client import MongoClient
from model_cohere import get_personalized_explanation, get_review_course_summary
load_dotenv()

import os
COHERE_API_KEY = os.getenv("COHERE_API_KEY")
co = cohere.Client(COHERE_API_KEY)

print(get_personalized_explanation("i like coding","cs136"))