// MIT License
//
// Copyright (c) 2024 Tetsunori Nakayama

let gCanvasStream = undefined;
let gVideoElement = undefined;

const CANVAS_VIDEO_ID = 'canvasVideo';

// Create Video element from p5.js canvas
// Actually, we make the tag below under body element.
//   <video id="canvasVideo" width='100%' controls></video>
const createCanvasVideoElement = () => {
  if (gVideoElement) {
    return;
  }
  const vElm = document.createElement('video');
  vElm.id = CANVAS_VIDEO_ID;
  vElm.setAttribute('width', '100%');
  vElm.setAttribute('controls', '');

  // Insert video tag as first child
  document.body.insertBefore(vElm, document.body.firstChild);
  gVideoElement = vElm;
};

function iOSfullscreen() {
  // Judge whether the device is iOS or not.
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.indexOf('iphone') !== -1 || ua.indexOf('ipad') !== -1) {
    // iOS user!

    createCanvasVideoElement();

    if (gCanvasStream) {
      // Initialize stream if canvasStream already exists
      const tracks = gCanvasStream?.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
      gCanvasStream = undefined;
    }

    const canvasElm = document.querySelector('canvas');

    // Hide canvas
    canvasElm.setAttribute('visibility', 'hidden');

    // Start capuring stream and set it into video source.
    gCanvasStream = canvasElm.captureStream();
    const canvasVideo = document.getElementById(CANVAS_VIDEO_ID);
    canvasVideo.srcObject = gCanvasStream;
  }
}
