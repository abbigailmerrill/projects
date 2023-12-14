const advice = jQuery(".advice");
const button = jQuery(".circle");

function getAdvice(){
fetch("https://api.adviceslip.com/advice").then(response => {
    return response.json();
}).then(data => {
    const adviceObj = data.slip.advice;
    advice.empty();
    advice.html(adviceObj);
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