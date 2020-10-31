class Block{
    constructor(x,y,width,height){
        var options={
            'friction': 1.0,
            'restitution': 1.0,
            'density': 1.0 
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility = 255;
    }

    display(){
        if(this.body.speed < 3){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x,this.body.position.y);
          rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }else{
          this.visibility = this.visibility - 5;
        }
        if(this.visiblity === 0){
            World.remove(world,this.body);
        }
    }
}