#!/bin/bash

echo "Updating!"
pkill -9 node
cd /home/mika/bot
git pull
node index.js
