# The installation script

in this approach we do not dump the image file onto the emmc but instead simply sync the contents of the running system onto newly created filesystems on the emmc. the advantages over legacy dd installation are:
- internet not required - no network connection required and the running system has everything required
- ability to preconfigure - the running image can already be a bit preconfigured and all changes to it will also be synced to emmc (maybe useful when installing on multiple identical systems)
- no uuid conflict - the filesystems on the emmc will get new filesystem uuids and also the labels of the filesystems can be easily adjusted, so no risk of a conflict with a booted rescue system from sd card/usb
- simpler than regular installation
- **only arm64 chromebooks supported**

_Note. **before proceeding** with installation it is recommended to first [set gbb flags](../setting_gbb_flags.md)_

_Remember. these steps have to be done from [linux booted from usb](../readme.md), not chromeos_

## Introduction

as of version 0.7.7 [velvet tools](https://github.com/velvet-os/velvet-tools) include ```vtinstall``` command

before proceeding with the installation make sure you have version 0.7.7 or higher with the following command
```
dpkg -l velvet-tools
```

#### if you have an ealier version run
```
sudo apt update
sudo apt full-upgrade
```

#### if your system doesn't come with velvet tools installed

you can get .deb version from https://github.com/velvet-os/velvet-tools/releases

or

install them via [velvet-repo](https://gitlab.com/velvet-os/velvet-repo)

```
#add public key
curl -sS https://repo.velvet-os.org/repo/velvet_repo.asc | sudo tee -a /etc/apt/trusted.gpg.d/velvet_repo.asc
#add source
echo "deb [arch=arm64,all] https://repo.velvet-os.org/repo stable main" | sudo tee /etc/apt/sources.list.d/velvet_repo.list
#fetch repo content
sudo apt update
#installe velvet tools
sudo apt install velvet-tools
```

## Installation process

1. start by listing all possible installation devices
```
vtinstall
```

2. run the following command to install
```
sudo vtinstall <device>
```
_Warning. make sure your device doesn't go into suspense, this might disrupt the installation_
_Tip. replace <device> with device you want to install onto like sda or mmcblk0 or mmcblk1_

the script should prompt you for confirmation
and after that everything should just happend

after script finished just restart the device and everything should **just work**

#### if you encouter any issue with the script

please report them [here](https://github.com/velvet-os/velvet-tools/issues)

## Graphical installation (experimental)

there exist also *experimantel* graphicall wrapper around this command

which serves the exact seame purpose as ```vtinstall``` and is just fancy wrapper around it

this installer is debian trixie/sid only (won't work on bookworm)

![vi](./assets/velvet-installer.png)

_Note. it will look a bit diffrent on currecnt default desktop due to theming diffrence_

https://github.com/thenameisluk/velvet-installer

you can install it via velvet repo (look above on adding velvet repo)
```
sudo apt install velvet-installer
```

once installed it should be available in applications menu

_Warning. again make sure your device doesn't go into suspense during the installation, this might disrupt the installation_

#### if you encouter any issue with the graphical installer

please report them [here](https://github.com/thenameisluk/velvet-installer/issues)

keep in mind this is just a Proof-of-Concept