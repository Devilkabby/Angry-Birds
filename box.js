class Box {
    constructor (x,y,width,height){
        var options={
            restitution:0.8
        }  
        // box1= new Box(100,200,20,20);
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        push ();

        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        fill("blue");
        // rect(100,50,10,80);
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    
    }
    
}