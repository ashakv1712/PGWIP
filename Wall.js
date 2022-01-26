class Wall{
    constructor(x,y,width,height){
        var option = {
        isStatic:true
        }
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x,y,this.width,this.height,option)
        World.add(world,this.body)
    }
    display(){
        push()
        fill("yellow")
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop()
    }
}

