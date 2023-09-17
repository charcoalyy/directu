from model_cohere import get_similarity_scores, get_liked_similarity_sources, get_all_similarity_sources
import time


start = time.time()
array = ['cs135', 'math235', 'stat230']
print(get_similarity_scores(get_liked_similarity_sources(array), get_all_similarity_sources()))
end = time.time()

print(f"time: {end-start:.2f} seconds")