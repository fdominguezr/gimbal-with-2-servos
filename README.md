This is a prof of concept for a simple gimbal stabilizer with a Micro:bit board and two servos.
It won't hold any heavy stuff like mobile phone, HD cameras, etc, but some simple camera small should be fine.

<p align="center">
<img src="https://github.com/fdominguezr/gimbal-with-2-servos/blob/master/Franciscodr_Gimbal_MicroBit_test1.gif" alt="A simple video showing the gimbal working" >
</p>

Be careful with the servos, better with metal gear ("MG"), but the consume more.
4 x 1.5 V AA batteries or 5 x 1.2 V AA batteries (6 VDC) should be enough, but don't expect a very smooth work, as servos usually requiere quite enough current. Ni-Cd or Li-ion batteries are better (see more comments in my Instructable, linked below).

Some adjustments can be made by software in my code, specially:
* Offset: if the main arm or the stable platform are not perfectly aligned, you can move a bit each servo's leaver, but a finer way is with the x and z offsets that are included in the software.
* You can test the level by pressing the A button.

See it working in:
* [Youtube,](https://youtu.be/VuGXV820Kuo)
* [my twitter here,](https://twitter.com/Franciscodr/status/1279913283710070785).
* [and how to make it in Instructables.](https://www.instructables.com/id/Simple-Gimbal-With-Microbit-and-2-Servos)

> To see the code, open this page at [https://fdominguezr.github.io/gimbal-with-2-servos/](https://fdominguezr.github.io/gimbal-with-2-servos/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/fdominguezr/gimbal-with-2-servos** and import

## Edit this project ![Build status badge](https://github.com/fdominguezr/gimbal-with-2-servos/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/fdominguezr/gimbal-with-2-servos** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/fdominguezr/gimbal-with-2-servos/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
