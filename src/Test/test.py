import requests
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# Specify the path to the web driver executable
driver_path = "/path/to/web/driver"

# Launch a new Chrome browser window
browser = webdriver.Chrome(driver_path)

# Navigate to the GSM Arena website
browser.get("https://www.gsmarena.com/")

# Search for the desired phone model
search_bar = browser.find_element_by_css_selector("#topsearch-text")
search_bar.send_keys("Samsung Galaxy S20")
search_bar.send_keys(Keys.ENTER)

# Click on the first search result
search_result = browser.find_element_by_css_selector(".makers li")
search_result.click()

# Download the images of the phone model
image_links = browser.find_elements_by_css_selector(".specs-photo-main a")
for i, link in enumerate(image_links):
    response = requests.get(link.get_attribute("href"))
    with open(f"samsung_s20_image_{i}.jpg", "wb") as f:
        f.write(response.content)

# Close the browser window
browser.quit()