FROM docker.io/node:5.1
MAINTAINER Goran Sterjov <goran.sterjov@gmail.com>

RUN npm install -g statsd statsd-influxdb-backend

EXPOSE 8125

COPY config.js /etc/statsd/config.js

CMD ["statsd", "/etc/statsd/config.js"]
