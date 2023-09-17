from model_cohere import get_similarity_score_liked
from database import get_similarity_sources

# print(get_similarity_sources("cs", "135"))

similarity_score = get_similarity_score_liked([{"course_subject": "cs", "course_num": "135"},
                                               {"course_subject": "math", "course_num": "136"},
                                               {"course_subject": "stat", "course_num": "240"},
                                               {"course_subject": "cs", "course_num": "145"}], "cs", "135")

print(similarity_score)