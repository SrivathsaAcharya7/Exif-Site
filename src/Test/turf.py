'''
THIS FILE IS NOT NEEDED!!!!!!!!!!!!!!!!!!


'''
import base64
'''
name = "sudhan is a name"
name_bytes = name.encode("ascii")    #convert to byte like objects


base64_bytes = base64.b64encode(name_bytes)
# print(base64_bytes)    # OP : b'c3VkaGFuIGlzIGEgbmFtZQ=='
base64_string = base64_bytes.decode("ascii")
print(base64_string)     # OP : c3VkaGFuIGlzIGEgbmFtZQ==


sample_string_bytes = base64.b64decode(base64_bytes)
print(sample_string_bytes)    # b'sudhan is a name' return bytes of type string

sample_string = sample_string_bytes.decode("ascii")     # normal string from bytes
print(sample_string)

'''


# attr = '''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'''
# attr = '/' + attr
# decoded_data = base64.b64decode((attr))

# img_file = open('image.jpeg',"wb")
# img_file.write(decoded_data)
# img_file.close()


from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup as BSoup
from lxml import etree



def get_embedded_Map_link(map_url):
    opts = webdriver.ChromeOptions()
    # opts.add_argument("user-agent")
    # opts.add_argument("--headless")       
    opts.add_argument("log-level=3")
    # opts.add_argument(f'user-agent = {random.choice(User_Agent_list)}')
    driver = webdriver.Chrome(r'C:\Users\DELL\Desktop\Exif_Site upgraded with html css front end checkpoint-6\src\chromedriver.exe',chrome_options=opts)
    driver.get(map_url)
    driver.implicitly_wait(1)
    # click on 
    share_button = driver.find_element(By.XPATH,'''//*[@id="QA0Szd"]/div/div/div[1]/div[2]/div/div[1]/div/div/div[4]/div[5]/button''')
    share_button.click()


    # SELECT EMBEDDED MAP IN THE SHARE POP UP WINDOW.
    embedded_link_button = driver.find_element(By.XPATH,'''//*[@id="modal-dialog"]/div/div[2]/div/div[3]/div/div/div[1]/div[2]/button[2]''')
    embedded_link_button.click()

    # time.sleep(1)

    get_iframe = driver.find_element(By.XPATH,'''//*[@id="modal-dialog"]/div/div[2]/div/div[3]/div/div/div/div[3]/div[1]/input''') #this is by extracting link from text box itself
    iframe_link_default = get_iframe.get_attribute("value")
    iframe_link = iframe_link_default.split('"')[1]
    
    driver.close()
    print(f" Google maps api called ".center(100,"^"))
    return iframe_link


if __name__ == "__main__":
    var = get_embedded_Map_link("https://www.google.com/maps?q=13.964558972222221,75.57911697222222")
    print(var)