# HomeHub

## Autostart

On a Raspberry Pi 4 run the following command:

```sh
sudo nano /etc/xdg/lxsession/LXDE-pi/autostart
```

Then add the following line:

```sh
@lxterminal -e /home/pi/HomeHub/start.sh
```

## OctoPrint iFrameSupport

Run the following commands:

```sh
~/oprint/bin/octoprint config set --bool server.allowFraming true
```

```sh
sudo service octoprint restart
```

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
