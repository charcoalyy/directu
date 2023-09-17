import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import requests

def scrape_reviews(course):
    driver = webdriver.Chrome()
    driver.get(f"https://uwflow.com/course/{course}")

    try:
        show_all_button = WebDriverWait(driver, 8).until(EC.presence_of_element_located((By.XPATH, "//*[starts-with(text(), 'Show all')]")))
        driver.execute_script("arguments[0].scrollIntoView();", show_all_button)
        show_all_button = WebDriverWait(driver, 8).until(EC.visibility_of_element_located((By.XPATH, "//*[starts-with(text(), 'Show all')]")))
        show_all_button = WebDriverWait(driver, 8).until(EC.element_to_be_clickable((By.XPATH, "//*[starts-with(text(), 'Show all')]")))
        time.sleep(1)
        show_all_button.click()
    finally:
        MAX_REVIEWS = 60

        review_array = []

        review_containers = driver.find_elements(By.TAG_NAME, "table")
        review_containers_parents =  [review_container.find_element(By.XPATH, "..") for review_container in review_containers]
        for i in range(min(MAX_REVIEWS, len(review_containers_parents))):
            review_container_parent = review_containers_parents[i]
            
            review = review_container_parent.find_element(By.XPATH, "./*[2]").find_element(By.XPATH, "./*[1]")
            review_text = review.text
            review_array.append(review_text)


        driver.close()
        return review_array
    
def scrape_descriptions(course_subject, course_num):
    url = f"https://openapi.data.uwaterloo.ca/v3/Courses/1239/{course_subject}/{course_num}"
    headers = {'x-api-key': 'B4AFD97679334F848DBAFF54C5A44160'}

    response = requests.get(url, headers=headers)
    response_json = response.json()
    description = response_json[0]["description"]
    return description

def get_course_name(course_subject, course_num):
    url = f"https://openapi.data.uwaterloo.ca/v3/Courses/1239/{course_subject}/{course_num}"
    headers = {'x-api-key': 'B4AFD97679334F848DBAFF54C5A44160'}

    course = requests.get(url, headers=headers).json()[0]
    course_name = course["title"]
    
    return course_name

def get_course_list():
    url_cs = "https://openapi.data.uwaterloo.ca/v3/Courses/1239/cs"
    url_math = "https://openapi.data.uwaterloo.ca/v3/Courses/1239/math"
    url_stat = "https://openapi.data.uwaterloo.ca/v3/Courses/1239/stat"
    headers = {'x-api-key': 'B4AFD97679334F848DBAFF54C5A44160'}

    list_cs = requests.get(url_cs, headers=headers).json()
    list_math = requests.get(url_math, headers=headers).json()
    list_stat = requests.get(url_stat, headers=headers).json()

    course_dict = {}
    course_dict["cs"] = [x["catalogNumber"] for x in list_cs]
    course_dict["math"] = [x["catalogNumber"] for x in list_math]
    course_dict["stat"] = [x["catalogNumber"] for x in list_stat]

    return course_dict