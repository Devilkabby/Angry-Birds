class Pig {
    constructor (x,y){
        var options={
            restitution:0.8,
            friction : 1.0,
            density : 1.0
        }  
        // box1= new Box(100,200,20,20);
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);

    }
    display(){
        push ();

        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        fill("green");
        // rect(100,50,10,80);
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    
    }
    
}