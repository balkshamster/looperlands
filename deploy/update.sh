#!/bin/bash

today=`date +"%s"`
export $(cat /home/looperlands/.env | xargs)

# Build #
cd looperlands
git checkout .
git pull
./config_manager.py configs/loopworms_config.json
docker build . -t looperlands

# Deploy #

# Kill looperlands containers
docker ps  | grep looperlands | cut -d " " -f 1 | xargs docker stop

# Run looperlands container
docker run --name looperlands-$today -d -e LOOPWORMS_API_KEY=$LOOPWORMS_API_KEY -e LOOPWORMS_LOOPERLANDS_BASE_URL=$LOOPWORMS_LOOPERLANDS_BASE_URL \
 -e DISCORD_TOKEN=$DISCORD_TOKEN -v /etc/letsencrypt/live/loopworms.io:/certs -p 8000:8000 -t looperlands 
