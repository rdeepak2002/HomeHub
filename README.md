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

## OctoPrint iFrameSupport (Required)

Run the following commands:

```sh
~/oprint/bin/octoprint config set --bool server.allowFraming true
```

```sh
sudo service octoprint restart
```

## Pico Text to Speech Installation (Required)
Force the audio output to HDMI: https://www.raspberrypi.org/documentation/configuration/audio-config.md#:~:text=The%20Raspberry%20Pi%20has%20two,plugged%20into%20the%20headphone%20jack.
```sh
sudo apt-get install pulseaudio
```
```sh
sudo modprobe snd_bcm2835
```
```sh
sudo apt-get install alsa-utils
```
```sh
start-pulseaudio-x11
```
```sh
sudo apt-get install mpg123
```
```sh
sudo nano /etc/modules
```
Then add the line: snd_bcm2835
```sh
sudo apt-get install mplayer
```
```sh
sudo nano /etc/mplayer/mplayer.conf
```
```sh
nolirc=yes
```
```sh
wget http://ftp.fr.debian.org/debian/pool/non-free/s/svox/libttspico-data_1.0+git20130326-3_all.deb
```
```sh
wget http://ftp.fr.debian.org/debian/pool/non-free/s/svox/libttspico0_1.0+git20130326-3_armhf.deb
```
```sh
wget http://ftp.fr.debian.org/debian/pool/non-free/s/svox/libttspico-utils_1.0+git20130326-3_armhf.deb
```
```sh
sudo dpkg -i libttspico-data_1.0+git20130326-3_all.deb
```
```sh
sudo dpkg -i libttspico0_1.0+git20130326-3_armhf.deb
```
```sh
sudo dpkg -i libttspico-utils_1.0+git20130326-3_armhf.deb
```


### `npm install`

Installs node modules.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
