class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
            push()
            strokeWeight(4);
            // line(this.body.position.x, this.body.position.y, this.pointB, this.pointB);
            pop()
    }
    
}