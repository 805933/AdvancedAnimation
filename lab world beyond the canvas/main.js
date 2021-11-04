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
  createBorder(); //creates border every frame
  window.requestAnimationFrame(animate);
    border.run();
    border.draw();
    }

function createBorder(){
    //let radius = 15;
    let x = 0;
    let y = 0;
    let width = 15;
    //let dx = Math.random()*5 - 2.5;
    //let dy = Math.random()*7.5 - 3.75;
    border = new Border(x, y, width)
    }
