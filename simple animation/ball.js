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
  update = function(){
    this.x += this.dx;    // update x coordinate of location with x velocity
    this.y += this.dy;
  }
  draw = function(){
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = this.color;     // color to stroke
    context.fill();     // render the fill
    context.stroke();
  }
  loadBalls = function{
  let this.x = Math.random()*100;
  let this.y = Math.random()*100;
  let this.dx = Math.random()*10 - 5;
  let this.dy = Math.random()*10 - 5;
  let this.radius = 15;
}
