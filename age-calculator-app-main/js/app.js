// Receive validation errors if:
// X Any field is empty when the form is submitted
// X The day number is not between 1-31
// X The month number is not between 1-12
// X The date is in the future
// X The date is invalid, e.g. 31/04/1991 (there are 30 days in April)

var inputs = jQuery(".dateInput");

// Replace any item that is not a number, as they are invalid
inputs.keyup(function(){
    this.value = this.value.replace(/[^0-9\.]/g,'');
});

// get current date
var oldDate = new Date();
var curMon = oldDate.getMonth() + 1;
var curDay = oldDate.getDate();
var curYear = oldDate.getFullYear();
let curDate = curYear + '/' + (curMon<10 ? '0' : '') + curMon + '/' + (curDay<10 ? '0' : '') + curDay;

var yearDiv = jQuery(".no1");
var monthDiv = jQuery(".no2");
var dayDiv = jQuery(".no3");

// click circle to submit form details
var circle = $(".circle").click(function(){

    // select indvidual input values on submit for calculations
    var dayVal = $('#day').val();
    var monthVal = $('#month').val();
    var yearVal = $('#year').val();
    var theirDate = yearVal + '/' + monthVal + '/' + dayVal;

    // If any input is empty, throw an error
    if(dayVal == "" || monthVal == "" || yearVal == ""){
        alert("The form must contain all data to work!");
        return;
    }

    // If date is not between 1-31, throw an error
    if(dayVal > 31 || dayVal < 0){
        alert("A birthday cant be any number that isn't 1-31!");
        return;
    }

    // If a month isnt between 1-12, throw an error
    if(monthVal > 12 || monthVal < 1){
        alert("Your month cant be any number less than one or greater than " + curYear + "!");
        return;
    }

    // If a year is greater than 2023 or less than 1, throw an error
    if(yearVal < 1 || yearVal > curYear){
        alert("Your birth year cant be more than 2023!");
        return;
    }

    let difference = new Date(curDate).getTime() - new Date (theirDate).getTime();

    let totalDays = Math.ceil(difference / (1000 * 3600 * 24));

    var yearsAlive = Math.floor(totalDays / 365 );
    var monthsAlive = Math.floor(totalDays / 30.4);

    var monthsRemaining = (monthsAlive - (yearsAlive * 12));

    var daysRemaining = Math.floor((totalDays - ((monthsRemaining * 30.4) + (yearsAlive * 12 * 30.4))));
    
    // console.log("The user has been alive for " + yearsAlive + " years " + monthsRemaining + " months " + daysRemaining + " days");

    // Append results to the page
    yearDiv.empty();
    yearDiv.append(yearsAlive);
    monthDiv.empty();
    monthDiv.append(monthsRemaining);
    dayDiv.empty();
    dayDiv.append(daysRemaining);
});