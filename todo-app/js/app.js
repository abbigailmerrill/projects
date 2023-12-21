const icon = jQuery(".modeIcon");
const mainColor = jQuery(".main");
const hero = jQuery(".hero");
const input = jQuery("input");
const actions = jQuery(".actions");
const filter = jQuery(".filter");
const listContainer = document.getElementById("list-container");
const formData = jQuery("form");

// submit item to list
formData.submit(function(e){
    e.preventDefault();

    if(input.val() === ''){
        alert("You must write something!");
    }else{
    // submit item to list on enter 
        let li = document.createElement("li");
        li.classList.add("active");
        li.classList.add("drag-item");
        li.setAttribute("draggable", "true");
        if(jQuery(".main").hasClass("light")){
            li.classList.add("lightList");
            // console.log("its light");
        }else if(jQuery(".main").hasClass("dark")){
            li.classList.add("darkList");
            // console.log("its dark")
        }

    li.innerHTML = input.val();
    let span = document.createElement("span");
    span.classList.add("item");
    listContainer.append(li);
    let close = document.createElement("span");
    close.classList.add("close");
    close.innerHTML = "\u00d7";
    li.appendChild(close);
    }
    input.val("");

    // update list count
    listCount = jQuery(".listItems");
    const listArray = jQuery("li").length.toString();
    listCount.empty();
    listCount.append(listArray);

    // for(var i = 0; i > listArray.length; i ++){
    //     var listItems = listArray[i];
    //     console.log(listItems);
    // }
    
})

// toggle light and dark mode
icon.click(function(){
    const list = jQuery("li");
    if(mainColor.hasClass("dark")){
        // toggle main bg color
        mainColor.removeClass("dark");
        mainColor.addClass("light");
        // toggle hero
        hero.removeClass("darkHero");
        hero.addClass("lightHero");
        // toggle input
        input.removeClass("darkInput");
        input.addClass("lightInput");
        // toggle lists
        list.removeClass("darkList");
        list.addClass("lightList");
        // toggle actions
        actions.removeClass("darkActions");
        actions.addClass("lightActions");
        // toggle filter
        filter.removeClass("darkfilter");
        filter.addClass("lightFilter");
        // toggle icon
        icon.removeClass("darkIcon");
        icon.addClass("lightIcon");
    }else if(mainColor.hasClass("light")){
        // toggle main bg color
        mainColor.removeClass("light");
        mainColor.addClass("dark");
        // toggle hero
        hero.removeClass("lightHero");
        hero.addClass("darkHero");
         // toggle input
         input.removeClass("lightInput");
         input.addClass("darkInput");
        //  toggle list
        list.removeClass("lightList");
        list.addClass("darkList");
        // toggle actions
        actions.removeClass("lightActions");
        actions.addClass("darkActions");
        // toggle filter
        filter.removeClass("lightFilter");
        filter.addClass("darkFilter");
        // toggle icon
        icon.removeClass("lightIcon");
        icon.addClass("darkIcon");
    }
});

// complete or close items
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        e.target.classList.add("complete");
        e.target.classList.remove("active");
    }else if(e.target.className === "close"){
        e.target.parentElement.remove();

        listCount = jQuery(".listItems");
        const listArray = jQuery("li").length.toString();
        listCount.empty();
        listCount.append(listArray);
    }
});

// clear completed list items
const actionBar = document.getElementById("actions");
actionBar.addEventListener("click", function(e){
    if(e.target.className === "clear"){
        const items = jQuery(".complete");
        items.remove();
        // update list count
        listCount = jQuery(".listItems");
        const listArray = jQuery("li").length.toString();
        listCount.empty();
        listCount.append(listArray);
    }
});

// Filter items in the list
const filters = document.getElementById("filter");
filters.addEventListener("click", function(e){
    var allItems = jQuery("li");
    var complete = jQuery("li:not(.active)");
    var incomplete = jQuery(".active");

    if(e.target.id === "all"){
        allItems.css("display", "flex");
    }else if(e.target.id === "viewActive"){
        complete.css("display", "none");
        incomplete.css("display", "flex");

    }else if(e.target.id === "viewComplete"){
        complete.css("display", "flex");
        incomplete.css("display", "none");
    }
});

// testing drag and drop
let draggedItem = null;
// add event listeners for drag and drop events
listContainer.addEventListener('dragstart', handleDragStart);
listContainer.addEventListener('dragover', handleDragOver);
listContainer.addEventListener('drop', handleDrop);

// drag start event handler
function handleDragStart(e){
    draggedItem = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', draggedItem.innerHTML);
    e.target.css("opacity", "0.5");
}

// drag event handler
function handleDragOver(e){
    e.preventDefault();
    e.dataTransfer.dropEffect('move');
    const targetItem = e.target;
    if(targetItem !== draggedItem && targetItem.classList.contains("drag-item")){
        const boundingRect = targetItem.getBoundingClientRect();
        const offset = boundingRect.y + (boundingRect.height / 2);
    }
}

function handleDrop(e) {
    e.preventDefault();
    const targetItem = e.target;
    if (targetItem !== draggedItem && targetItem.classList.contains('drag-item')) {
      if (e.clientY > targetItem.getBoundingClientRect().top + (targetItem.offsetHeight / 2)) {
        targetItem.parentNode.insertBefore(draggedItem, targetItem.nextSibling);
      } else {
        targetItem.parentNode.insertBefore(draggedItem, targetItem);
      }
    }
    targetItem.style.borderTop = '';
    targetItem.style.borderBottom = '';
    draggedItem.style.opacity = '';
    draggedItem = null;
  }
