class Paper{
    constructor(x,y){
       var option=
       { 
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
      }
        this.body=Matter.Bodies.circle(x,y,10,option)
        World.add(world,this.body)
        this.Image=loadImage("paperImage.png")
        
    }
    display()
    {
        ImageMode(CENTER)
        fill("pink")
        Image(this.body.position.x,this.body.position.y,10) 
    }
    }