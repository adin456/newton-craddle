class Sling{
    constructor(bodyA,bodyB,offsetX,offsetY ){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            
            pointB:{x:this.offsetX,y:this.offsetY}
        }
       // this.pointB=pointB;
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope); 
    }
    display(){
       
        var pA=this.rope.bodyA.position;
        var pB=this.rope.bodyB.position;

      
        var Anchor1X=pA.x
        var Anchor1Y=pA.y

        var Anchor2X=pB.x+this.offsetX
        var Anchor2Y=pB.y+this.offsetY

        strokeWeight(4);

        stroke(0);

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        
    }
}
