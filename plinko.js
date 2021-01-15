class plinko {
    constructor () {
        var options = {
           isStatic= true
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body)
    }
    display () {
    }
}