class Triangle{
  constructor (x, y, dx, dy, radius, color){
    this.loc = new JSVector(x,y); //new creates a new instance
    //have a vector that already has an x and y
    this.vel = new JSVector(dx,dy);
    this.acc = new JSVector(0,0);
    //have a vector that has velocity (use magnitude and direction)
    //vector has magnitude and direction and so does velocity and acceleration
    //so velocity can be represented as a vector (and so can acceleration)
    this.radius = radius;
    this.color = color;
    this.canvas = document.getElementById("cnv");
    this.context = this.canvas.getContext("2d");
  }
  run(){
    this.update();
    this.draw();
    this.checkEdges();
  }

  getCanvasLocation(x, y){
    this.canvasLoc = new JSVector(x,y);
  }

  update(){
    this.acc = JSVector.subGetNew(target.loc,this.loc);
    this.acc.normalize();
    this.acc.multiply(.1);
    this.vel.add(this.acc);
    this.vel.limit(3);
    this.loc.add(this.vel);
    this.loc.add(this.canvasLoc);
  }
  draw(){
    context.save();
    context.translate(this.loc.x, this.loc.y);
    context.rotate(this.vel.getDirection()+Math.PI);
    context.beginPath();    // clear old path
    context.moveTo(this.radius, this.radius);
    context.lineTo(-this.radius,this.radius/2);
    context.lineTo(this.radius,this.radius/2);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = this.color;     // color to stroke
    context.fill();     // render the fill
    context.stroke();

    context.restore();
  }
  checkEdges(){
      if(this.loc.x < 0 || this.loc.x >canvas.width){ //instance variable to canvas height
        this.vel.x *= -1
      }
      if(this.loc.y<0 || this.loc.y>canvas.height){
        this.vel.y *= -1
    }
  }
}
