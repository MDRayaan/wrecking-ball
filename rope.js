class Rope{
    constructor(bodyA,pointB){
var options ={bodyA:bodyA,pointB:pointB,stiffness:1,length:200}
this.rope=Constraint.create(options)
this.pointB=pointB 
 World.add(world, this.rope);
   }

display(){

if (this.rope.bodyA){
    var pointA=this.rope.bodyA.position
    var pointB=this.pointB

    push ()
    stroke("blue")
    strokeWeight("4")
    line (pointB.x,pointB.y,pointA.x,pointA.y);
    pop ()
}
}
}