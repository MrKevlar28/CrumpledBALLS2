class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2

        }
        this.body = Bodies.circle(180,350,5,options);
        World.add(world,this.body);
        this.r = 5;
    }
    display(){
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);

    }
}