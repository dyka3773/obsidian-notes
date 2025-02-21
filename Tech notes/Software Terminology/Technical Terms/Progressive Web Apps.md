---
tags:
  - tech
aliases:
  - PWA
  - PWAs
---
A progressive web application (PWA), or progressive web app, is a type of web app that can be installed on a device as a standalone application.
PWAs are installed using the offline cache of the device's web browser.

PWAs were introduced from 2016 as an alternative to native (device-specific) applications, with the advantage that they do not require separate bundling or distribution for different platforms.
They can be used on a range of different systems, including desktop and mobile devices.

Because a PWA is delivered in the form of a webpage or website built using common web technologies including [[HTML]], [[CSS]], [[JavaScript]], and [[WebAssembly]], it can work on any platform with a PWA-compatible browser.

## Features

- Can be written using [[vanilla js]], [[HTML]], [[CSS]]
- Can be accessed via web address, not app store
- Can be installed on mobile home screen with custom icon (`manifest.json` setting)
- Run on browser window and support an **app-like view** (no address bar/browser menus) (`manifest.json` setting)
- Can access mobile device features
- Can be accessed when offline (Through `service-workers`: intercepting requests and using cache [[api]])
- Can receive web push notifications