// Variables from HTML elements
var saveBtn = document.querySelectorAll('.saveBtn');
console.log(saveBtn);
var textInput = document.querySelector('.activity')
var timeDisplay = $('currentDay');
var thisTime = $('currentTime');

// Current date from moment.js
var today = moment().format('dddd, MMMM Do YYYY');
timeDisplay.text(today);

for (i = 0; i < saveBtn.length; i++){
    saveBtn[i].addEventListener("click", storeInput);
}

function storeInput(){
    var description = $(this).siblings(".activity").val()
    console.log(description)
    var time = $(this).parent().attr("class")
    console.log(typeof time)
    localStorage.setItem(time.split(' ')[1], description);
}

$("#09 + .activity").val(localStorage.getItem("9am"))
$("#10 + .activity").val(localStorage.getItem("10am"))
$("#11 + .activity").val(localStorage.getItem("11am"))
$("#12 + .activity").val(localStorage.getItem("12pm"))
$("#13 + .activity").val(localStorage.getItem("13pm"))
$("#14 + .activity").val(localStorage.getItem("14pm"))
$("#15 + .activity").val(localStorage.getItem("15pm"))
$("#16 + .activity").val(localStorage.getItem("16pm"))
$("#17 + .activity").val(localStorage.getItem("17pm"))

function blockHour(){
    var now = moment().hours();
 
    $(".row").each(function(){
       var blockTime = parseInt($(this).attr("id"))
 
       if (now > blockTime){
          $(this).addClass("past")
       } else if (now === blockTime){
          $(this).removeClass("past")
          $(this).addClass("present")
       } else {
       $(this).removeClass("past")
       $(this).removeClass("present")
       $(this).addClass("future")
       }
    })
}

blockHour();
