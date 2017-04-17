/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    var img1 = "<IMG SRC='/images/dg.png' STYLE='WIDTH:7px; HEIGHT:7px'>";
    
    end();
    $("body").append("<br>");
    mid();
    $("body").append("<br>");
    mid();
    $("body").append("<br>");
    end();
});

function end () {
    for (var d=0; d < 2; d++){
       $("body").append("\u00A0");
        for (var c=0; c < 10; c++){
            $("body").append("\u00A0"+"\u00A0"+"\u00A0");
            for (var b=0; b < 5; b++){
                    $("body").append("\u00A0" + img1);
                }
        }
       $("body").append("<br>");
   }
}

function mid () {
    for (var j=0; j < 5; j++){
        for (var i=0; i < 64; i++){
            $("body").append("\u00A0" + img1);
        }
        $("body").append("<br>");
    }
}
}