class Cueball{
    constructor(x,y){
        var option = {
            friction:0.01,
            restitution:1,
             density:1
        }
        this.body = Bodies.circle(x,y,15,option)
        World.add(world,this.body)
    }
    display(){
        push()
        fill("white")
        translate(this.body.position.x,this.body.position.y)
        ellipse(0,0,30,30)
        pop()
    }
}