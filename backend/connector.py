from model_cohere import get_similarity_score_liked
from scrape import get_course_dict

# takes in array of strings
def parse_liked(liked_array):
    array_dicts = []
    for course in liked_array:
        for num_start, char in enumerate(course):
            if not char.isalpha():
                course_subject = course[:num_start]
                course_num = course[num_start:]
                break
        array_dicts.append({"course_subject": course_subject, "course_num": course_num})
    
    return array_dicts
            

def feed_liked_courses_here(liked_array, potential_course_subject, potential_course_num):
    # parse the
    liked_array_dicts = parse_liked(liked_array)
    
    potential_similarity_score = get_similarity_score_liked(liked_array_dicts, potential_course_subject, potential_course_num)
    return potential_similarity_score
    
    