/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "navigation") {
        x.className += " responsive";
        $(".searchBox").show();
    } else {
        x.className = "navigation";
        $(".searchBox").hide();
    }
}

$(window).resize(function() {

   if($(window).width() > 600) {
       $(".searchBox").show();
   }

});

<!--Materializecss Slider-->
$(document).ready(function () {
    // Plugin initialization
    $('.slider').slider();
})

$('.dropdown-button').dropdown('open');