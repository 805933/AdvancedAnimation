class Segment{
  constructor (x,y,dx,dy,size){
    this.loc = new JSVector(x,y); //new creates a new instance
    this.vel = new JSVector(dx,dy);
    this.acc = new JSVector(0,0);
    this.size = size;
    this.canvas = document.getElementById("cnv");
    this.context = this.canvas.getContext("2d");
  }
  run(){
    this.draw();
    this.update();
  }
  draw(){
    context.save();
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.vel.getDirection()+Math.PI);
    context.beginPath();
    context.arc(this.loc.x, this.loc.y, this.size, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fill();     // render the fill
    context.stroke();
    context.restore();
  }
  update(){
    this.loc.add(this.vel);
    if(this.loc.x < 0 || this.loc.x >canvas.width){
      this.vel.x *= -1
    }
    if(this.loc.y<0 || this.loc.y>canvas.height){
      this.vel.y *= -1
    }

  }
}
