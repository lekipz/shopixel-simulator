FROM nginx:alpine
COPY build /usr/share/nginx/html/
COPY deploy/nginx.conf /etc/nginx/conf.d/shopixel.conf
