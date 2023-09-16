import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import json

def scrape_reviews(course):
    driver = webdriver.Chrome()
    driver.get(f"https://uwflow.com/course/{course}")


    show_all_button = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.XPATH, "//*[starts-with(text(), 'Show all')]")))
    driver.execute_script("arguments[0].scrollIntoView();", show_all_button)
    show_all_button = WebDriverWait(driver, 20).until(EC.visibility_of_element_located((By.XPATH, "//*[starts-with(text(), 'Show all')]")))
    show_all_button = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.XPATH, "//*[starts-with(text(), 'Show all')]")))
    time.sleep(1)

    show_all_button.click()

    MAX_CHARS = 20_000

    review_array = []
    num_chars = 0

    review_containers = driver.find_elements(By.TAG_NAME, "table")
    review_containers_parents =  [review_container.find_element(By.XPATH, "..") for review_container in review_containers]
    for review_container_parent in review_containers_parents:
        review = review_container_parent.find_element(By.XPATH, "./*[2]").find_element(By.XPATH, "./*[1]")
        review_text = review.text
        if num_chars + len(review_text) > MAX_CHARS:
            break
        review_array.append(review_text)
        num_chars += len(review_text)

    # review_json_name = "".join([course, "_uwflow", "_reviews.json"])
    # with open(review_json_name, 'w') as f:
    #    json.dump(review_array, f)

    driver.close()
    return review_array
    
    
def scrape_descriptions(course_subject, course_num):
    url = f"https://openapi.data.uwaterloo.ca/v3/Courses/1239/{course_subject}/{course_num}"
    headers = {'x-api-key': 'B4AFD97679334F848DBAFF54C5A44160'}

    response = requests.get(url, headers=headers)
    response_json = response.json()
    description = response_json[0]["description"]
    return description


course_subject = "cs"
course_num = "146"
course_info = {}

course_info["course"] = f"{course_subject}_{course_num}"
course_info["description"] = scrape_descriptions(course_subject, course_num)
course_info["reviews"] = scrape_reviews(course_subject + course_num)

with open(f"{course_subject}_{course_num}_info.json", "w") as f:
    json.dump(course_info, f)