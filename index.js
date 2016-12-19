'use strict';

var num = 100000;
var burst = new mojs.Burst({
  radius: { 0: 500 },
  count: 100,
  children: {
    shape: 'cross',
    stroke: 'white',
    strokeWidth: { 2: 1 },
    angle: { 0: 360 },
    radius: { 20: 1005 },
    duration: num
  }
});

var timeline = new mojs.Timeline({ repeat: 1000 }).add(burst).play();