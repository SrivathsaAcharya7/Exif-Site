from flask import Flask,render_template,request,redirect,flash
from fileinput import filename
import os
from PIL import Image as pillow_image
from exif import Image as exif_image
from PIL import Image
from PIL.ExifTags import TAGS,GPSTAGS
from waitress import serve
from datetime import datetime
import time
from flask_mail import Mail,Message
import smtplib,ssl

import Google_map
import Mobile_scraper

Google_Map_Url = ''
ImgPath = ''
IMAGE_MOBILE_FOLDER = os.path.join('static','Images_Mobile')
UPLOADED_IMAGE_FOLDER = os.path.join('static','Upload')
mobile_data = {}






# Flask Application instance
app = Flask(__name__)
app.secret_key = "Top secret"

# Mail config
PORT = 465
SMTP_SERVER = 'smtp.zoho.in'
SENDER_MAIL = 'testmail2001@zohomail.in'
RECEIVER_MAIL = ''
PASSWORD = 'Test@2001'




@app.route("/")
def home():
    return render_template("index.html")

@app.route("/1")    #image display test site
def stu():
    image_file_path = 'Images_Mobile/samsung SM-M325F.jpg' 
    return render_template("stu.html",mobile_images_path = image_file_path)

@app.route("/Null") #testing not real code
def empty_null():
    return render_template("Null.html")

@app.route("/upload") # testing not real code
def up():
    return render_template("upload.html")

@app.route("/aboutus") # testing not real code
def ab():
    return render_template("aboutus.html")


@app.route("/success", methods = ['POST'])
def success():
    start = time.time()
    embedded_map_link = ''
    return_mobile_model = ''
    image_path = ''
    if request.method == 'POST':
        file = request.files['file']
        try:
            file.save(os.path.join(UPLOADED_IMAGE_FOLDER,file.filename))
        except:
            print("Not Saving".center("#",100))
            return redirect("/")
        global ImgPath
        #logging
        now = datetime.now()
        curr_Time = now.strftime("%H:%M:%S")
        ImgPath = os.path.join(UPLOADED_IMAGE_FOLDER,file.filename)
        log_file = open(os.getcwd()+"\\log.txt","a")
        log_file.write(ImgPath+'   '+str(curr_Time)+"\n")
        log_file.close()
        #logging
        with open(ImgPath,"rb") as image_file:
             img = exif_image(image_file)
        if not img.has_exif:
            flash("Image has no EXIF data")
            return  redirect("/")
        try:
            data = exif(ImgPath)
        except:
            data = f"Sorry couldn't retrieve information"
        try:
            gps_coords = GPSinformation(ImgPath)
        except:
            gps_coords = {}
        try:
            URL = create_google_maps_url(gps_coords)
            embedded_map_link = Google_map.get_embedded_Map_link(URL)
        except:
            URL = "Null"
        return_mobile_model = mobile_name_passer()
        image_path = IMAGE_MOBILE_FOLDER+"\\"+f"{return_mobile_model}.jpeg"
        image_path = image_path.replace('\\','/').strip("static")[1:]
        User_uploaded_image_path = UPLOADED_IMAGE_FOLDER+"\\"+file.filename
        file_size = os.path.getsize(User_uploaded_image_path)
        fsize=convert_bytes(file_size) 
        split_tup = os.path.splitext(User_uploaded_image_path)
        pixel=get_num_pixels(User_uploaded_image_path)/1000000
        roundpixel=round(pixel,1)
        User_uploaded_image_path = User_uploaded_image_path.replace('\\','/').strip("static")[1:]
        file_extension = split_tup[1]
        lat=mobile_data['gps_latitude']
        lon=mobile_data['gps_longitude']
        redlatdeg=lat[0]
        redlatnotts=lat[1]
        redlatfina=lat[2]
        redlondeg=lon[0]
        redlonnotts=lon[1]
        redlonfina=lon[2]
        try:
            flash_mode = mobile_data['flash'].flash_mode
            red_eye_reduction_supported = mobile_data['flash'].red_eye_reduction_supported
        except AttributeError:
            flash_mode = 'NA'
            red_eye_reduction_supported = 'NA'
        print(image_path)
        print(User_uploaded_image_path)
        print(f"Performance {time.time()-start}")
        # return_mobile_model = mobile_name_passer()
        return render_template('Result.html',file_name = file.filename,model=mobile_data.get('model','NA'),rld=redlatdeg,rln=redlatnotts,rlf=redlatfina,rlod=redlondeg,rlon=redlonnotts,rlof=redlonfina,latref=mobile_data.get('gps_latitude_ref','NA'),lonref=mobile_data.get('gps_longitude_ref','NA'),imgwid=mobile_data.get('image_width','NA'),ori=mobile_data.get('orientation','NA'),gpsalt=mobile_data.get('gps_altitude','NA'),px=roundpixel,imghei=mobile_data.get('image_height','NA'),
                               exififd=mobile_data.get('_exif_ifd_pointer','NA'),resunit=mobile_data.get('resolution_unit','NA'), gpsifd=mobile_data.get('_gps_ifd_pointer','NA'),xres=mobile_data.get('x_resolution','NA'),yres=mobile_data.get('y_resolution','NA'),exposurepro=mobile_data.get('exposure_program','NA'),fnum=mobile_data.get('f_number','NA'),exposuretime=mobile_data.get('exposure_time','NA'),sstd=mobile_data.get('subsec_time_digitized','NA'),
                               ssto=mobile_data.get('subsec_time_original','NA'),sst=mobile_data.get('subsec_time','NA'),ycpos=mobile_data.get('y_and_c_positioning','NA'),dttime=mobile_data.get('datetime','NA'),make=mobile_data.get('make','NA'),apertureval=mobile_data.get('aperture_value','NA'),expo=mobile_data.get('exposure_time','NA'),ftype=file_extension,flas=mobile_data.get('flash','NA'),lightsource=mobile_data.get('light_source','NA'),mmmode=mobile_data.get('metering_mode','NA'),
                               scenecaptype=mobile_data.get('scene_capture_type','NA'),focallenin35=mobile_data.get('focal_length_in_35mm_film','NA'),maxaperture=mobile_data.get('max_aperture_value','NA'),datetimedig=mobile_data.get('datetime_digitized','NA'),expobiasval=mobile_data.get('exposure_bias_value','NA'),pixely=mobile_data.get('pixel_y_dimension','NA'),whitebal=mobile_data.get('white_balance','NA'),datetimeori=mobile_data.get('datetime_original','NA'),brightnessval=mobile_data.get('brightness_value','NA'),
                               pixelx=mobile_data.get('pixel_x_dimension','NA'),expomode=mobile_data.get('exposure_mode','NA'),laat=lat, loong=lon,gpsaltref=mobile_data.get('gps_altitude_ref','NA'),gpstime=mobile_data.get('gps_timestamp','NA'),gpsdate=mobile_data.get('gps_datestamp','NA'),colspace=mobile_data.get('color_space','NA'),shutterspeedval=mobile_data.get('shutter_speed_value','NA'),iso=mobile_data.get('photographic_sensitivity','NA'),focallength=mobile_data.get('focal_length','NA'),fsz=file_size,fsiz=fsize,
                               exif_version = mobile_data.get('exif_version','NA'),sensmethod = mobile_data.get("sensing_method","NA"),flasmode = flash_mode,rers = red_eye_reduction_supported,gps_data = gps_coords,embedded_map_place_holder = embedded_map_link, mobile_images_path = image_path,uploaded_image_path = User_uploaded_image_path)

