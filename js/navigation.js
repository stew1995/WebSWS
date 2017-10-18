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



//AJAX
$(document).ready(function () {
    $("#body").load("home.html");

    //Navigation buttons
    $("#homeBtn").click(function () {
        $("#body").load("home.html");
    });

    //Whats on
    /*
    $("#whatsonBtn").click(function () {
        $("#body").load("whatson.html")
    });*/

    $("#hotelsBtn").click(function () {
        $("#body").load("hotels.html")
    });

    /*$("#foodanddrinkBtn").click(function () {
        $("#body").load("hotels.html")
    });*/

    $("#mapBtn").click(function () {
        $("#body").load("maps.html")
    })


    $("#attractionsBtn").click(function () {
        $("#body").load("attractions.html")
    });
})
