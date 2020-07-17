#!/bin/bash

pkill -9 node
cd /home/mika/bot
git pull
node index.js
