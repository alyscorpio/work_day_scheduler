var time = $('currentDay');
var saveButton = document.querySelectorAll('.saveBtn');
var activity = document.querySelector('.activity');
console.log(saveButton)

// Current day/date from moment.js
var today = moment().format('dddd, MMMM Do YYYY');
timeDisplay.text(today);

for (i = 0; i < saveButton.length; i++){
    saveButton[i].addEventListener("click", storeActivity);
}

function storeActivity(){
    var description = $(this).siblings(".activity").val()
    console.log(description)
    var time = $(this).parent().attr("class")
    console.log(typeof time)
    localStorage.setItem(time.split('')[1], description);
}