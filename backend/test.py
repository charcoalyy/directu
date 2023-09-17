from model_cohere import get_similarity_score_liked
from database import get_similarity_sources

# print(get_similarity_sources("cs", "135"))

similarity_score = get_similarity_score_liked([{"course_subject": "cs", "course_num": "136"}], "cs", "135")

print(similarity_score)
