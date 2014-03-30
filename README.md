Phonegap-Realtime-Cavas-Demo
============================

This project is made to try a realtime canvas drawing( among various platforms i.e web/mobile ) in a phonegap app.

The **basic logic** behind the working of this project :
* Creating a canvas element where user can draw via touch movements.
* Sending x & y co-ordinates of touch to node.js server.
* Receiving the x & y co-ordinates from the node.js server and drawing the same in canvas element.

## Environment :
* Cordova CLI : 3.4.0
* Test Platform : Android
* Test Device : Moto G

## Dependencies :
This project is totally dependent with [Web-Realtime-Cavas-Demo](https://github.com/sumitkothari/Web-Realtime-Cavas-Demo) project.

[Web-Realtime-Cavas-Demo](https://github.com/sumitkothari/Web-Realtime-Cavas-Demo) project act as a node.js server for this phonegap client project.

## Quick Startup :
* First setup the node server at [Web-Realtime-Cavas-Demo](https://github.com/sumitkothari/Web-Realtime-Cavas-Demo).
* Clone this repo and setup as phonegap project.
* Check [www](https://github.com/sumitkothari/Phonegap-Realtime-Cavas-Demo/tree/master/www) folder to tweak and manupulate the things.
