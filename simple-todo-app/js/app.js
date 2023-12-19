const inputBox = jQuery("#input-box");
const listContainer = document.getElementById("list-container");
const button = jQuery(".button");

button.click(function addTask(){
    console.log("button clicked");
    if(inputBox.val() === ''){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.val();
        listContainer.append(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    inputBox.val("");
    saveData();
})

listContainer.addEventListener("click", function(e){
    console.log("clicked")
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();