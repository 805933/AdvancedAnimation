class Head{
  constructor(x, y, dx, dy, size){
    this.loc = new JSVector(x,y); //new creates a new instance
    this.vel = new JSVector(dx,dy);
    this.acc = new JSVector(0,0);
    this.size = size;
    this.canvas = document.getElementById("cnv");
    this.context = this.canvas.getContext("2d");
  }
  run(){
    this.update();
    this.draw();
  }

  update(){
    this.loc.add(this.vel);
    this.loc.add(this.vel);
      if(this.loc.x < 0 || this.loc.x >canvas.width){
        this.vel.x *= -1
      }
      if(this.loc.y<0 || this.loc.y>canvas.height){
        this.vel.y *= -1
      }
    }
  draw(){
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(this.loc.x, this.loc.y, this.size, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = this.color;     // color to stroke
    context.fill();     // render the fill
    context.stroke();
  }
}
