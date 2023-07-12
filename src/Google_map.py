from selenium import webdriver
# from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By




def get_embedded_Map_link(map_url):
    opts = webdriver.ChromeOptions()
    # opts.add_argument("user-agent")
    opts.add_argument("--headless")       
    opts.add_argument("log-level=3")
    # opts.add_argument(f'user-agent = {random.choice(User_Agent_list)}')
    driver = webdriver.Chrome(r'src\chromedriver.exe',chrome_options=opts)
    driver.get(map_url)
    driver.implicitly_wait(1)
    
    # click on 
    share_button = driver.find_element(By.CSS_SELECTOR,'''#QA0Szd > div > div > div.w6VYqd > div.bJzME.tTVLSc > div > div.e07Vkf.kA9KIf > div > div > div.m6QErb.Pf6ghf.ecceSd.tLjsW > div:nth-child(5) > button''')
    share_button.click()


    # SELECT EMBEDDED MAP IN THE SHARE POP UP WINDOW.
    embedded_link_button = driver.find_element(By.CSS_SELECTOR,'''#modal-dialog > div > div.hoUMge > div > div.yFnP6d > div > div > div.m6QErb > div.rgIZ6c > button.zaxyGe.L6Bbsd.YTfrze''')
    embedded_link_button.click()

    # time.sleep(1)

    get_iframe = driver.find_element(By.CSS_SELECTOR,'''#modal-dialog > div > div.hoUMge > div > div.yFnP6d > div > div > div > div.eNBuZ > div.m5XrEc > input''') #this is by extracting link from text box itself
    iframe_link_default = get_iframe.get_attribute("value")
    iframe_link = iframe_link_default.split('"')[1]
    
    driver.close()
    print(f" Google maps api called ".center(100,"^"))
    return iframe_link


if __name__ == "__main__":
    var = get_embedded_Map_link("https://www.google.com/maps?q=13.964558972222221,75.57911697222222") 