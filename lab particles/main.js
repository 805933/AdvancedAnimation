window.addEventListener("load", init);
var canvas, context
var particles = [];
function init(){
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
  canvas = document.getElementById("cnv");
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
  context = canvas.getContext("2d");
  animate();
}
function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  createParticle();
  window.requestAnimationFrame(animate);
  for (let i = 0; i<particles.length; i++){
    particles[i].run();
    if (particles[i].isDead() == true){
      particles.splice(i,1);
      i--;
    }
  }


}
function createParticle(){
  for (let i = 0; i<1; i++){
    let radius = 15;
    let x = canvas.width/2 + Math.random()*100-50;
    let y = canvas.height/2 +Math.random()*100-50;
    let dx = Math.random()*5 - 2.5;
    let dy = Math.random()*7.5 - 3.75;
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let a = 1;
    let clr = "rgba("+r+","+g+","+b+","+a+")"
    let life = Math.floor(Math.random()*90)+90;
    particles.push(new Particle(x, y, dx, dy, radius, clr, life, r, g, b))
    }
  }
