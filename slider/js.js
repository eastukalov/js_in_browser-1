'use strict';

let img = document.getElementById('slider');
let arrImg = ['i/airmax.png',
  'i/airmax.png',
  'i/airmax-on-foot.png',
  'i/airmax-playground.png',
  'i/airmax-top-view.png',
  'i/spinner.gif'];
let i = 0;

setInterval(() => {
  img.src = arrImg[i];
  i++;

  if (i >= arrImg.length) {
    i = 0;
  }

}, 5000);
