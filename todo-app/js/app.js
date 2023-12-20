const icon = jQuery(".modeIcon");
const mainColor = jQuery(".main");
const hero = jQuery(".hero");
const input = jQuery("input");
const actions = jQuery(".actions");
const filter = jQuery(".filter");
const listContainer = jQuery(".list-container");
const formData = jQuery("form");

// toggle light and dark mode

formData.submit(function(e){
    e.preventDefault();

    if(input.val() === ''){
        alert("You must write something!");
    }else{
    // submit item to list on enter 
        let li = document.createElement("li");

        if(jQuery(".main").hasClass("light")){
            li.classList.add("lightList");
            console.log("its light");
        }else if(jQuery(".main").hasClass("dark")){
            li.classList.add("darkList");
            console.log("its dark")
        }

    li.innerHTML = input.val();
    let span = document.createElement("span");
    span.classList.add("item");
    listContainer.append(li);
    let close = document.createElement("span");
    close.innerHTML = "\u00d7";
    li.append(close);
    }
    input.val("");
})

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

