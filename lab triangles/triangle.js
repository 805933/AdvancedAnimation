class Triangle{
  constructor (x, y, dx, dy, radius, color){
    //this.x = x; //declare instance variables
    //this.y = y;
    this.loc = new JSVector(x,y); //new creates a new instance
    //have a vector that already has an x and y
    //this.dx = dx;
    //this.dy = dy;
    this.vel = new JSVector(dx,dy);
    //have a vector that has velocity (use magnitude and direction)
    //vector has magnitude and direction and so does velocity and acceleration
    //so velocity can be represented as a vector (and so can acceleration)
    this.radius = radius;
    this.color = color;
    this.canvas = document.getElementById("cnv");
    this.context = this.canvas.getContext("2d");
  }
  update(){
    //this.loc.add(this.vel)
    this.loc.x += this.vel.x;    // update x coordinate of location with x velocity
    this.loc.y += this.vel.y;
  }
  draw(){
    context.beginPath();    // clear old path
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context.moveTo(this.loc.x, this.loc.y);
    context.lineTo(this.loc.x-this.radius,this.loc.y-this.radius/4);
    context.lineTo(this.loc.x-this.radius,this.loc.y+this.radius/4);
    //context.arc(this.loc.x, this.loc.y, this.radius, 0, 2 * Math.PI);
    context.strokeStyle = "black";  // color to fill
    context.fillStyle = this.color;     // color to stroke
    context.fill();     // render the fill
    context.stroke();
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
