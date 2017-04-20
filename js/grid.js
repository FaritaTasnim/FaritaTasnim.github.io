/*jslint browser: true*/
/*global $, jQuery, alert*/

var tag = 0;
    
$(document).ready(function () {
    "use strict";
    //var draw = SVG('container');

    end();
    
    $("div").append("<br>");
    
    mid();
    
    $("div").append("<br>");
    
    mid();
    
    $("div").append("<br>");
    
    end();
    
    $('img').bind('mouseenter mouseleave', function() {
        $(this).attr({
            src: $(this).attr('data-other-src') 
            , 'data-other-src': $(this).attr('src') 
        })
    });
    
    //use adjacency lists
    //replace images with svg's
});

function end () {
    var img1 = "<IMG data-other-src='/images/highlight.png' SRC='/images/dg.png' "+"ID='"+tag+"' STYLE='WIDTH:7px; HEIGHT:7px'>";
    //var hole = draw.circle(7);
    var img2 = "<IMG SRC='/images/plus.png' STYLE='WIDTH:7px; HEIGHT:7px'>";
    var img3 = "<IMG SRC='/images/minus.png' STYLE='WIDTH:7px; HEIGHT:7px'>";
    for (var d=0; d < 2; d++){
        if (d==0) $("div").append(img2);
        else $("div").append(img3);
        for (var b=0; b < 5; b++){
            $("div").append("\u00A0" + img1);
            tag++;
        }
        for (var c=1; c < 10; c++){
            $("div").append("\u00A0"+"\u00A0"+"\u00A0");
            for (var b=0; b < 5; b++){
                $("div").append("\u00A0" + img1);
                tag++;
            }
        }
       $("div").append("<br>");
   }
}

function mid () {
    var img1 = "<IMG data-other-src='/images/highlight.png' SRC='/images/dg.png' "+"ID='"+tag+"' STYLE='WIDTH:7px; HEIGHT:7px'>";
    for (var j=0; j < 5; j++){
        for (var i=0; i < 64; i++){
            $("div").append("\u00A0" + img1);
            tag++;
        }
        $("div").append("<br>");
    }
}
