class Particle{
  constructor (x, y, dx, dy, radius, clr, life, r, g, b){
    this.loc = new JSVector(x,y);
    this.vel = new JSVector(dx,dy);
    this.acc = new JSVector(0,.1); //creates gravity
    this.radius = radius;
    this.clr = clr;
    this.canvas = document.getElementById("cnv");
    this.context = this.canvas.getContext("2d");
    this.life = life;
    this.r = r;
    this.g = g;
    this.b = b;
    this.initialLife = this.life; //used to make sure that the opacity fades at a linear rate
  } //required for variation in the initialization
  run(){
    this.update();
    this.draw();
  }

  update(){
    this.loc.add(this.vel); //adds velocity to location
    this.vel.add(this.acc); //adds acceleration to velocity
    if (this.loc.x <0 || this.loc.x > canvas.width){
      this.vel.x *= -1 //flips x velocity if it touches the sides
    }
    if(this.loc.y<0 || this.loc.y>canvas.height){
      this.vel.y *= -1 //flips y velocity if it touches the ground or ceiling
    }
    this.life -= 1; //takes away part of the particle's life every frame
    this.clr = "rgba("+this.r+","+this.g+","+this.b+","+this.life/this.initialLife+")"
  } //adjusts opacity without affecting the pre-determined rgb values
  isDead(){
    if (this.life <= 0){ //less than or equal - failsafe if ball somehow gets negative life
      return true;
    }
    else{
      return false;
    } //checks if the ball ran out of hitpoints
  }
  draw(){
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.radius, 0, 2*Math.PI);
    context.strokeStyle = "rgba(0,0,0,"+this.life/this.initialLife+")"; //makes black but preserves opacity
    context.fillStyle = this.clr;
    context.fill();
    context.stroke();
  }
}
