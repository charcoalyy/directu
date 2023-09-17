from model_cohere import get_similarity_score_liked
from database import get_similarity_sources
from connector import feed_liked_courses_here
import time

# print(get_similarity_sources("cs", "135"))

START_TIME = time.time()
similarity_score = feed_liked_courses_here(["cs135", "cs136", "math235"], "cs", "135")
END_TIME = time.time()

print(f"Elapsed time: {END_TIME - START_TIME:.2f} seconds", )