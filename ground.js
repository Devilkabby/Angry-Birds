class Ground {
    constructor(){
        var object_options ={
            isStatic: true
        }
    
       this.body = Bodies.rectangle(600,790,1200,20,object_options);
        World.add(world,this.body);
    }

    display(){
        rectMode(CENTER);
        fill("brown");
        rect(this.body.position.x,this.body.position.y,1200,20);
    }
}