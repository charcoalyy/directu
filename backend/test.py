from model_cohere import get_similarity_scores, get_similarity_sources, get_all_similarity_sources
import time


start = time.time()
print(get_similarity_scores({'cs135': get_similarity_sources('cs135'), 
                             'math235' : get_similarity_sources('math235'),
                             'stat230' : get_similarity_sources('stat230')}, get_all_similarity_sources()))
end = time.time()

print(f"time: {end-start:.2f} seconds")