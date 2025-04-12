# Base image
FROM myoung34/github-runner:latest

#install nginx
RUN apt-get update && apt-get install -y nginx cifs-utils

# Copy the static files into the Docker image
COPY src /var/www/html

EXPOSE 80

WORKDIR /actions-runner

COPY run.sh /
RUN chmod +x /run.sh

#run github-runner with nginx
# CMD ["sh", "-c", "./bin/Runner.Listener run --startuptype service & nginx -g 'daemon off;'"]
# CMD ["sh", "-c", "service nginx start && ./bin/Runner.Listener run --startuptype service"]
CMD ["sh", "-c", "/run.sh"]