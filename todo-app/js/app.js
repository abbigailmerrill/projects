const icon = jQuery(".modeIcon");
const mainColor = jQuery(".main");
const hero = jQuery(".hero");
const input = jQuery("input");
const list = jQuery("li");
const actions = jQuery(".actions");
const filter = jQuery(".filter");

icon.click(function(){
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
})