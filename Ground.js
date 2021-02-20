class Ground{
    constructor(x,y,w,h){
        var op1={
            isStatic:true
        }
        this.ground=Bodies.rectangle(x,y,w,h,op1)
        this.width=w;
        this.height=h;
        World.add(world,this.ground)
    }
    display(){
        rectMode(CENTER)
        fill("green")
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
    }
}