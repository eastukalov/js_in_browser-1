'use strict';

let arrImg = ['i/breuer-building.jpg',
  'i/guggenheim-museum.jpg',
  'i/headquarters.jpg',
  'i/IAC.jpg',
  'i/new-museum.jpg'
];

let i = 0;

let img = document.getElementById('currentPhoto');
let prevPhoto = document.getElementById('prevPhoto');
let nextPhoto = document.getElementById('nextPhoto');
img.src = arrImg[i];

nextPhoto.onclick = function () {
  i++;
  if (i >= arrImg.length) {
    i = 0;
  }

  img.src = arrImg[i];
};

prevPhoto.onclick = function () {
  i--;

  if (i < 0) {
    i = arrImg.length - 1;
  }

  img.src = arrImg[i];
};