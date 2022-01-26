class Stick{
    constructor(x,y){
        var option = {
            friction:0.01,
            restitution:1,
             density:0.0001
        }
        this.body = Bodies.rectangle(x,y,200,5,option)
        World.add(world,this.body)
    }
    display(){
        push()
        fill("blue")
        translate(this.body.position.x,this.body.position.y)
        // rotate(this.body.position.x,this.body.position.y)
        rectMode(CENTER);
        rect(0,0,200,5)
        pop()
    }
}