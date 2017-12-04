var tag = 0;
var r_clicked = false;
var currentResId = 0;
var res_end_1;
var res_end_2;
var this_id;
var id;
var r_sel = 0;
var to_move = -1;
$(document).ready(function() {
    var s = Snap(1000, 2000);
    create_resistor(s);
    var cap = Snap(100,100).attr({x:150,y:350});
    s.add(cap);
    
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
            sel = this.attr("id");
            show_all_conn(s, sel);
        }).mouseout(function() {
            this.attr({
                fill: "#000000"
            });
            sel = this.attr("id");
            hide_all_conn(s, sel);
        }).click(function() {
            
        });
    });
    
    //resistor    
    document.onmousemove = getMouseXY;
    
    $("#r0").click(function() {
        r_sel = resistor(s, 90, 350);
        r_clicked = !r_clicked;
    });
    
    $("*").click(function(){
        console.log($(this).attr("id"));  
    });
    
    function getMouseXY(event) {
        var x = 0;
        var y = 0;
        x = event.pageX;
        y = event.pageY;
        if (x < 0) x = 0;
        if (y < 0) y = 0; 
        
    }

});

function show_all_conn(s, sel){
    show_conn(s, sel, 0, 50);
    show_conn(s, sel, 50, 100);
    show_conn(s, sel, 730, 780);
    show_conn(s, sel, 780, 830);
    for (i=0; i < 126; i++){
        show_conn(s, sel, 100+i*5, 105+i*5);
    }
}

function hide_all_conn(s, sel){
    hide_conn(s, sel, 0, 50);
    hide_conn(s, sel, 50, 100);
    hide_conn(s, sel, 730, 780);
    hide_conn(s, sel, 780, 830);
    for (i=0; i < 126; i++){
        hide_conn(s, sel, 100+i*5, 105+i*5);
    }
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