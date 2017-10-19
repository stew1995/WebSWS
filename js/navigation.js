$("#topNavSearch").hide();
$("#body").load("home.html");
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


    //Navigation buttons
    $("#homeBtn, #homeSideBtn").click(function () {
        $("#body").load("home.html");
    });

    //Whats on
    /*
    $("#whatsonBtn").click(function () {
        $("#body").load("whatson.html")
    });*/

    $("#hotelsBtn, #hotelsSideBtn").click(function () {
        $("#body").load("hotels.html")
    });

    /*$("#foodanddrinkBtn").click(function () {
        $("#body").load("hotels.html")
    });*/

    $("#mapBtn, #mapSideBtn").click(function () {
        $("#body").load("maps.html")
    })


    $("#attractionsBtn, #attractionsSideBtn").click(function () {
        $("#body").load("attractions.html")
    });
})


//News feed ajax load
$(document).ready(function () {
    $("#newsFeed").load("https://feed.mikle.com/js/fw-loader.js" );
})