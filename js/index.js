$(function(){
    'use strict';
    $("#przycisk").click(function() {
        
        $("#kwadrat")
            .animate({left: "100px", width:'100px', height:'100px'}, 3000)
        $("#kwadrat")
            .animate({backgroundColor: "blue"},5000, napis)
    })
    
//napis();
function napis() {
    $("#naglowek").css({
            "opacity":"1"
        
            });
}
})