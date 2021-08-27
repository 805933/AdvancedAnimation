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

loadBalls(10);
animate();
}

// every animation cycle
function animate() {
// erase the HTMLCanvasElement
  context.clearRect(0,0,canvas.width,canvas.height);
  window.requestAnimationFrame(animate);
  for (let i = 0; i<balls.length; i++){
    //balls[i].run();
    balls[i].draw();
    balls[i].update();
    balls[i].checkEdges();
  }
}

  function loadBalls(n){
  for (let i = 0; i<n; i++){
  let x = Math.random()*100;
  let y = Math.random()*100;
  let dx = 5//Math.random()*10 - 5;
  let dy = 5//Math.random()*10 - 5;
  let r = 15;
  balls.push(new Ball(x, y, dx, dy, r))
    }
  }
