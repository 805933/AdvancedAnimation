
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
    for (let i = 0; i<5; i++){
      let ball = {};
      ball.x = ball.y = Math.random()*100;
      ball.dx = ball.dy = Math.random()*5;
      ball.radius = 15;
      balls.push(ball)
      ball.checkEdges = function(){
        if(this.x<0 || this.x>canvas.width){
          this.dx *= -1
        }
        if(this.y<0 || this.y>canvas.height){
          this.dy *= -1
        }
    }
    ball.update = function(){
      this.x += this.dx;
      this.y += this.dy;
    }
    ball.draw = function(){
      //let ball.radius = 15; // local variable radius of the circle
      // create the circle path
      context.beginPath();    // clear old path
      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      context.strokeStyle = "black";  // color to fill
      context.fillStyle = "blue";     // color to stroke
      context.fill();     // render the fill
      context.stroke();   // render the stroke
      animate();      // kick off the animation
    }
/*
    ball.x = ball.y = 100;
    ball.dx = ball.dy = 5;
    ball.radius = 15;
    ball2.x = ball2.y = 200;
    ball2.dx = ball2.dy = 3;
    ball2.radius = 15;
    ball.checkEdges = function(){
      if(this.x<0 || this.x>canvas.width){
        this.dx *= -1
      }
      if(this.y<0 || this.y>canvas.height){
        this.dy *= -1
      }
    }

    ball2.checkEdges = function(){
      if(this.x<0 || this.x>canvas.width){
        this.dx *= -1
      }
      if(this.y<0 || this.y>canvas.height){
        this.dy *= -1
      }
    }
    ball.update = function(){
      this.x += this.dx;
      this.y += this.dy;
    }
    ball2.update = function(){
      this.x += this.dx;
      this.y += this.dy;
    }

    ball.draw = function(){
      //let ball.radius = 15; // local variable radius of the circle
      // create the circle path
      context.beginPath();    // clear old path
      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      context.strokeStyle = "black";  // color to fill
      context.fillStyle = "blue";     // color to stroke
      context.fill();     // render the fill
      context.stroke();   // render the stroke
    }
    ball2.draw = function(){
      //let ball.radius = 15; // local variable radius of the circle
      // create the circle path
      context.beginPath();    // clear old path
      // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      context.strokeStyle = "black";  // color to fill
      context.fillStyle = "blue";     // color to stroke
      context.fill();     // render the fill
      context.stroke();   // render the stroke
    }
    */

// every animation cycle
function animate() {
    // erase the HTMLCanvasElement
    context.clearRect(0,0,canvas.width,canvas.height);
    for (let ball = 0; i<balls.length; i++){
      balls[i].run();
      balls[i].draw();
      balls[i].update();
    }
/*
    ball.checkEdges();
    ball2.checkEdges();
    ball.update();   // update location
    ball2.update();
    ball.draw();    // render
    ball2.draw();
    requestAnimationFrame(animate); // next cycle
    */
}

// move the circle to a new location
function update() {
    ball.x += ball.dx;    // update x coordinate of location with x velocity
    ball.y += ball.dy;    // update y coordinate of location with y velocity
    //ball2.x2 += ball2.dx2;
    //ball2.y2 += ball2.dy2;
}
/*
function checkEdges() {
  if(ball.x<0 || ball.x>canvas.width){
    ball.dx *= -1
  }
  if(ball.y<0 || ball.y>canvas.height){
    ball.dy *= -1
  }
  if(x2<0 || x2>canvas.width){
    dx2 *= -1
  }
  if(y2<0 || y2>canvas.height){
    dy2 *= -1
  }
}
*/
// render a circle
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
/*
function draw2() {
    //let ball2.radius = 20; // local variable radius of the circle
    // create the circle path
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(ball2.x, ball2.y, ball2.radius, 0, 2 * Math.PI);
    context.strokeStyle = "yellow";  // color to fill
    context.fillStyle = "purple";     // color to stroke
    context.fill();     // render the fill
    context.stroke();   // render the stroke
}
*/
}
}
