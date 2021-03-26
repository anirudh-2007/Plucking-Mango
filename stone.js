/*class stone{
    constructor(x,y,width,height){

        var options={
            isStatic:true
        }

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image = loadImage("stone.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world ,this.body);
    }
    display(){
        var stpos = this.body.position;

        push();

        translate(stpos.x ,stpos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this,height);
        pop();

    }
}*/




class stone{
    constructor(x,y,width,height){
      var options={
          isStatic:false,
          restitution:0,
          friction:1,
          density:2
      }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.image=loadImage("stone.png");
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world ,this.body);
    }
    display(){
        var stonepos = this.body.position;
        
        push();
        translate(stonepos.x,stonepos.y);
        //rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();

    }
}