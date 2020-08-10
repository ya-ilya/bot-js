#!/bin/bash

cd /home/mika/bot
git pull
pm2 reload bot
