class Particle{
  constructor (x, y, dx, dy, radius){
    this.loc = new JSVector(x,y);
    this.vel = new JSVector(dx,dy);
    this.acc = new JSVector(0,-.1);
    this.radius = radius;
    this.canvas = document.getElementById("cnv");
    this.context = this.canvas.getContext("2d");
  }
  run(){
    this.update();
    this.draw();
  }

  update(){
    this.loc.add(this.vel);
    this.vel.sub(this.acc);
    if (this.loc.x <0 || this.loc.x > canvas.width){
      this.vel.x *= -1
    }
    if(this.loc.y<0 || this.loc.y>canvas.height){
      this.vel.y *= -1
    }
  }
  draw(){
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.radius, 0, 2*Math.PI);
    context.strokeStyle = "black";
    context.fillStyle = this.color;
    context.fill();
    context.stroke();
  }
}
