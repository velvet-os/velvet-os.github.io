# Installing a newer kernel.

## Where to get a newer kernel from?

There are two possible sources for newer kernels: either a new self built
kernel (the recommended way - see building-own-kernels.md) or if there is a
newer kernel available in the release area of the kernel build info repo which
can happen from time to time with no real guarantee if and when it might happen.

## How to install it

The kernel build is either a tar.gz archive which needs to be unpacked as root
from the root directoy (here 5.19.1-stb-exy+.tar.gzn as an example):
```
cd /
tar xzf /somepath/5.19.1-stb-exy+.tar.gz
```
In the archive are some files in /boot, dtb files (if they exist for the kernel)
in /boot/dtb-5.19.1-stb-exy+ and the kernel modules and some tools in
/lib/modules/5.19.1-stb-exy+ (the plus sign at the end of the kernel version is
there if any kind of patches got applied relative to the clean original linux
mainline kernel tree).

For simplicity of installation, install [velvet-tools](https://github.com/velvet-os/velvet-tools) (if not already installed):
```
sudo apt install velvet-tools
```
Now build the unarchived kernel with

```
sudo vtbuild 5.19.1-stb-exy+
```

Now, run the following to test the kernel so that the new kernel is **temporarily loaded** after reboot.
```
sudo vttest 5.19.1-stb-exy+
```
Now **reboot**. Verify that the system functions properly. If you are happy with the new kernel,
**permanently flash it** with
```
sudo vtflash 5.19.1-stb-exy+
```
**Reboot**.

In case of a luks encryted root filesystem even
reqired to rebuild the corresponding initramfs after installing a new kernel
via the following command:
```
initramfs-update -c -k 5.19.1-sty-exy+
```

If the kernel is the result of an own kernel build then everything should
already be in place.



**The following section is kept for historical purpose. 
For modern ARM64 Chromebooks running Debian bookworm or Trixie, read the section above.**

## How to activate/use the new kernel

This depends on the way a system is booted and is described for the different
bootloaders in the following subsections:

### U-boot

A new entry for new kernel version has to be created in the file
/boot/extlinux/extlinux.conf - the easiest way is to simply copy and paste
another entry and adjust the kernel version for it. it might be required to
adjust the DEFAULT entry in extlinux.conf as well - this is only required if
there is no boot menu accessible via kayboard/display or serial console during
boot.

### GNU grub

After running the "update-grub" command as root, it should include the new kernel
into the grub boot menu. Be aware: Depending on the kernel version number it
might not be set as the defulat kernel to be booted and might need manual
selection at the grub boot prompt.

### Chromebooks

First a note regarding 32bit armv7l chromebooks: so far they are not using the
kpart kernel image based approach as described below (which is valid for all
64bit aarch64 chromebooks) - they are using u-boot instead, so the u-boot
section should apply. Intel based chromebooks usually using some form of grub
booting, so the grub section should apply for those.

Chromebook images can boot kernels from one of the two special kernel
partitions of the disk (the first two small partitions), but the kernel builds
usually only build a kernel, which can be booted from the first partition as
during the creation of the kpart kernel boot image the root filesystem defined
for the kernel is hard coded to "root=PARTUUID=%U/PARTNROFF=3" which will use
the partiton with the offset 3 from the partition of the booted kernel as root
filesystem. as the root filesystem on those images is on partition 4 the
kernel has to be in partition 1 to be able to find it (1+3 = 4). a new kpart
image needs to be built with an offset of 2 to be able to boot it for testing
purposes for instance from the second kernel boot partition.

To install a chromebook kernel in the kpart format it simply has to be written
to the first partition of the device the image had been installed on (sd card
or usb disk) with the linux dd command like for example (assuming mmcblk0 as
device):
```
dd if=/boot/vmlinux.kpart-xyz of=/dev/mmcblk0p1
```
Or (assuming sda as device):
```
dd if=/boot/vmlinux.kpart-xyz of=/dev/sda1
```
Please double check the device name the kernel is being written to beforehand,
as the dd command will simply override what is there without asking and
without any extra checks.

Chromebooks will always boot from the kernel boot partition with the highest
priority, which is by default the first kernel boot partition of the images. It
is possible to change the priority to make the second partition the one with
the highest priority so that it will get booted automatically during the next
boot with the following command:
```
cgpt add -i 2 -S 0 -T 1 -P 15 /dev/mmcblk0
```
Assuming /dev/mmcblk0 to be the device for the disk to be booted. this switch
of boot priorities is only valid for a single boot, i.e. booting from the
second kernel boot partition has to be requested via this command new each
time. more information about how to test boot new kernels on chromebooks can
be found in test-booting-a-kernel-on-chromebooks.txt ...
