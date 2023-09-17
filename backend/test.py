from model_cohere import get_similarity_scores

liked_dict = {"cs135": "apple",
              "cs246": "pear",
              "math235": "banana"}

all_dict = {"stat240": "strawberry",
            "math137": "today i went to the table"}

print(get_similarity_scores(liked_dict, all_dict))
