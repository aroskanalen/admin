FROM ubuntu:latest

RUN apt-get update

RUN apt-get install openjdk-8-jre wget systemd -y

RUN wget https://download.elastic.co/elasticsearch/elasticsearch/elasticsearch-1.7.1.deb
RUN dpkg -i elasticsearch-1.7.1.deb

RUN /usr/share/elasticsearch/bin/plugin install elasticsearch/elasticsearch-analysis-icu/2.5.0

WORKDIR /usr/share/elasticsearch

RUN set -ex && for path in data logs config config/scripts; do \
        mkdir -p "$path"; \
        chown -R elasticsearch:elasticsearch "$path"; \
    done

COPY logging.yml /usr/share/elasticsearch/config/
COPY elasticsearch.yml /usr/share/elasticsearch/config/

USER elasticsearch

ENV PATH=$PATH:/usr/share/elasticsearch/bin

CMD ["elasticsearch"]

EXPOSE 9200 9300
