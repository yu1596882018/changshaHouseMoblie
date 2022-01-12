FROM nginx:1.19

ADD nginx_dev.conf /etc/nginx/nginx.conf

ADD dist /opt/public/

EXPOSE 28080
