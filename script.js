var time = $('currentDay');
var saveButton = document.querySelectorAll('.saveBtn');
var activity = document.querySelector('.activity');
console.log(saveButton)

// Current day/date from moment.js
var today = moment().format('dddd, MMMM Do YYYY');
timeDisplay.text(today);
