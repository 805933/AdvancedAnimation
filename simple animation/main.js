
// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context, x, y, dx, dy, x2, y2, dx2, dy2;

function init(){
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
    canvas = document.getElementById("cnv");
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    context = canvas.getContext("2d");

    x = y = 100;    // initial x,y canvas location
    dx = dy = 2;    // velocity in x and y directions
    x2 = y2 = 150;
    dx2 = dy2 = 5;

    animate();      // kick off the animation
}

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0,0,canvas.width,canvas.height);
    checkEdges();
    update();   // update location
    draw();    // render
    draw2();
    requestAnimationFrame(animate); // next cycle
}

// move the circle to a new location
function update() {
    x += dx;    // update x coordinate of location with x velocity
    y += dy;    // update y coordinate of location with y velocity
    x2 += dx2;
    y2 += dy2;
}

function checkEdges() {
  if(x<0 || x>canvas.width){
    dx *= -1
  }
  if(y<0 || y>canvas.height){
    dy *= -1
  }
  if(x2<0 || x2>canvas.width){
    dx2 *= -1
  }
  if(y2<0 || y2>canvas.height){
    dy2 *= -1
  }
}

// render a circle
function draw() {
    let radius = 15; // local variable radius of the circle
    // create the circle path
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = "blue";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}

function draw2() {
    let radius = 20; // local variable radius of the circle
    // create the circle path
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(x2, y2, radius, 0, 2 * Math.PI);
    context.strokeStyle = "yellow";  // color to fill
    context.fillStyle = "purple";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}
