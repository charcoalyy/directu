from model_cohere import get_similarity_score_liked
from database import get_similarity_sources
import time

# print(get_similarity_sources("cs", "135"))

similarity_score = get_similarity_score_liked([{"course_subject": "cs", "course_num": "136"}], "cs", "135")

print(f"Elapsed time: {END_TIME - START_TIME:.2f} seconds", )