## Using touchscreen to right click

Some desktop environments (DE) like XFCE do not support this feature out of the box.
This tutorial works in both X11 and Wayland based setups, and is DE agnostic.

This can be achieved with https://github.com/PeterCxy/evdev-right-click-emulation/

First, install the build dependencies
```
sudo apt install build-essential git libevdev-dev
```
Then, download the source
```
git clone https://github.com/PeterCxy/evdev-right-click-emulation.git
```

Now, `go to evdev-right-click-emulation`, and change the line 19 of Makefile to the following (otherwise, it will fail to compile in recent versions of Ubuntu)
```
 	$(CC) $^ -o $@ $(CFLAGS)
```

Now, let's build it.

```
cd evdev-right-click-emulation
make all
```

If the build succeeds, it should create the binary file `out/evdev-rce`. To test it, run it with sudo,
```
sudo evdev-right-click-emulation/out/evdev-rce 
```
which should produce an output like
```
Found touch screen at /dev/input/event3: Elan Touchpad
Found touch screen at /dev/input/event2: hid-over-i2c 06CB:7817
```
Afterward, long tap to enable right click should work!

Run the following command (copy paste the multi-line command into the terminal and press enter) to enable this feature permanently, once and for all! 
(it creates a systemd service so that the program would run as root at startup)

```
sudo bash -c 'cat > /etc/systemd/system/long-tap-right-click.service <<EOF
[Unit]
Description=Enables long-tap-to-right-click
After=network.target

[Service]
ExecStart=/usr/local/bin/evdev-rce
Restart=always
User=root

[Install]
WantedBy=multi-user.target
EOF
sudo mkdir -p /usr/local/bin
sudo cp evdev-right-click-emulation/out/evdev-rce /usr/local/bin/
sudo systemctl daemon-reload
sudo systemctl enable long-tap-right-click.service
sudo systemctl start long-tap-right-click.service'
```
