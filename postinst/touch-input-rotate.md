## Appropriately rotate touchscreen input and touchpad input while rotating screen in XOrg.

If you are running **Wayland**, run `sudo apt install iio-sensor-proxy`, and reboot. Your screen as well as the touch input should autorotate.

---

However, if you are running **X.Org** (e.g. running XFCE/MATE), you'll painfully discover that changing the screen orientation in the MATE/XFCE settings does not change the touchscreen input orientation. For example, if you invert your screen, and touch the top-right corner, it will register a touch event in the bottom-left corner.

![image](https://github.com/archisman-panigrahi/surface-RT-screen-rotator/raw/screen-orientation-manager/Screenshots/screenshot1.png)

In this case, you will have to install the [Screen Orientation Manager](https://github.com/archisman-panigrahi/surface-RT-screen-rotator) app.

This method works in all DEs I have tested (GNOME/KDE/Cinnamon/XFCE/MATE/LXDE) and should work everywhere. Written in Python, it works on both ARM and x86_64 computers.


First, add the [Velvet OS repo](https://gitlab.com/velvet-os/velvet-repo#adding-repo) (newer images already come with the repo configured)

```
#add public key
curl -sS https://repo.velvet-os.org/repo/velvet_repo.asc | sudo tee -a /etc/apt/trusted.gpg.d/velvet_repo.asc
#add source
echo "deb [arch=arm64,all] https://repo.velvet-os.org/repo stable main" | sudo tee /etc/apt/sources.list.d/velvet_repo.list
```
Then, run 
```
sudo apt update
sudo apt install screen-orientation-manager
```

Alternatively you can download and install the prebuilt .deb package from [GitHub releases](https://github.com/archisman-panigrahi/surface-RT-screen-rotator/releases). 

Run `xinput list` to get the ID for the touchscreen (it may be `hid-over-i2c something:something` or `Elan Touchscreen` or something else) and touchpad (it may be `Elan Touchpad` or something similar). Enter them into the app (it will remember them afterward) and click on the "Lock Touchscreen and Touchpad ID to save" checkmark.

Finally, add the `Screen Orientation Manager` app to the list of startup programs.