class Component {
    constructor(type , g){
        this.type = type;
        this.g = g
    }
    
    get BBox(){
        return this.g.getBBox();
    }
}

//resistor extends component and use .g property to get the BBox


function getResId(number) {
    return "r" + number;
}

function moveResistor(id, x, y) {
    var res = $(id);
    res.attr({transform: "translate(" + x + "," + y + ")"});
}

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
    
    return r;
}

function get_resistor(id){
    return $(id);
}

function create_resistor(s1, s2 = Snap(100,100).attr({x:50,y:350,id:getResId(currentResId)})){
    var new_res = resistor(s2, 50, 50);
    s1.add(s2);
    currentResId++;
    return new_res;
}