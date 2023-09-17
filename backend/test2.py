from scrape import get_course_dict
import time

START_TIME = time.time()
course_dict = get_course_dict()
END_TIME = time.time()

print(f"Time: {END_TIME - START_TIME:.2f} seconds")