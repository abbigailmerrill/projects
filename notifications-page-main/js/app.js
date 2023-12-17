const button = jQuery(".button");
const notifCount = jQuery(".notNum");
const content = jQuery(".action");

button.click(function(){

    notifCount.remove();

    content.removeClass(function(n){
        if (n == 0 || n == 1 || n == 2) {return "unread"}
        else {return ""}
    });
});