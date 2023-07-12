from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import os
import base64




IMAGE_FOLDER = os.path.join('static','Images_Mobile')

def get_mobile_image(mobile_name):
    opts = webdriver.ChromeOptions()
    opts.add_argument('--headless')
    opts.add_argument('--log-level=3')
    saved_image_name = ''
    url = 'https://www.google.com/images'
    browser = webdriver.Chrome(r'src\chromedriver.exe',chrome_options=opts)    # This will pop up the chrome window
    browser.get(url)
    search_box = browser.find_element(By.CLASS_NAME,'gLFyf')
    search_box.send_keys(mobile_name + "flipkart",Keys.ENTER)
    image = browser.find_element(By.XPATH,"//img[contains(@class,'Q4LuWd')]")
    image.click()
    image_link = image.get_attribute('src')
    browser.close()
    image_link = image_link.strip()
    image_link = image_link[23:]
    decoded_data = base64.b64decode(image_link)
    try:
        image_file = open(IMAGE_FOLDER+"\\"+f"{mobile_name}.jpeg","wb")
        image_file.write(decoded_data)
        image_file.close()
        saved_image_name = mobile_name
    except ValueError:
        image_file = open(IMAGE_FOLDER+"\\"+f"{mobile_name[:6]}.jpeg","wb")
        image_file.write(decoded_data)
        image_file.close()
        saved_image_name = mobile_name[:6]
    print(f" Model Image Downloaded as {saved_image_name} Successfully  ".center(100,"^"))     #console comment
    # browser.close()
    return saved_image_name

if __name__ == "__main__":
    get_mobile_image("Poco f1")