// wait for the page to finish loading with init as the callback
window.addEventListener("load", init);
//IMPORTANT: For looking up new terms, go to http://developer.mozilla.org
// global variables
var canvas, context;
var target, triangle;

function init(){
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
canvas = document.getElementById("cnv");
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
context = canvas.getContext("2d");

loadBalls(1); //load a specified number of balls
loadTarget();
//loadSpecial();
animate();
}

// every animation cycle
function animate() {
// erase the HTMLCanvasElement
  context.clearRect(0,0,canvas.width,canvas.height);
  window.requestAnimationFrame(animate);
  target.run();
  triangle.run();
  }
/*
  function loadSpecial(){
    let x = 50;
    let y = 50;
    let dx = 10;
    let dy = 10;
    let r = 20;
    let color = "green";
    specialBalls.push(new Ball(x, y, dx, dy, r, color));
    color = "red";
    x = 100;
    specialBalls.push(new Ball(x, y, dx, dy, r, color));
  }
*/
  function loadTarget(){
    let x = 500;
    let y = 400;
    let r = 20;
    let color = "blue";
    target = new Target(x, y, r, color)
  }

  function loadBalls(n){ //initialization and creation of ball instances
  for (let i = 0; i<n; i++){
  let x = Math.random()*150;
  let y = Math.random()*150;
  let dx = Math.random() + 2;
  let dy = Math.random() + 2;
  let r = 40;
  let color = "red";
  triangle = new Triangle(x, y, dx, dy, r, color) //create new ball instance with set variables
    }
  }
