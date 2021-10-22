window.addEventListener("load", init);
var canvas, context
var particles = []; //fully aware of the fact that I'm using an array compared to something else
function init(){
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
  canvas = document.getElementById("cnv");
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
  context = canvas.getContext("2d");
  animate();
}
function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  createParticle(); //creates particle every frame
  window.requestAnimationFrame(animate);
  for (let i = 0; i<particles.length; i++){
    particles[i].run();
    if (particles[i].isDead() == true){
      particles.splice(i,1);
      i--; //stops rendering if the particle has 'died'
    }
  }


}
function createParticle(){
  for (let i = 0; i<1; i++){ //Setting the value to >1 creates multiple particles each frame
    let radius = 15;
    let x = canvas.width/2 + Math.random()*100-50; //middle of the canvas, with up to 50 pixels of variation in each direction
    let y = canvas.height/2 +Math.random()*100-50;
    let dx = Math.random()*5 - 2.5; //initial velocity of x, can be anywhere from -2.5 to 2.5.
    let dy = Math.random()*7.5 - 3.75; //can be anywhere from -3.75 to 3.75
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let a = 1; //gives particle random color and sets to 100% opacity
    let clr = "rgba("+r+","+g+","+b+","+a+")"
    let life = Math.floor(Math.random()*90)+90; //particle can last from 1.5 to 3 seconds
    particles.push(new Particle(x, y, dx, dy, radius, clr, life, r, g, b))
    }
  }
