cd /home/pi/HomeHub/
export DISPLAY=:0
sleep 2s && ((sleep 30s && npm run electron) & (npm start) &)
