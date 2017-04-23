var tag = 0;
$(document).ready(function() {
    var s = Snap(1000,2000);
    
    //grid
    end(s, 100, 50);
    
    mid(s, 74, 102);
    
    mid(s, 74, 193);

    end(s, 100, 284);
    
    //showing connections on mouseover
    $.each(s.selectAll("circle").items, function() {

        this.mouseover(function() {
            this.attr({
                fill: "#ff0000"
            });
            var sel = this.attr("id");
            show_conn(s, sel, 0, 50);
            show_conn(s, sel, 50, 100);
            show_conn(s, sel, 730, 780);
            show_conn(s, sel, 780, 830);
            for (i=0; i < 126; i++){
                show_conn(s, sel, 100+i*5, 105+i*5);
            }
        }).mouseout(function() {
            this.attr({
                fill: "#000000"
            });
            var sel = this.attr("id");
            hide_conn(s, sel, 0, 50);
            hide_conn(s, sel, 50, 100);
            hide_conn(s, sel, 730, 780);
            hide_conn(s, sel, 780, 830);
            for (i=0; i < 126; i++){
                hide_conn(s, sel, 100+i*5, 105+i*5);
            }
        }).click(function() {
            
        });
    });
    
    //resistor    
    resistor(s, 90, 350);
    var r_clicked = false;
    var t = new Snap.Matrix();
    document.onmousemove = getMouseXY;
    
    $.each(s.selectAll("g").items, function() {
        this.click(function() {
            r_clicked = true;
            var r_sel = resistor(s, 90, 350);
        });
    });
    
    function getMouseXY(event) {
        var x = 0;
        var y = 0;
        x = event.pageX;
        y = event.pageY;
        if (x < 0) x = 0;
        if (y < 0) y = 0; 

        if (r_clicked){
            moveResistor(1, x-100, y-390);
            console.log();
        }
    }

});

function getResId(number) {
    return "r" + number;
}

function moveResistor(id, x, y) {
    var res = $('#' + getResId(id));
    res.attr({transform: "translate(" + x + "," + y + ")"});
}

var currentResId = 0;
function resistor(s, x, y){
    var wire_l = s.rect(x-17, y-2, 12, 4, 2).attr({fill: "#8d8c87"}),
        wire_r = s.rect(x+25, y-2, 12, 4, 2).attr({fill: "#8d8c87"}),
        el_l = s.ellipse(x, y, 7, 6).attr({fill: "#e5c883"}),
        el_r = s.ellipse(x+20, y, 7, 6).attr({fill: "#e5c883"}),
        r_mid = s.rect(x+2, y-5, 15, 10).attr({fill: "#e5c883"}),
        r_l = s.rect(x-9, y-2, 4, 4).attr({fill: "#e5c883"}),
        r_r = s.rect(x+25, y-2, 4, 4).attr({fill: "#e5c883"}),
        b_1 = s.rect(x-1, y-6, 3, 12, 1).attr({fill: "#d01818"}),
        b_2 = s.rect(x+5, y-5, 3, 10).attr({fill: "#d01818"}),
        b_3 = s.rect(x+11, y-5, 3, 10).attr({fill: "#d01818"}),
        b_4 = s.rect(x+19, y-6, 2, 12, 1).attr({fill: "#c5b358"}),
        r = s.g(wire_l, wire_r, el_l, el_r, r_mid, r_l, r_r, b_1, b_2, b_3, b_4);
    
    r.attr({id: getResId(currentResId)});
            
    currentResId++;
}

function show_conn(s, sel, lo, hi){
    if (lo <= sel && sel < hi){
        $.each(s.selectAll("circle").items, function() {
            if (lo <= this.attr("id") && this.attr("id") < hi && this.attr("id") != sel){
                this.attr({fill: "#4dbd4d"});
            }
        });
    }
}

function hide_conn(s, sel, lo, hi){
    if (lo <= sel && sel < hi){
        $.each(s.selectAll("circle").items, function() {
            if (lo <= this.attr("id") && this.attr("id") < hi){
                this.attr({fill: "#000000"});
            }
        });
    }
}

function end(s, x, y){
    for (var c=0; c < 2; c++) {
        if (c==0) s.text(x-17, y+5, "+");
        else s.text(x-15, y+4, "-");
        for (var b=0; b < 10; b++){
            for (var a=0; a < 5; a++){
                s.circle(x+a*13, y, 3).attr({ id: tag});
                tag++;
            }
            x = x + 78;
        }
        x = 100;
        y = y + 13;
    }
}

function mid(s, x, y){
    for (var b=0; b < 63; b++){
        for (var a=0; a < 5; a++){
            s.circle(x, y+a*13, 3).attr({ id: tag});
            tag++;
        }
        x = x + 13;
    }
}