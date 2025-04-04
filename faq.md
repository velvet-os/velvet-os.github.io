_Q.what's the login and passowrd_

A. login "linux" and password "changeme". you can [change login](./postinst/change-names.md)

_Q. how do i boot image_

A. chekc out [here](./first-steps.md)

_Q. how do i install the image onto chromebook / there is no installer_

A. [look here](./chromebooks/readme.md) (at the bottom), *make sure to read eveything*


_Q. my desktop is weird, i want diffrent one_

A. this is to be expected, you can [change it](./postinst/switch-de.md)

_Q. is there ${image not listed inside release} image_

A. not really, unless it's available on earlier releases

- when it comes to *ubuntu jammy* - you may [request an image](https://github.com/hexdump0815/imagebuilder/issues/129) (but it will take unspecified ammount of time)
- when it comes to *debian-derrivatives* (not ubuntu)(like kali/raspbian) - you may try adding distro repo to your sources.list, [like here](https://github.com/hexdump0815/imagebuilder/issues/225#issuecomment-2162170254) *(do not open issues about it, discussions are fine for this)*
- *unrealeated distro* - build it yourself, this framework should have all ya need in scripts directory if you know how to bootstrap your distro *(do not open issues about it, this is out of scope of the project)*