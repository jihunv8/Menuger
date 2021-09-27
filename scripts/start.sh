#!/bin/bash
cd /home/ubuntu/Menuger/server

export MONGO_URL=$(aws ssm get-parameters --region ap-northeast-2 --names MONGO_URL --query Parameters[0].Value | sed 's/"//g')
export PORT=$(aws ssm get-parameters --region ap-northeast-2 --names PORT --query Parameters[0].Value | sed 's/"//g')

authbind --deep pm2 start app.js