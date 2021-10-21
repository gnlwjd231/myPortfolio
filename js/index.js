document.addEventListener("DOMContentLoaded", function(){
    var cardNameTagContainer = document.getElementById('nametagImgContainer');
    var keywordContainer = document.getElementById('keywordContainer');
    var titleContainer = document.getElementById('titleContainer');
    var menuContainer = document.getElementById('menuContainer');

    document.addEventListener('click', function(){
        
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
        

    });

    var keywordCircle = document.querySelectorAll("#keywordContainer > div.keyword > div.keywordLine > div.keywordCircle"); 
    
    for (var i = 0; i < keywordCircle.length; i++){
        keywordCircle[i].addEventListener('mousedown', function(){

            this.animate([
                { width: "130px",
                  height: "130px"}
            ], {
                duration: 2000,
            });

        });
    }

});