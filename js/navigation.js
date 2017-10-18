$("#topNavSearch").hide();

<!--Materializecss Slider-->
$(document).ready(function () {
    // Plugin initialization
    $('.slider').slider();
    $(".button-collapse").sideNav();
})

$('.dropdown-button').dropdown('open');

/*
Search bar toggle
 */

$(document).ready(function () {

    $("#searchBtn").click(function () {

            $("#topNavSearch").toggle("slow");
    })
})

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
