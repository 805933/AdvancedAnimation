window.addEventListener("load", init);
var canvas, context, canvasLocation, canvas2, context2
bounds = {
  width: 2000,
  height: 2000,
  top: -1000,
  left: -1000
}
//var particles = []; //fully aware of the fact that I'm using an array compared to something else
function init(){
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
  canvas = document.getElementById("cnv");
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
  context = canvas.getContext("2d");
  canvas2 = document.getElementById("cnv2");
  context2 = canvas2.getContext("2d");
  canvasLocation = new JSVector(0,0);
  window.addEventListener("keypress", keyPressHandler);
  loadBalls(1); //load a specified number of balls
  loadTarget();
  animate();
}
function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  context.save();
  context.beginPath();
  context.translate(-canvasLocation.x,-canvasLocation.y);
  context.strokeStyle = 'red';
  context.lineWidth = 5;
  context.moveTo(-2000,0);
  context.lineTo(2000,0);
  context.moveTo(0,-2000);
  context.lineTo(0,2000);
  context.stroke();
  context.beginPath();
  context.rect(bounds.top, bounds.left, bounds.width, bounds.height);
  context.strokeStyle = 'green';
  context.stroke();
  //triangle.getCanvasLocation(canvasLocation.x, canvasLocation.y);
  triangle.draw();
  target.draw();
  context.restore();

  context2.clearRect(0,0,canvas2.width,canvas2.height);
  context2.save();

  context2.beginPath();
  context2.scale(0.1,0.1);
  context2.translate(bounds.width/2,bounds.height/2)
  context2.strokeStyle = 'red';
  context2.lineWidth = 5;
  context2.moveTo(-2000,0)
  context2.lineTo(2000,0);
  context2.moveTo(0,-2000);
  context2.lineTo(0,2000);
  context2.stroke();

  context2.beginPath();
  context2.rect(bounds.top, bounds.left, bounds.width, bounds.height);
  context2.strokeStyle = 'green';
  context2.stroke();

  context2.beginPath();
  context2.rect(canvasLocation.x,canvasLocation.y,canvas.width,canvas.height);
  context2.strokeStyle = "rgba(128,128,128,1)";
  context2.stroke();
  target.update();
  target.draw2();
  triangle.update();
  triangle.draw2();
  context2.restore();

  window.requestAnimationFrame(animate);
  }
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
function keyPressHandler(event){
  if(event.code == "KeyW"){
    canvasLocation.y -= 10;
  }
  if(event.code == "KeyS"){
    canvasLocation.y -= -10;
  }
  if(event.code == "KeyA"){
    canvasLocation.x -= 10;
  }
  if(event.code == "KeyD"){
    canvasLocation.x -= -10;
  }
  if(event.code == "KeyC"){
    console.log("canvasLocX"+canvasLocation.x)
    console.log("canvasLocY"+canvasLocation.y);
    console.log("canvasLocXMod"+canvasLocation.x+800);
    console.log("canvasLocYMod"+canvasLocation.y+600);
    console.log(""+canvasLocation.x+","+canvasLocation.y+","+(800+canvasLocation.x)+","+(600+canvasLocation.y))

  }
}
