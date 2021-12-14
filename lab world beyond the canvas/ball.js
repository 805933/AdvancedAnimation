class Ball{
  constructor (x, y, dx, dy, radius, color,isSpecialBall){
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
    this.isSpecialBall = isSpecialBall;
    this.specialBallLoc = new JSVector(x,y);
    this.specialBallLoc.x = 0;
    this.specialBallLoc.y = 0;


  }
  update(){
    //this.loc.add(this.vel)
    this.checkSpecialBallLoc();
    //console.log(this.specialBallLoc);
    if (this.loc.distance(this.specialBallLoc)<100 && this.isSpecialBall == false){
      this.loc.x -= this.vel.x;
      this.loc.y -= this.vel.x;
      console.log(this.specialBallLoc + "  "+this.loc);
    }
    else{
      this.loc.x += this.vel.x;    // update x coordinate of location with x velocity
      this.loc.y += this.vel.y;
    }
      this.checkEdges();
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
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc
    context2.arc(this.loc.x, this.loc.y, this.radius, 0, 2 * Math.PI);
    context2.strokeStyle = "black";  // color to fill
    context2.fillStyle = this.color;     // color to stroke
    context2.fill();     // render the fill
    context2.stroke();
  }
  checkEdges(){
      if(this.loc.x < -1000 || this.loc.x >1000){ //instance variable to canvas height
        this.vel.x *= -1
      }
      if(this.loc.y<-1000 || this.loc.y>1000){
        this.vel.y *= -1
      }
  }
  checkSpecialBallLoc(){
    //console.log("special ball found")
    if (this.isSpecialBall == true){
      this.specialBallLoc = this.loc;
      console.log(this.specialBallLoc)
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
