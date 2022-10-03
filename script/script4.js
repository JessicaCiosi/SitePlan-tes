$(document).ready(function(){
    
    function opacite(){
        var transpa = $("#conteneur").css("opacity");
        if ( transpa == 1 ) {
            $("#conteneur").css("opacity", "0.2");
        } else {
            $("#conteneur").css("opacity", "1");
        }
    }

    $("#jupiter img").click(function(){
        opacite();
        $("#popup").slideToggle();
        $("#contenuPopup img").attr("src", "img/jupiter.png");
        $("#contenuPopup h3").text("Jupiter");
        $("#contenuPopup p:first").css("display", "block");
        $("#contenuPopup p").not(":first").css("display", "none");
    });

    $("#saturne img").click(function(){
        opacite();
        $("#popup").slideToggle();
        $("#contenuPopup img").attr("src", "img/saturne.png");
        $("#contenuPopup h3").text("Saturne");
        $("#contenuPopup p:eq(1)").css("display", "block");
        $("#contenuPopup p").not(":eq(1)").css("display", "none");

    });

    $("#uranus img").click(function(){
        opacite();
        $("#popup").slideToggle();
        $("#contenuPopup img").attr("src", "img/uranus.png");
        $("#contenuPopup h3").text("Uranus");
        $("#contenuPopup p:eq(2)").css("display", "block");
        $("#contenuPopup p").not(":eq(2)").css("display", "none");

    });

    $("#neptune img").click(function(){
        opacite();
        $("#popup").slideToggle();
        $("#contenuPopup img").attr("src", "img/neptune.png");
        $("#contenuPopup h3").text("Neptune");
        $("#contenuPopup p:last").css("display", "block");
        $("#contenuPopup p").not("p:last").css("display", "none");
    });
    
    $("#popup span").click(function(){
        $("#conteneur").css("opacity", "1");
        $("#popup").slideUp();
    });

});