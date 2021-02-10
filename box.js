class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.8,
          'density':0.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.color = color(random(1,255),random(1,255),random(1,255))
      this.width = width;
      this.height = height;
      this.visibility = 255;
      
      World.add(world, this.body);
    }
    score(){
      if(this.visibility<0 && this.visblitity >-105){
        score=score+2;
      }
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed < 5){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("white");
        fill(this.color);
        rect(0, 0, this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity); 
        pop();
      }
    }
  };