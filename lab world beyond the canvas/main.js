window.addEventListener("load", init);
var canvas, context, canvasLocation, canvas2, context2, mouseX, mouseY, flipped
var particles = [];
let mouseDown = isFlipped = false;
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
  window.addEventListener("click", clickHandler);
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

  for (let i = 0; i<particles.length; i++){
    //particles[i].update();
    context.lineWidth = 1.5;
    particles[i].draw();
    //console.log(particles[i].flipped);
/*
    particles[i].flipped(isFlipped);
    if (particles[i].isDead() == true){
      particles.splice(i,1);
      i--; //stops rendering if the particle has 'died'
    }
    */
  }
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
  if (mouseDown){
      createParticle(); //creates particle every frame
  }
  for (let i = 0; i<particles.length; i++){
    particles[i].update();
    particles[i].draw2();
    //console.log(particles[i].flipped);
    particles[i].flipped(isFlipped);
    if (particles[i].isDead() == true){
      particles.splice(i,1);
      i--; //stops rendering if the particle has 'died'
    }
  }
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
  function createParticle(){
    for (let i = 0; i<1; i++){ //Setting the value to >1 creates multiple particles each frame
      let radius = 15;
      let x = mouseX+ Math.random()*100-50; //middle of the canvas, with up to 50 pixels of variation in each direction
      let y = mouseY+Math.random()*100-50;
      let dx = Math.random()*5 - 2.5; //initial velocity of x, can be anywhere from -2.5 to 2.5.
      let dy = Math.random()*7.5 - 3.75; //can be anywhere from -3.75 to 3.75
      let r = Math.floor(Math.random()*255);
      let g = Math.floor(Math.random()*255);
      let b = Math.floor(Math.random()*255);
      let a = 1; //gives particle random color and sets to 100% opacity
      let clr = "rgba("+r+","+g+","+b+","+a+")"
      let life = Math.floor(Math.random()*90)+90; //particle can last from 1.5 to 3 seconds
      particles.push(new Particle(x, y, dx, dy, radius, clr, life, r, g, b));
      //console.log(mouseX + "   " + mouseY);
      }
    }
function keyPressHandler(event){
  if(event.code == "KeyW"){
    {
      canvasLocation.y -= 10;
    }
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
  if(event.code == "KeyF"){
    if (isFlipped == false){
      isFlipped = true;
    }
    else{
      isFlipped = false;
    }
  }
}
function clickHandler(event){
  mouseX = event.clientX+canvasLocation.x-10;
  mouseY = event.clientY+canvasLocation.y-10;
  mouseDown = true;
}
