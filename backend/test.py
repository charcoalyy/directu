from database import update_term
from scrape import get_course_list
from random import randint

terms = ['1A, 1B, 2A, 2B, 3A, 3B, 4A, 4B']

courses = get_course_list()

for course in courses:
    for course_num in courses[course]:
        update_term(course + course_num, terms[randint(0, len(terms) - 1)])