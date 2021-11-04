window.addEventListener("load", init);
var canvas, context
function init(){
  canvas = document.getElementById("cnv");
  context = canvas.getContext("2d");
  createFlock(5);
  animate();
}
function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  window.requestAnimationFrame(animate);
}
function createFlock(n){
  for (let i = 0; i<n; i++{
    for (let j = 0; j<7; j++){
      let x = 0;
      let y = 0;
      let length = 40;
      let group = i;
      chicken = new Chicken(x, y, length, group);
    }
  }
}
