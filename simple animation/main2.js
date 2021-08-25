// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);

// global variables
var canvas, context;
var ball = {};
var balls = [];

function init(){
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
canvas = document.getElementById("cnv");
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
context = canvas.getContext("2d");

loadBalls(4);
}

// every animation cycle
function animate() {
// erase the HTMLCanvasElement
context.clearRect(0,0,canvas.width,canvas.height);
  for (let ball = 0; i<balls.length; i++){
    balls[i].run();
    balls[i].draw();
    balls[i].update();
  }
}

function loadBalls(n){
for (let i = 0; i<n; i++){
let x = Math.random()*100;
let y = Math.random()*100;
let dx = Math.random()*10 - 5;
let dy = Math.random()*10 - 5;
let r = 15;
balls.push(new Ball(x, y, dx, dy, r))
}
}

function draw() {
    //let ball.radius = 15; // local variable radius of the circle
    // create the circle path
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = "blue";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}
function Ball(x, y, dx, dy, r){



}
