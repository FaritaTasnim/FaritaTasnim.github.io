/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    var img1 = "<IMG SRC='/images/dg.png' STYLE='WIDTH:7px; HEIGHT:7px'>";
    
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