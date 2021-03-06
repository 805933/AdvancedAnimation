//How would I get the x and y of one vector to use in another?

class Target{
  constructor (x, y, radius, color){
    //this.x = x; //declare instance variables
    //this.y = y;
    this.loc = new JSVector(x,y); //new creates a new instance
    //have a vector that already has an x and y
    //this.dx = dx;
    //this.dy = dy;
    //this.vel = new JSVector(dx,dy);
    //THIS.ANGLE?
    //have a vector that has velocity (use magnitude and direction)
    //vector has magnitude and direction and so does velocity and acceleration
    //so velocity can be represented as a vector (and so can acceleration)
    this.radius = radius;
    this.color = color;
    this.canvas = document.getElementById("cnv");
    this.context = this.canvas.getContext("2d");
  }
  run(){
    this.update();
    this.draw();
    //this.checkEdges();
  }
  update(){
    this.loc.getDirection();
    if (this.loc.distance(triangle.loc)<100){
      this.loc = new JSVector(Math.random()*bounds.width-bounds.width/2,Math.random()*bounds.height-bounds.height/2);
    }

    /*
    If the distance is less than 200, find a new location.
    */

  }
  draw(){
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.arc(this.loc.x, this.loc.y, this.radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = this.color;     // color to stroke
    context.fill();     // render the fill
    context.stroke();
  }
  draw2(){
    context2.beginPath();    // clear old path
    //context2.scale(0.1,0.1);
    //context2.translate(bounds.width/2,bounds.height/2);
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context2.arc(this.loc.x, this.loc.y, this.radius, 0, 2 * Math.PI);
    context2.strokeStyle = "black";  // color to fill
    context2.fillStyle = this.color;     // color to stroke
    context2.fill();     // render the fill
    context2.stroke();
  }
  checkEdges(){
      if(this.loc.x < 0 || this.loc.x >canvas.width){ //instance variable to canvas height
        this.vel.x *= -1
      }
      if(this.loc.y<0 || this.loc.y>canvas.height){
        this.vel.y *= -1
      }
  }
  /*
  colorChange(){
    for (let i = 0; i<balls.length; i++){
      for (let k = 0; k<balls.length; k++){
        if (balls[i].loc == balls[k].loc){
          balls[i].color = "orange";
        }
        else{
          balls[i].color = "black";
        }
      }
    }
  }
  */
}
