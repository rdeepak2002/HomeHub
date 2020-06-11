kill -9 $(ps aux | grep '\snode\s' | awk '{print $2}')
export DISPLAY=:0
sleep 2s && ((sleep 30s && npm run electron) & (npm start) &)
