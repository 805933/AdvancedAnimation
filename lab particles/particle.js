class Particle{
  constructor (x, y, dx, dy, radius, color, life){
    this.loc = new JSVector(x,y);
    this.vel = new JSVector(dx,dy);
    this.acc = new JSVector(0,.1);
    this.radius = radius;
    this.color = color;
    this.canvas = document.getElementById("cnv");
    this.context = this.canvas.getContext("2d");
    this.life = life;
  }
  run(){
    this.update();
    this.draw();
  }

  update(){
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    if (this.loc.x <0 || this.loc.x > canvas.width){
      this.vel.x *= -1
    }
    if(this.loc.y<0 || this.loc.y>canvas.height){
      this.vel.y *= -1
    }
    this.life -= 1;
  }
  isDead(){
    if (this.life <= 0){
      return true;
    }
    else{
      return false;
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
