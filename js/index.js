document.addEventListener("DOMContentLoaded", function(){
    var cardNameTagContainer = document.getElementById('nametagImgContainer');
    var keywordContainer = document.getElementById('keywordContainer');
    var titleContainer = document.getElementById('titleContainer');
    var menuContainer = document.getElementById('menuContainer');

    document.addEventListener('click', function(){

        titleContainer.animate([
            { opacity: "1",
                transform: "translateY(-120px)"}
        ], {
            duration: 500,
            fill: "forwards"
        });

        menuContainer.animate([
            { opacity: "1"}
        ], {
            duration: 500,
            fill: "forwards"
        });

        cardNameTagContainer.animate([
            { transform: "translateY(-130px)"}
        ], {
            duration: 500,
            fill: "forwards"
        });

        keywordContainer.animate([
            { opacity: "1"}
        ], {
            duration: 500,
            fill: "forwards"
        });

    });

    var keywordCircle = $("#keywordContainer > div.keyword > div.keywordLine > div.keywordCircle"); 
    console.log(keywordCircle);

    keywordCircle.each(function( i ){

        console.log($(this));

        $(this).on("click",function(){
            console.log(i)
            console.log($(this).parent());

            $(this).animate({ width: "130px" , height: "130px", right:"120px" }, 2000 );
            $(this).parent().animate({ width:"75px"}, 2000);
        });

    });

});