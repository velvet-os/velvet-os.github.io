# Getting FRC WPILib SDK To work

## What is the First Robotics Competition (FRC)
![maxresdefault (1)](https://github.com/user-attachments/assets/afba0923-88fc-4ace-83bd-cf131d4b532c)



FRC (FIRST Robotics Competition) is an international high school robotics program where teams design, build, and program industrial-sized robots to compete in complex, alliance-based games. Teams that do well go to the World Championships in Houston and other premier events hosted by specific teams.

### Where we begin



Install necessary runtime and patching deps
```
sudo apt-get install libuuid1 patchelf libfreetype6
```

Download the WPILib suite by going to https://github.com/wpilibsuite/allwpilib/releases, selecting the latest version and downloading for "Linux arm64"

Extract it by doing
```
sudo tar -xvf [LOCATION TO DOWNLOADED FILE]
```
where ```[LOCATION TO DOWNLOADED FILE]``` is the place where the file was downloaded


Patching WPILibInstaller

Go to the extracted folder directory and run
```
patchelf --add-needed libfreetype.so.6 WPILibInstaller
patchelf --add-needed libuuid.so.1 WPILibInstaller
```

run the patched installer
```
./WPILibInstaller
```

When you get to the VSCode download screen, choose this option:
<img width="800" height="600" alt="lol" src="https://github.com/user-attachments/assets/0803f619-8f8e-46a3-bf33-a25acd35a593" />

Then click next. Once done it should show a successful installation message.

### thats it

_Fun Fact. In bash you can define functions to be ran as strings with spaces in them.
