class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(width/2, 680, width, 10, options);
        World.add(world,this.body);

    }
    display(){
        rectMode(CENTER);
    }
}