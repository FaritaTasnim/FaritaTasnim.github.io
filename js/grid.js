/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    var img1 = "<IMG SRC='/images/dg.png' STYLE='WIDTH:7px; HEIGHT:7px'>";
    
   for (var d=0; d < 2; d++){
        for (var c=0; c < 10; c++){
            $("body").append("     ");
            for (var b=0; b < 5; b++){
                    $("body").append("  " + img1);
                }
        }
       $("body").append("<br>");
   }
    
    $("body").append("<br>");
    
    for (var j=0; j < 5; j++){
        for (var i=0; i < 64; i++){
            $("body").append("  " + img1);
        }
        $("body").append("<br>");
    }
    
    $("body").append("<br>");
    
    for (var j=0; j < 5; j++){
        for (var i=0; i < 64; i++){
            $("body").append("  " + img1);
        }
        $("body").append("<br>");
    }
});