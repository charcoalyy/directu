import requests



def get_course_name(course_subject, course_num):
    url = f"https://openapi.data.uwaterloo.ca/v3/Courses/1239/{course_subject}/{course_num}"
    headers = {'x-api-key': 'B4AFD97679334F848DBAFF54C5A44160'}


    course = requests.get(url, headers=headers).json()[0]
    course_name = course["title"]
    
    return course_name

print(get_course_name("cs", 136))