#!/bin/bash
pkill screen
cd ~/w210_prj/ui/brief_podcast
screen -d -m npm run dev
cd ~/w210_prj/web_service
screen -d -m npm start
cd ~/w210_prj
