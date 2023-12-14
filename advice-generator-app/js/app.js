const advice = jQuery(".advice");
const button = jQuery(".circle");
const adviceNum = jQuery("h3");

function getAdvice(){
fetch("https://api.adviceslip.com/advice").then(response => {
    return response.json();
}).then(data => {
    const adviceObj = data.slip.advice;
    const adviceId = data.slip.id;
    advice.empty();
    advice.html(adviceObj);
    adviceNum.empty();
    adviceNum.html("advice #" + adviceId);
}).catch(error =>{
    console.log(error);
});
}

window.onload = () => {
    getAdvice();
}

button.click(function(){
    getAdvice();
    console.log("You clicked this");
})