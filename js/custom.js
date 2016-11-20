/**
 * Created by Nancy on 11/10/2016.
 */
jQuery(document).ready(function($) {

    $('#myCarousel').carousel({
        interval: 3000
    });


    $('#myCarousel2').carousel({
        interval: 3000
    });
/*
    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click( function(){
        var id = this.id.substr(this.id.lastIndexOf("-") + 1);
        var id = parseInt(id);
        $('#myCarousel').carousel(id);
    });*/

});

/*

jQuery(document).ready(function($) {



    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click( function(){
        var id = this.id.substr(this.id.lastIndexOf("-") + 1);
        var id = parseInt(id);
        $('#myCarousel2').carousel(id);
    });

});*/

$(document).ready(function () {

    $(".player").mb_YTPlayer();

});
