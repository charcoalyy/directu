from model_cohere import get_similarity_score_liked
from database import get_similarity_sources
import time

# print(get_similarity_sources("cs", "135"))

START_TIME = time.time()
similarity_score = get_similarity_score_liked([{"course_subject": "cs", "course_num": "136"},
                                               {"course_subject": "math", "course_num": "235"},
                                               {"course_subject": "math", "course_num": "137"},
                                               {"course_subject": "cs", "course_num": "135"}], "cs", "135")
END_TIME = time.time()

print(f"Elapsed time: {END_TIME - START_TIME:.2f} seconds", )