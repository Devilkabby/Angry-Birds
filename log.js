class Log {
    constructor (x,y,height,angle){
        var options={
            restitution:0.8,
            friction : 1.0,
            density : 1.0
        }  
        // box1= new Box(100,200,20,20);
        this.body = Bodies.rectangle(x,y,20,height,options);
        Matter.Body.setAngle(this.body,angle)
        this.width = 20;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        push ();

        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        fill("brown");
        // rect(100,50,10,80);
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    
    }
    
}