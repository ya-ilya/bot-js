#!/bin/bash

cd /home/mika/bot
git pull origin master
pm2 reload bot
