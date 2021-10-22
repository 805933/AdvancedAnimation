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
    if (particles[i].isDead() == true){
      particles.splice(i,1);
    }
  }


}
function createParticle(){
  for (let i = 0; i<5; i++){
    let radius = 20;
    let x = canvas.width/2 + Math.random()*100;
    let y = canvas.height/2 +Math.random()*100;
    let dx = Math.random()*5 - 3;
    let dy = Math.random()*5 - 3;
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let color = "rgb("+r+","+g+","+b+")"//rgb(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255))
    let life = Math.random()*60 + 120
    particles.push(new Particle(x, y, dx, dy, radius, color, life))
    }
  }
