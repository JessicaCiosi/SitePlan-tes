$(document).ready(function(){
    $("#mercure").click(function(){
        $(".mercure").css("animation", "orbite 3s linear infinite");
    });
    $("#venus").click(function(){
        $(".venus").css("animation", "orbite 7s linear infinite");
    });
    $("#terre").click(function(){
        $(".terre").css("animation", "orbite 12s linear infinite");
    });
    $("#mars").click(function(){
        $(".mars").css("animation", "orbite 20s linear infinite");
    });
    $("#anim").click(function(){
        $(".mercure").css("animation", "orbite 3s linear infinite");
        $(".venus").css("animation", "orbite 7s linear infinite");
        $(".terre").css("animation", "orbite 12s linear infinite");
        $(".mars").css("animation", "orbite 20s linear infinite");
    });
    $("#reset").click(function(){
        $(".mercure, .venus, .terre, .mars").css("animation", "");
    });
});