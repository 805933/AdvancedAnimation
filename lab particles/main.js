window.addEventListener("load", init);
var canvas, context
var particles = [];
function init(){
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
  canvas = document.getElementById("cnv");
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
  context = canvas.getContext("2d");
  createParticle();
  animate();
}
function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  window.requestAnimationFrame(animate);
  for (let i = 0; i<particles.length; i++){
    particles[i].run();
  }


}
function createParticle(){
  for (let i = 0; i<5; i++){
    let radius = 20;
    let x = canvas.width/2;
    let y = canvas.height/2;
    let dx = 3;
    let dy = 3;
    particles.push(new Particle(x,y,dx,dy,radius))
    }
  }
