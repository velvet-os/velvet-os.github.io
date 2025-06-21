The default XFCE session does not play very well with touchscreens. Of course, you can switch to GNOME and KDE which use wayland and there you can long tap to emulate right click, but many devices are not powerful enough (or lack GPU driver) to run GNOME or KDE.
Here we describe how to emulate right click behavior in XFCE by a long tap.

You can do this with https://github.com/PeterCxy/evdev-right-click-emulation/

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
$ sudo evdev-right-click-emulation/out/evdev-rce 
```
which should produce an output like
```
Found touch screen at /dev/input/event3: Elan Touchpad
Found touch screen at /dev/input/event2: hid-over-i2c 06CB:7817
```
Afterward, long tap to enable right click should work!

---

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
