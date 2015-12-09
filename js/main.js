$(document).ready(function(){
    $('.icon-menu').click(function(){
        $('.hidden-menu').fadeIn('fast');
        $('.table').animate({
            left: "300px"
        }, 200);
    });
   
    /*
    $('.icon-menu').click(function(){
        $('.hidden-menu').animate({
            top: "100px";
        }, 200);
        
        $('.table').animate({
            left: "0px"
        }, 200);
    });*/

});