ARG DEB_VERSiON=11
FROM debian:${DEB_VERSiON}}

ENV DEBIAN_FRONTEND=nointeractive
ENV DEBCONF_NONINTERACTIVE_SEEN true

WORKDIR /var/www/html
RUN apt-get update && apt-get install -y neofetch nginx ccze
COPY entrypoint.sh /

EXPOSE 8080/tcp
ENTRYPOINT ["sh", "/entrypoint.sh"]
