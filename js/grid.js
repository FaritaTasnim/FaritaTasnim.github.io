/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";

    end();
    
    $("div").append("<br>");
    
    mid();
    
    $("div").append("<br>");
    
    mid();
    
    $("div").append("<br>");
    
    end();
});


function end () {
    var img1 = "<IMG SRC='/images/dg.png' STYLE='WIDTH:7px; HEIGHT:7px'>";
    for (var d=0; d < 2; d++){
        if (d==0) $("div").append("+");
        else $("div").append("-");
        for (var b=0; b < 5; b++){
            $("div").append("\u00A0" + img1);
        }
        for (var c=1; c < 10; c++){
            $("div").append("\u00A0"+"\u00A0"+"\u00A0");
            for (var b=0; b < 5; b++){
                $("div").append("\u00A0" + img1);
            }
        }
       $("div").append("<br>");
   }
}

function mid () {
    var img1 = "<IMG SRC='/images/dg.png' STYLE='WIDTH:7px; HEIGHT:7px'>";
    for (var j=0; j < 5; j++){
        for (var i=0; i < 64; i++){
            $("div").append("\u00A0" + img1);
        }
        $("div").append("<br>");
    }
}