# Mail service
@app.route("/mail",methods = ['POST'])
def mail_client():
     if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("Email")
        subject = request.form.get("subject")
        message = request.form.get("message")
        print(f"Name : {name}\nEmail : {email}\nSubject : {subject}\nMessage : {message}")
        with open("Emails.txt","a") as file:
            file.write(f"Name : {name}\nEmail : {email}\nSubject : {subject}\nMessage : {message}\n"+"#"*50+"\n")
        file.close()
        msg = f"""From: testmail2001@zohomail.in
To: {email}\n
Subject: Welcome {name}\n
Hi {name},\n Thank you for using our service.\n Our team will contact you as soon as possible!\n\n\nRegards,\nBrav0 Team.
"""
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(SMTP_SERVER,PORT,context=context) as mail_server:
            mail_server.login(SENDER_MAIL,PASSWORD)
            mail_server.sendmail(SENDER_MAIL,email,msg)
            print(f"Mail sent to {email}!")
        flash(f"Email has been sent to {email}")
        return redirect("/")
     
# extracting the Exif 
def exif(ImgPath):
    global mobile_data
    var = '\n'
    with open(ImgPath,'rb') as img_file:
        img = exif_image(img_file)
    for i in img.list_all():
        try:
            var += f"{i} : {img[i]}\n"
        except:
            var += ''
    mobile_data = dict(img.get_all())
    img_file.close()
    return mobile_data


def convert_bytes(size):
    for x in ['bytes', 'KB', 'MB', 'GB', 'TB']:
        if size < 1024.0:
            return "%3.1f %s" % (size, x)
        size /= 1024.0

    return size

def get_num_pixels(filepath):
    width, height = Image.open(filepath).size
    return width*height
    

def mobile_name_passer():
    make_name = mobile_data['make']
    model_name = mobile_data['model']
    mobile_name = make_name+' '+model_name
    actual_image_file_name = Mobile_scraper.get_mobile_image(mobile_name)
    return actual_image_file_name


# converting degree, minutes, seconds to co-ordinates suitable for Google Maps
def convertor(degree,minutes,seconds,direction):
    decimal_degrees = degree + minutes / 60 + seconds / 3600
    if direction == "S" or direction == "W":
        decimal_degrees *= -1
    return decimal_degrees



# create map
def create_google_maps_url(gps_coords):
    global Google_Map_Url
    try:   
        dec_deg_lat = convertor(float(gps_coords["lat"][0]),  float(gps_coords["lat"][1]), float(gps_coords["lat"][2]), gps_coords["lat_ref"])
        dec_deg_lon = convertor(float(gps_coords["lon"][0]),  float(gps_coords["lon"][1]), float(gps_coords["lon"][2]), gps_coords["lon_ref"])
    except:
        return "Null"
    # Google_Map_Url = f"https://maps.google.com/?q={dec_deg_lat},{dec_deg_lon}"
    # print(Google_Map_Url)
    return f"https://maps.google.com/?q={dec_deg_lat},{dec_deg_lon}"



# Obtaining the 
def GPSinformation(ImgPath):
    image = pillow_image.open(ImgPath)
    gps_coords = {}
    for tag,value in image._getexif().items():
        tagname = TAGS.get(tag)
        if tagname == "GPSInfo":
            for key,val in value.items():
                if GPSTAGS.get(key) == "GPSLatitude":
                            gps_coords["lat"] = val
                elif GPSTAGS.get(key) == "GPSLongitude":
                            gps_coords["lon"] = val
                elif GPSTAGS.get(key) == "GPSLatitudeRef":
                            gps_coords["lat_ref"] = val
                elif GPSTAGS.get(key) == "GPSLongitudeRef":
                            gps_coords["lon_ref"] = val
    return gps_coords


if __name__ == "__main__":
     app.run(debug=True)        #put debug = True to update the changes dynamically while changing
    # serve(app, host="0.0.0.0", port=8080)       