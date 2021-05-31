class Rope {
constructor (mya,myb)
{
    var options = 
    {
        bodyA:mya,
        pointB:myb,
        stiffnes:1.2,
          length:250
        }

    this.pointB = myb
 this.rope = Constraint.create(options)
 World.add(world,this.rope)

}
 display()
    
{
    var ptA= this.rope.bodyA.position
    var ptB =this.pointB
    line (ptB.x,ptB.y,ptA.x,ptA.y)

}

}