kill -9 $(ps aux | grep '\snode\s' | awk '{print $2}')
sleep 2s && ((sleep 10s && npm run electron) & (npm start) &)
