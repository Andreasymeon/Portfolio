/*---------------- SMOOTH SCROOL ANCHORS -----------------*/
var logo = document.getElementById("logo"),
	about = document.getElementById("btnAbout"),
    work = document.getElementById("btnWork"),
    contact = document.getElementById("btnContact");

logo.onclick = function() {
  TweenLite.to(window, 1, {scrollTo:{y:"header", offsetY:300}});
}

about.onclick = function() {
  TweenLite.to(window, 1, {scrollTo:"#about"});
}

work.onclick = function() {
  TweenLite.to(window, 1, {scrollTo:"#work"});
}

contact.onclick = function() {
  TweenLite.to(window, 1, {scrollTo:"#contact"});
}
/*-------------------------------------------------------*/
/*-------------------- ANIMATE LINES SVG ----------------------*/

//init controller
var controller = new ScrollMagic.Controller();

$(function() {
    var containerScene = new ScrollMagic.Scene({
        triggerElement: '.name',
        duration: 500
    })
    .setClassToggle("#header-line-right","drawing")
    //.addIndicators() 
    .addTo(controller);
});
$(function() {
    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#about',
        duration: 300
    })
    .setClassToggle("#about-line","drawing")
    //.addIndicators() 
    .addTo(controller);
});
$(function() {
    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#trigger',
        duration: 300
    })
    .setClassToggle("#work-line","drawing")
    //.addIndicators() 
    .addTo(controller);
});
$(function() {
    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#contact',
        duration: 700
    })
    .setClassToggle("#contact-line","drawing")
    //.addIndicators() 
    .addTo(controller);
});
