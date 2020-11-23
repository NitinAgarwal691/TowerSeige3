class Polygon{
    constructor(x,y,r) {
        var options = {
            isStatic:false,
            restitution:0.1,
            density:1,
            friction:0
        }
        this.body=Matter.Bodies.circle(x,y,r);
        this.r=r
        this.image=loadImage("image.png");
        World.add(world,this.body);
    }
    display () {
        var posA=this.body.position;
        push();
           translate(posA.x,posA.y);
           rotate(this.body.angle);
           imageMode(CENTER);
           image(this.image,0,0,this.r,this.r);
           pop();
    }
}