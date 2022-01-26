class Pockets{
    constructor(x,y){
        var option = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,10,option)
        World.add(world,this.body)
    }
    display(){
        push()
        fill(0)
        translate(this.body.position.x,this.body.position.y)
        ellipse(0,0,20,20)
        pop()
    }
}