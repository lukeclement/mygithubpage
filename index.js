'use strict';

var num = 100000;
var burst = new mojs.Burst({
  radius: { 0: 500 },
  count: 100,
  degree: 90,
  children: {
    shape: 'cross',
    isShowStart: true,
    stroke: 'white',
    strokeWidth: { 2: 1 },
    angle: { 0: 720 },
    radius: { 20: 700 },
    duration: num
  }
});

var timeline = new mojs.Timeline({ repeat: 1000 }).add(burst).play();
