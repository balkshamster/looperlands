#!/bin/bash
cd looperlands
./config_manager.py configs/loopworms_config.json
docker build . -t looperlands