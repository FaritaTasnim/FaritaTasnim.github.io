/*jslint browser: true*/
/*global $, jQuery, alert*/

var tag = 0;
    
$(document).ready(function () {
    "use strict";

    end();
    
    $("div").append("<br>");
    
    mid();
    
    $("div").append("<br>");
    
    mid();
    
    $("div").append("<br>");
    
    end();
    
    //$("div").append("<p>"+tag+"</p>");
    
    var arr = [];
    for(var x = 0; x < 840; x++){
        arr[x] = [];
        for(var y = 0; y < 840; y++){ 
            if (0<=x<=49 && 0<=y<=49) arr[x][y] = 1;
            else if (50<=x<=99 && 50<=y<=99) arr[x][y] = 1;
            else if (740<=x<=789 && 740<=y<=789) arr[x][y] = 1;
            else if (790<=x<=839 && 790<=y<=839) arr[x][y] = 1;
            else if (100<=x<=163 && (y==x+64 || y==x+2*64 || y==x+3*64 || y==x+3*64 || y==x+5*64)) arr[x][y] = 1;
            else if (420<=x<=483 && (y==x+64 || y==x+2*64 || y==x+3*64 || y==x+3*64 || y==x+5*64)) arr[x][y] = 1;
            else if (100<=y<=163 && (x==y+64 || x==y+2*64 || x==y+3*64 || x==y+3*64 || x==y+5*64)) arr[x][y] = 1;
            else if (420<=y<=483 && (x==y+64 || x==y+2*64 || x==y+3*64 || x==y+3*64 || x==y+5*64)) arr[x][y] = 1;
            else arr[x][y] = 0;    
        }    
    }

    $("div").append("<p>"+arr[100][292]+"</p>");
    $("div").append("<p>"+arr[292][100]+"</p>");
    $("div").append("<p>"+arr[100][101]+"</p>");
    $("div").append("<p>"+arr[101][100]+"</p>");
});


function end () {
    var img1 = "<IMG SRC='/images/dg.png'"+"ID='"+tag+"' STYLE='WIDTH:7px; HEIGHT:7px'>";
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
    var img1 = "<IMG SRC='/images/dg.png' STYLE='WIDTH:7px; HEIGHT:7px'>";
    for (var j=0; j < 5; j++){
        for (var i=0; i < 64; i++){
            $("div").append("\u00A0" + img1);
            tag++;
        }
        $("div").append("<br>");
    }
}
