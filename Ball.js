class Ball{
    constructor(x,y){
        var option = {
            friction:0.01,
            restitution:0.1,
             density:0.000001,
             frictionAir: 0.1
        }
        this.body = Bodies.circle(x,y,15,option)
        World.add(world,this.body)
    }
    display(){
        push()
        fill("red")
        translate(this.body.position.x,this.body.position.y)
        ellipse(0,0,30,30)
        pop()
    }
}