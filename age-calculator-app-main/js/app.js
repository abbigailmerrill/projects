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