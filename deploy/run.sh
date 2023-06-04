#!/bin/bash
docker run -e LOOPWORMS_API_KEY=$LOOPWORMS_API_KEY -e LOOPWORMS_LOOPERLANDS_BASE_URL=$LOOPWORMS_LOOPERLANDS_BASE_URL \
 -e DISCORD_TOKEN=$DISCORD_TOKEN -v /etc/letsencrypt/live/loopworms.io:/certs  -t -i -p 8000:8000 -t looperlands