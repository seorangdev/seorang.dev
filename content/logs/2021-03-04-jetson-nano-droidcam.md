+++
title = "Using DroidCam CLI on Jetson Nano"
description = "A cheaper webcam alternative"
date = 2021-03-04
draft = false
+++

## Why

In Windows world, we have many third-party tools that allows us to use the already great smartphone camera as a webcam. One of the options is DroidCam. But can it be used in Linux? and importantly on ARM/ARM64 architecture like in Jetson Nano? Fortunately yes! While we have to build it ourselves, it still possible to use DroidCam in Jetson Nano.

## How

### 1. Install the build tools

```sh
$ sudo apt install cmake gcc make
```

### 2. Install libjpeg-turbo

We will need this library in source and binary form. The binary have to be placed in `/opt/libjpeg-turbo/lib64` and the source (the one that we download and extract) have to be placed in `/opt/libjpeg-turbo/include`.  

Let's download the source (you might want to use the newer version)

```sh
$ wget https://sourceforge.net/projects/libjpeg-turbo/files/2.0.4/libjpeg-turbo-2.0.4.tar.gz
```

#### 2.1. Preparation

```sh
# Create the destination directory
$ sudo mkdir -p /opt/libjpeg-turbo/lib64

# Extract the downloaded tarball
$ tar -xzvf libjpeg-turbo-2.0.4.tar.gz

# Move and rename the extracted folder
$ sudo mv libjpeg-turbo-2.0.4 /opt/libjpeg-turbo/include
```

#### 2.2. Build

```sh
# Go to the lib64 directory
$ cd /opt/libjpeg-turbo/lib64

# Start the build
/opt/libjpeg-turbo/lib64$ cmake -G"Unix Makefiles" /opt/libjpeg-turbo/include
/opt/libjpeg-turbo/lib64$ make
```

### 3. Install the DroidCam CLI

```sh
# Install the required dependencies
$ sudo apt install libavutil-dev libswscale-dev libasound2-dev libspeex-dev libusbmuxd-dev libplist-dev

# Downlaod DroidCam source code
$ cd ~/ && git clone https://github.com/dev47apps/droidcam && cd droidcam

# Build the DroidCam CLI
~/Documents/droidcam$ make droidcam-cli

# Install DroidCam CLI
~/Documents/droidcam$ sudo ./install-client

# Install DroidCam webcam driver
~/Documents/droidcam$ sudo ./install-video

# Check if the driver successfully installed. Non-empty result means success.
~/Documents/droidcam$ lsmod | grep v4l2loopback_dc

# Copy the `droidcam-cli` to `/usr/bin/` so we can call it from anywhere
~/Documents/droidcam$ sudo cp droidcam-cli /usr/bin
```

### 4. Connect to smartphone

We can start running the DroidCam mobile app and connect to it via IP and Port
just like we do on Windows using this command:

```sh
$ droidcam-cli <ip> <port>
```

Shortly after, you will see something like `Video: /dev/video0`, that's your webcam device.

### 5. Test the output

We can then test the webcam device using this command:

```sh
$ gst-launch-1.0 v4l2src device=/dev/video0 | xvimagesink
```

Change `/dev/video0` to the one that you got previously.

## References

- [DroidCam GitHub](https://github.com/dev47apps/droidcam)
- [Installation on Raspberry Pi](https://github.com/dev47apps/droidcam/wiki/Raspberry-PI)
- [How do I watch m webcams feed on Linux?](https://unix.stackexchange.com/questions/3304/how-do-i-watch-my-webcams-feed-on-linux)
