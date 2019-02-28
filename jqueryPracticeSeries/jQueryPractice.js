// Change the background color of all divs to purple
$("div").css("background-color", "purple");
// Change the width of all divs with highlight class to 200px
$(".highlight").css("width", "200px");
// Add solid orange border to div with ID of "third"
$("#third").css("border", "solid orange 5px");
// Change font color of first occuring div to pink
$("div").first().css("color", "pink");


// jQuery event practice

// On pressing "enter" key, send alert using .which()
$("input").keypress(function(event){
    if(event.which === 13) {
        alert("You pressed enter");
    }
});

// .on somewhat equates to event listener setup in base JS
// .on allows specifying event.