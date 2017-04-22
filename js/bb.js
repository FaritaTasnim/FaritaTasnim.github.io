var tag = 0;
$(document).ready(function() {
    var s = Snap(1000,2000);
    

    end(s, 100, 50);
    
    mid(s, 74, 102);
    
    mid(s, 74, 193);

    end(s, 100, 284);
    
    $.each(s.selectAll("circle").items, function() {

        this.mouseover(function() {
            this.attr({
                fill: "#ff0000"
            });
        }).mouseout(function() {
            this.attr({
                fill: "#000000"
            });
        }).click(function() {
            
        });
    });
    
});

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