# from exif import Image as exif_image

# import pprint



# ImgPath =  r'C:\Users\DELL\Desktop\Images\Images(Not Public)\SAVE_20221207_125628.jpg'
# def exif(ImgPath):
#     global mobile_data
#     mobile_data = {}
#     var = '\n'
#     with open(ImgPath,'rb') as img_file:
#         img = exif_image(img_file)
#     if img.has_exif:
#         mobile_data = dict(img.get_all())
#     img_file.close()
#     return mobile_data


# pprint.pprint(exif(ImgPath))

import smtplib

msg = """From: testmail2001@zohomail.in
To: gowdaarjun555@gmail.com\n
Subject: Sub sub\n
Here's my message!\nIt is lovely!
"""

server = smtplib.SMTP_SSL('smtp.zoho.in', port=465)
server.set_debuglevel(1)
server.ehlo
server.login('testmail2001@zohomail.in', 'Test@2001')
server.sendmail('testmail2001@zohomail.in', ['gowdaarjun555@gmail.com '], msg)
server.quit()


