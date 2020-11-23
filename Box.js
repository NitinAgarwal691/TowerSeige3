class Box{
    constructor(x,y,width,height) {
var options={
    isStatic:false,
    restitution:0.1,
    friction:0.3,
    density:0.0001
}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
this.Visiblity = 255;
World.add(world,this.body);
    }
    score() {
        if(this.Visiblity<0 && this.Visiblity>-105) {
            score++;
        }
    }
    display() {
    if(this.body.speed>3) {
     
    
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 6;
     tint(255,this.Visiblity);
     pop();
    }else{
     push();
        // translate(this.body.position.x,this.body.position.y);
        // rotate(this.body.angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("white");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
    }
}
