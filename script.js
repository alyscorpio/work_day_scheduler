var time = $('currentDay');
var saveButton = document.querySelectorAll('.saveBtn');
var activity = document.querySelector('.activity');
console.log(saveButton)

// Current day/date from moment.js
var today = moment().format('dddd, MMMM Do YYYY');
time.text(today);

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

$("#09 + .activity").val(localStorage.getItem("9am"))
$("#10 + .activity").val(localStorage.getItem("10am"))
$("#11 + .activity").val(localStorage.getItem("11am"))
$("#12 + .activity").val(localStorage.getItem("12pm"))
$("#1 + .activity").val(localStorage.getItem("1pm"))
$("#2 + .activity").val(localStorage.getItem("2pm"))
$("#3 + .activity").val(localStorage.getItem("3pm"))
$("#4 + .activity").val(localStorage.getItem("4pm"))
$("#5 + .activity").val(localStorage.getItem("5pm"))

function hour(){
    var now = moment().hours();

    $(".row").each(function() {
        var TimeBlock = parseInt($(this).attr("id"))

        if (now > timeBlock){
            $(this).addClass("past")
        } else if (now === timeBlock){
            $(this).removeClass("past")
            $(this).addClass("present")
        }
    }
    )
}