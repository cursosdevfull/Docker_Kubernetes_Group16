# 200MB
FROM ubuntu:24.04  
# 230MB
RUN apt-get update && apt-get install apache2 -y
# 240MB
COPY ./www /var/www/html
CMD ["apache2ctl", "-D", "FOREGROUND"]