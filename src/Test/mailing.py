# import smtplib,ssl


# email_address = 'mutahar@myyahoo.com'
# subject = 'hello'
# content = 'Hello there test test'
# footer = 'footer'
# password = 'Sudhan@123'


# context = ssl.create_default_context()
# conn = smtplib.SMTP('smtp.mail.yahoo.com',587)
# conn.ehlo()
# conn.starttls(context = context)
# conn.ehlo()
# conn.login(email_address,password)
# conn.sendmail(email_address,'gowdaarjun555@gmail.com',content)
# conn.quit()


import smtplib, ssl

port = 465  # For SSL
smtp_server = "smtp.zoho.in"
sender_email = "testmail2001@zohomail.in"  # Enter your address
receiver_email = "4jn19cs107sudhan.j@gmail.com"  # Enter receiver address
password = "Test@2001"
message = """\
Subject: Hi there

This message is sent from Python."""

context = ssl.create_default_context()
with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
    server.login(sender_email, password)
    server.sendmail(sender_email, receiver_email, message)
    print("success")