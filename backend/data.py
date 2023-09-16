import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import json


response = requests.get("http://www.uwflow.com")
soup = BeautifulSoup(response.text, 'html.parser')

# Find title tag
title = soup.find('title')
print(title.string)  # Outputs: "Example Domain"

course = "cs246e"

driver = webdriver.Chrome()
driver.get(f"https://uwflow.com/course/{course}")


show_all_button = WebDriverWait(driver, 20).until(EC.presence_of_element_located((By.XPATH, "//*[starts-with(text(), 'Show all')]")))
driver.execute_script("arguments[0].scrollIntoView();", show_all_button)
show_all_button = WebDriverWait(driver, 20).until(EC.visibility_of_element_located((By.XPATH, "//*[starts-with(text(), 'Show all')]")))
show_all_button = WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.XPATH, "//*[starts-with(text(), 'Show all')]")))
time.sleep(1)

show_all_button.click()

review_array = []

review_containers = driver.find_elements(By.TAG_NAME, "table")
review_containers_parents =  [review_container.find_element(By.XPATH, "..") for review_container in review_containers]
for review_container_parent in review_containers_parents:
    review_text = review_container_parent.find_element(By.XPATH, "./*[2]").find_element(By.XPATH, "./*[1]")
    review_array.append(review_text.text)

review_json_name = "".join([course, "_uwflow", "_reviews.json"])
with open(review_json_name, 'w') as f:
    json.dump(review_array, f)

show_all_button = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.XPATH, "//*[starts-with(text(), 'Show all')]"))
    )
show_all_button.click()

driver.close()