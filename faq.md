_Q. What's the login and password?_

A. The login is "linux" with the password "changeme". You can [change login](./postinst/change-names.md)

_Q. How do i boot the image?_

A. Check out [here](./first-steps.md)

_Q. Can i restore chrome os on my device after installation?_

A. Yes! You can do that very easily using chrome os recovery image you can get from https://cros.tech/ or any other source.

_Q. How do i install the image onto chromebook / There is no installer_

A. [look here](./chromebooks/readme.md) (at the bottom), *Make sure to read everything*


_Q. My desktop is weird, i want different one_

A. This is to be expected, you can [change it](./postinst/switch-de.md)

_Q. Is there ${image not listed inside release} image?_

A. Not really, unless it's available on earlier releases.

- When it comes to *Ubuntu jammy* - you may [request an image](https://github.com/hexdump0815/imagebuilder/issues/129) (but it will take unspecified amount of time)
- When it comes to *Debian-derivatives* (not Ubuntu)(like Kali/Raspbian) - You may try adding distro repo to your sources.list, [like here](https://github.com/hexdump0815/imagebuilder/issues/225#issuecomment-2162170254) *(do not open issues about it, discussions are fine for this)*
- *Unrelated distro* - Build it yourself, this framework should have all ya need in scripts directory if you know how to bootstrap your distro. *(do not open issues about it, this is out of scope of the project)*
