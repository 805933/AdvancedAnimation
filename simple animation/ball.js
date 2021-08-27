class Ball{
  constructor (x, y, dx, dy, radius, color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.canvas = document.getElementById("cnv");
    this.context = this.canvas.getContext("2d");
  }
  update(){
    this.x += this.dx;    // update x coordinate of location with x velocity
    this.y += this.dy;
  }
  draw(){
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = this.color;     // color to stroke
    context.fill();     // render the fill
    context.stroke();
  }
  checkEdges(){
      if(this.x<0 || this.x>canvas.width){
        this.dx *= -1
      }
      if(this.y<0 || this.y>canvas.height){
        this.dy *= -1
      }
  }
}