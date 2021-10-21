document.addEventListener("DOMContentLoaded", function(){

    document.addEventListener('click', function(){
        console.log("clicked");
        var cardNameTagContainer = document.getElementById('nametagImgContainer');
        var keywordContainer = document.getElementById('keywordContainer');
        var titleContainer = document.getElementById('titleContainer');
        var menuContainer = document.getElementById('menuContainer');
        
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

        titleContainer.animate([
            { opacity: "1"}
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
        
    });

});