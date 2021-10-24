document.addEventListener("DOMContentLoaded", function(){
    var vailForStartAnmiate = $('#vailForStartAnmiate');

    var cardNameTagContainer = $('#nametagImgContainer');
    var keywordContainer = $('#keywordContainer');
    var titleContainer = $('#titleContainer');
    var menuContainer = $('#menuContainer');
    var menu = $('#menuContainer > ul > li');
    var keywords = $('#keywordContainer > div.keyword');

    console.log(vailForStartAnmiate);

    vailForStartAnmiate.on("click", function(){

        console.log(vailForStartAnmiate);

        vailForStartAnmiate.remove();
        
        titleContainer.animate({
            top: "-=100",
            opacity: "1"
        }, 500, function() {
            $(this).css('opacity','1');
            $(this).css('top','626.75px');
        });

        cardNameTagContainer.animate({
            top: "-=100",
        }, 500, function() {
            $(this).css('top','-100px');
        });

        menuContainer.animate({
            opacity: "1"
        }, 500, function() {
            $(this).css('opacity','1');
        });

        keywordContainer.animate({
            opacity: "1"
        }, 500, function() {
            $(this).css('opacity','1');
        });

    });

    

    menu.on("click", function(){
        let deActiveTarget =  $('#menuContainer > ul > li.active');
        
        deActiveTarget.removeClass('active');
        $(this).addClass('active');

        if( menu.index($(this)) == 0 && cardNameTagContainer.css('opacity')==0
            || menu.index($(this)) == 3 && cardNameTagContainer.css('opacity')==0 ){

            titleContainer.animate({
                top: "+=100",
                opacity: "1"
            }, 500, function() {
            });

            cardNameTagContainer.animate({
                top: "+=100",
                opacity: "1"
            }, 500, function() {
            });

            keywordContainer.animate({
                top: "+=400px",
                opacity: "1"
            }, 500, function() {
            });

            menuContainer.animate({
                top: "+=780px",
            }, 500, function() {
            });

        }else if( menu.index($(this)) == 1 && cardNameTagContainer.css('opacity')==1 
            || menu.index($(this)) == 2 && cardNameTagContainer.css('opacity')==1 ){
            
            titleContainer.animate({
                top: "-=100px",
                opacity: "0"
            }, 500, function() {
                $(this).css('opacity','0');
                $(this).css('top','526.75px');
            });

            cardNameTagContainer.animate({
                top: "-=100px",
                opacity: "0"
            }, 500, function() {
                $(this).css('opacity','0');
                $(this).css('top','-200px');
            });

            keywordContainer.animate({
                top: "-=100px",
                opacity: "0"
            }, 500, function() {
                $(this).css('opacity','0');
                $(this).css('top','-300px');
            });

            menuContainer.animate({
                top: "-=780px",
            }, 1100, function() {
                $(this).css('top', '60.109px');
            });

        }else{

        }
        
    });

});