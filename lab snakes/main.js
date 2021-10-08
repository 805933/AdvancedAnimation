window.addEventListener("load", init);
var canvas, context;
var segments = [];
function init(){
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
  canvas = document.getElementById("cnv");
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
  context = canvas.getContext("2d");
  animate();
}
function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  window.requestAnimationFrame(animate);
  for (let i = 0; i<segments.length; i++){
    segments[i].run();
  }
}
function createSegment(){
  for (let i = 0; i<3; i++){
    let size = 30;
    let x = Math.random() * 100;
    let y = Math.random() * 100;
    segments.push(new Segment(size,x,y));
  }
}
