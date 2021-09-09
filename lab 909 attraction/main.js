// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);
//IMPORTANT: For looking up new terms, go to http://developer.mozilla.org
// global variables
var canvas, context;
var ball = {}; //may not need
var balls = []; //make balls array

function init(){
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
canvas = document.getElementById("cnv");
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
context = canvas.getContext("2d");

loadBalls(10); //load a specified number of balls
animate();
}

// every animation cycle
function animate() {
// erase the HTMLCanvasElement
  context.clearRect(0,0,canvas.width,canvas.height);
  window.requestAnimationFrame(animate);
  for (let i = 0; i<balls.length; i++){
    //balls[i].run();
    balls[i].draw(); //run functions for every loaded ball
    balls[i].update();
    balls[i].checkEdges();
    balls[i].colorChange();
  }
}

  function loadBalls(n){ //initialization and creation of ball instances
  for (let i = 0; i<n; i++){
  let x = Math.random()*100;
  let y = Math.random()*100;
  let dx = 5//Math.random()*10 - 5; <- commented out for now to keep it simple
  let dy = 5//Math.random()*10 - 5;
  let r = 15;
  balls.push(new Ball(x, y, dx, dy, r)) //create new ball instance with set variables
    }
  }
