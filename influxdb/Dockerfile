FROM docker.io/debian
MAINTAINER Goran Sterjov <goran.sterjov@gmail.com>

RUN apt-get update && apt-get install -yq curl

RUN curl -s -o /tmp/influxdb_latest_amd64.deb http://influxdb.s3.amazonaws.com/influxdb_0.9.5.1_amd64.deb && \
	dpkg -i /tmp/influxdb_latest_amd64.deb && \
	rm /tmp/influxdb_latest_amd64.deb && \
	rm -rf /var/lib/apt/lists/*

EXPOSE 8083 8086

VOLUME ["/data"]

COPY influxdb.conf /etc/influxdb/influxdb.conf

CMD ["/usr/bin/influxd", "-config", "/etc/influxdb/influxdb.conf"]
