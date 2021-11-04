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
    }

function createBorder(){
    //let radius = 15;
    let x = canvas.width/2 + Math.random()*100-50; //middle of the canvas, with up to 50 pixels of variation in each direction
    let y = canvas.height/2 +Math.random()*100-50;
    //let dx = Math.random()*5 - 2.5;
    //let dy = Math.random()*7.5 - 3.75;
    border = new Border(x, y)
    }
