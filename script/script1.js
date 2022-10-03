$(document).ready(function(){
    $("#gauche li").click(function(){
        $("#gauche li p").slideUp();
        var texte = $(this).children("p");
        if (texte.is(":hidden")){
            texte.slideDown();
        }
    });
});