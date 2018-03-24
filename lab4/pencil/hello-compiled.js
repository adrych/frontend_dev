"use strict";

var doubles = [1, 2, 3].map(function (item) {
  return item * 2;
});

doubles.forEach(function (item) {
  return console.log(item);
});

var events = [1, 2, 3, 4, 5, 6].filter(function (v) {
  return v % 2 === 0;
});
events.forEach(function (item) {
  return console.log(item);
});
