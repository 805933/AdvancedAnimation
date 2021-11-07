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
  context.restore();
  context2.clearRect(0,0,canvas2.width,canvas2.height);
  context2.save();
  context2.beginPath();
  context2.scale(0.05,0.05);
  context2.translate(2000,2000)
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
  context2.rect(canvasLocation.x,canvasLocation.y,canvasLocation.x+800,canvasLocation.y+600);
  context2.strokeStyle = "rgba(128,128,128,0.8)";
  context2.stroke();
  context2.restore();

  window.requestAnimationFrame(animate);
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
}
