class Segment{
  constructor (size, x, y){
    this.loc = new JSVector(x,y); //new creates a new instance
    //have a vector that already has an x and y
    //this.vel = new JSVector(dx,dy);
    //this.acc = new JSVector(0,0);
    this.size = size;
    //this.color = color;
    this.canvas = document.getElementById("cnv");
    this.context = this.canvas.getContext("2d");
  }
  run(){
    this.draw();
  }
  draw(){
    //context.save();
    //context.translate(this.loc.x, this.loc.y);
    //context.rotate(this.vel.getDirection()+Math.PI);
    context.beginPath();
    context.moveTo(this.size, this.size);
    context.lineTo(this.size,this.size/2);
    context.strokeStyle = "black";  // color to fill
    context.fill();     // render the fill
    context.stroke();
    //context.restore();
  }
}
