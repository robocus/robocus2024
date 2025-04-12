#!/usr/bin/env bash
set -e
#support both bash and hassio env variables

#environment variable check
CONFIG_PATH=/data/options.json

#if config file exists, use this
if [ -f $CONFIG_PATH ]; then
    ACCESS_TOKEN=$(jq --raw-output '.ACCESS_TOKEN // "'${ACCESS_TOKEN}'"' $CONFIG_PATH)
    REPO_URL=$(jq --raw-output '.REPO_URL // "'${REPO_URL}'"' $CONFIG_PATH)
    
    #for home assistant import local variables
    export ACCESS_TOKEN
    export REPO_URL
else
    echo "No config file found, using environment variables"
fi

echo "ACCESS_TOKEN: $ACCESS_TOKEN"
echo "REPO_URL: $REPO_URL"

if [ -z "$ACCESS_TOKEN" ]; then
    echo "ACCESS_TOKEN is required"
    exit 1
fi

if [ -z "$REPO_URL" ]; then
    echo "REPO_URL is required"
    exit 1
fi

# if robocus folder exists, copy to /var/www/html
if [ -d "/share/robocus" ]; then
    cp -r /share/robocus/* /var/www/html
    echo "copied robocus to /var/www/html"
else
    mkdir -p /share/robocus]
    echo "created robocus"
fi

#excute /entrypoint.sh
echo "Starting entrypoint.sh"

bash /entrypoint.sh

echo "Starting runner"

./bin/Runner.Listener run --startuptype service & nginx -g 'daemon off;'
