const submit = jQuery(".submit");
const content = jQuery(".main");
const success = jQuery(".successContainer");
const dismiss = jQuery(".dismiss");
const emailOut = jQuery(".email");
const emailInput = jQuery("input[type='email']");

submit.click(function(userEmail){
    var userEmail = emailInput.val();

    if(userEmail == ""){
        alert("You must enter an email in order to submit!");
        return;
    }else{
        content.css("display", "none");
        success.css("display", "flex");
        emailOut.empty();
        emailOut.html(userEmail);
        console.log("The users email is" + userEmail);
    }
});

dismiss.click(function(userEmail){
    content.css("display", "flex");
    success.css("display", "none");
    window.location.reload();
})