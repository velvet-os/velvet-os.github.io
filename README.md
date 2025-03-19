# Velvet os

![kappa and juniper with velvet](https://github.com/hexdump0815/linux-mainline-on-arm-chromebooks/raw/main/images/kappa-and-juniper-with-velvet.jpg "kappa and juniper with velvet")

**Remember Login: linux / Password: changeme !!!**

## [Getting started](./first-steps.md)
_how to boot and install stuff_

## [News](./news.md)

## [Important latest informations about the images](./important-information.md)
(please check them out!)

## [FAQ](./faq.md)
_read before opening issues_

## [Prebuilt images and general system info](https://github.com/hexdump0815/imagebuilder/tree/main)


## [Creating images](./using-the-imagebuilder-framework.md)

# About the project

_For more details and images look below_

This is a simple framework for building bootable sd card images for various (currently mostly arm based) small computer like devices. It is supposed to run natively, i.e. if you want to build an image for a 32bit arm system you should run it on a 32bit arm system and so on. I started it when I wanted to easily and reproducibly build bootable sd card images for some arm devices for which there are no such images with recent distributions and linux kernels available or do not exist at all. I'm aware of the armbian (https://www.armbian.com/) framework, which has a similar goal and is much more advanced, but I wanted something simpler so that I can easily adjust it for prototyping and I wanted to build everything natively as I do not really have any strong intel machine for cross compiling. If anyone with armbian knowledge and a proper build environment is interested to port over the patches etc. for the few systems not yet supported by armbian to it, that would be more than welcome.

Please keep in mind that the intention of those images is to make it easier to get started on, not to provide well supported systems or setups. They are not intended as a fully end user ready distribution - some fine tuning and adjustment will most probably be required  to make them fully working. But at least you do not have to think about how to get some device booting or where to get a working kernel from etc. - as such it should be a very good starting point for anyone with some (or more) linux experience and for anyone wanting to learn more about the system they are using.

The framework supports building debian and ubuntu images as they are very widely used linux distributions and they are very close to each other in the way they are designed and work (package management etc.). The chance that support for other linux distributions will be added is rather low as this would make things way more complicated and one of the basic ideas of this framework is to be small and simple while still being quite flexible.

The imagebuilder framework currently supports more than 30 different systems (which might support multiple separate devices each in many cases) and the level at which they are supported varies a bit among them, but for all of them at least some bootable images exist to get started and to maybe improve them further. The systems with the most focus currently are most probably **chromebooks** (i.e. running a proper linux system instead of chromeos on them) as they are a perfect option to run linux on an arm soc based notebook at a very good price point and the odroid u/x series of sbc devices as there seem to be no other regularly maintained linux for them anymore otherwise.

For communication github discussions or github issues of this repo should be used. Before creating a new one, please check if there is already another one regarding the topic or problem existing. When creating a new one it is very important to always include all the basic information required, like which hardware is used, which image is used. In case of problems: how exactly do they manifest (instead of just "does not work") and in which context do they appear. With all this, please keep in mind that this is not a product, but a spare time project done and supported by volunteers - so it might take time until there is a solution, answer or suggestion or there might be even none. there is one special category of issues so far which is dealing with the state of certain systems and they have subjects like "chromebook_trogdor: status: coachz" - so it might be a good idea to search the github issues for such "status" information for a certain system.

Finally some notes about the name: the framework did not have any real name so far besides "imagebuilder", but as this is hard to find and not so easy to reference I have decided to give it some name, so it can be referenced easier than as "images built with the hexdump0815 imagebuilder framework" - lets call it "velvet os" from now on. The name comes from the fact, that I sometimes use self-adhesive velvet to cover the (sometimes heavily scratched) top of my chromebooks, which has the nice side effect to let all the marketing branding of the device disappear, making it a perfect velvet os device ...Let's hope that using velvet os images one day will be an as pleasant experience as touching velvet :)




