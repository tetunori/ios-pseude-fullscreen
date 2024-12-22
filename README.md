# iOS pseude fullscreen
Version 0.9.0  

# Description🖊️
I have just came up with an idea for iOS/iPad (pseudo)full screen feature by using WebRTC capture stream function(actually it generating tentative movie from p5js canvas dynamically).

- There is no side effect except for iOS/iPad devices
- It cannot be used in interactive sketches though..😅

# How to use🪄
## HTML
Add 2 line codes as below:
```html: index.html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="iosfullscreen.js"></script>⭐
```

## JavaScript
Call `iOSfullscreen()` after `creatCanvas(windowWidth, windowHeight)` as below:
```javascript: sketch.js
function setup() {
  createCanvas(windowWidth, windowHeight);
  iOSfullscreen();
}
```

# Article📰
後日⭐

# License⚖️
Copyright (c) 2024 [Tetsunori Nakayama](https://github.com/tetunori). MIT License.

# Author🧙‍♂️
Tetsunori Nakayama

# References📚
## p5.js
[p5.js](https://github.com/processing/p5.js) by [Processing Foundation](https://github.com/processing). GNU Lesser General Public License v2.1.
