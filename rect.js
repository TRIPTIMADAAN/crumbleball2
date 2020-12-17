class Rect
{
   
   constructor(x,y,width,height)
   {
   var option={
      isStatic:true
   }
      this.body=Matter.Bodies.rectangle(x,y,width,height,option)
      World.add(world,this.body)
      this.Image=loadImage("dustbingreen.png")
      this.Image.scale=0.9
      this.w=width;
      this.h=height;
   }


display()
{
  
   ImageMode(CENTER)
   fill("green")
   Image(this.body.position.x,this.body.position.y,this.w,this.h)
}
}