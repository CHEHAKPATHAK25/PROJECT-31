class particle {
    consteructor () {
        options = {
            restitution = 0.4,
        }
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        world.add(world,this.body);
    }
    display () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(this.color);
        eclipseMode(RADIUS);
        eclipse(0,0,this.r,this,r);
        pop();
    }
}