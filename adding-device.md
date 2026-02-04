## In order to add chromebook doc

1. You need to add files inside /doc/{device type}/system/

{system codename}/{device codename}.md (base it on other device doc)

- {system codename}/assets/{device codename}.jpg (image of device) (optional)
  Should be no bigger than 200kb.
  No stock images, this might give copyright trouble.
  Only self created images which will be free to be used in the doc repo.

2. Add entry to:

/doc/{device type}/system/readme.md
and
/systemc/{system}/readme.md

3. Fill up device info:

readme.md

### You can also update existing documentation

## Additional notes

```diff
- broken
+ works
! partial
? unknown
```

What should be tested :
_Note. If not present on the device, it should be omitted._

Basic:

- Internal storage:
  - (working) Able to write to internal storage.
  - (broken) Unable to get working.
- Battery:
  - (working) Able to read battery level accurately.
  - (broken) Unable to get working.
- Screen:
  - (working) Screen works correctly out of the box.
  - (partial) Built-in display causes issues.
  - (broken) Unable to get working.

Peripheria:

- Touchscreen or Stylus:
  - (working) Touchscreen works correctly out of the box.
  - (partial) Requires tinkering to get working.
    - Needs orientation adjustments.
  - (broken) Unable to get working.
- Keyboard:
  - (working) Keyboard works correctly out of the box.
  - (broken) Unable to get working.
- Touchpad:
  - (working) Touchscreen works correctly out of the box.
  - (partial) Requires tinkering to get working.
    - Needs pressure sensitivity adjustments.
  - (broken) Unable to get working.
- Camera:
  - (working) Built-in camera works.
  - (broken) Unable to get working.
- Gyroscope:
  - (working) Gyroscope works.
  - (broken) Unable to get working.

Audio:

- Speaker:
  - (working) Builtin speaker works.
    - Random high pitch noise(s) should be noted, but it doesn't make it partial.
  - (partial) The speaker/s don't fully work
    - Only some speakers work.
    - Requires tinkering to get fully working.
  - (broken) Unable to get working.
- Headphones:
  _Note. Only for devices with headphone/headset jack, USB headphones don't count._
  - (working) Plugging in headphones works.
    - Lack of jack detection doesn't make it partial.
  - (partial) Plugging in headphones causes some issues.
    - Only microphone works.
  - (broken) Unable to get working.

Connectivity:

- WiFi:
  - (working) Works with all WiFi standards device supports.
  - (partial) Works with some standards device supports or causes other issues.
    - Only working with 2.4Ghz
    - Disconnects randomly without any reasons.
  - (broken) Unable to get working.
- Bluetooth:
  - (working) Works with all Bluetooth standards the device supports.
  - (partial) Works with some standards the device supports or causes other issues.
    - Doesn't work with some peripheria devices.
    - Disconnects randomly without any reasons.
  - (broken) Unable to get working.

Connectors:

- USB or USB-C:
  - (working) Works with all/most USB devices
    - Issue with niche devices (notably suzyq cable and DVD players) can/should be noted.
  - (partial) Doesn't work with some widely used devices (but not all).
    - Like mouse, keyboard, USB drives, etc.
  - (broken) Unable to get working
- HDMI or USB-C to HDMI/DP:
  - (working) Plugging in device works without major issues.
    - Audio being mute is not major issue but can be noted.
  - (partial) Device works only when plugged in under certain conditions.
    - Only when plugged in at boot.
  - (broken) Device does not work at all.
- Ethernet:
  - (working) Works with Ethernet devices.
  - (broken) Unable to get working.
- SD Reader:
  - (working) Works with SD card devices that device supports.
  - (broken) Unable to get working.

Other:

- Hardware encoding or Hardware decoding:
  - (working) Works by default in web browser/media player.
  - (partial) Needs tinkering to get working.
  - (broken) Unable to get working.
- 3D hardware acceleration (Opengl/Vulkan/...):
  - (working) At least one has to be present, working (and be conformant)
    - OpenGL X.X
    - Vulkan X
    - Other
  - (partial) One is present but not comformant/often results in graphical glitches.
  - (broken) Device runs (or has to run) on frame buffer (eg, LLVM).
