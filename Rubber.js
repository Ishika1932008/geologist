class Rubber{
	constructor(x,y,r)
	{
		var options = {
			restitution: 0.3,
            density:5,
            friction:1
		   
			
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipseMode(RADIUS);
                fill(100);
                     ellipse(0,0,this.r,this.r);

			pop()
	}

}