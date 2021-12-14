window.addEventListener("load", init);
var canvas, context, head;
var segments = [];
function init(){
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
  canvas = document.getElementById("cnv");
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
  context = canvas.getContext("2d");
  createSegment();
  animate();
}
function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  window.requestAnimationFrame(animate);
  for (let i = 0; i<segments.length; i++){
    segments[i].run();
  }
  head.run();

}
function createSegment(){
  for (let i = 0; i<5; i++){
    let size = 20;
    let x = 200-20*i;
    let y = 200-20*i;
    let dx = 2;
    let dy = 2;
    if (i == 0){
      head = new Head(x,y,dx,dy,size);
      console.log(200-20*i);
    }
    else{
      size = 15;
      segments.push(new Segment(x,y,dx,dy,size))
      console.log(x);
    }
  }
}
