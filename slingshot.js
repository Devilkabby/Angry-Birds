class Slingshot{
    constructor(bodyA,bodyB){   // "propertyname : propertyvalue" new SLingshot(abc,pqr);
        var options ={
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.05,
            length : 100 
        }

    this.sling = Constraint.create(options);
    World.add(world,this.sling);
    }

    display(){
        var pointA = this.sling.bodyA.position;
        
        var pointB = this.sling.bodyB.position;

        strokeWeight(4);
        stroke("brown");
        line(pointA.x,pointA.y,pointB.x,pointB.y);



        //line(x1,y1,x2,y2)---> (x1,y1) and (x2,y2)
    }
}
