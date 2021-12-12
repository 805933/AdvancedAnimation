var mouseX, mouseY;
function Cell(x, y, size, ctx, i, j, occupied){
  this.loc = new JSVector(x,y);
  this.size = size;
  this.ctx = ctx;
  this.neighbors = {n:null,s:null,e:null,w:null,ne:null,se:null,sw:null,nw:null}
  this.i = i;
  this.j = j;
  this.occupied = occupied;
}

//Cell.prototype.checkOccupation = function(){
  //this.occupied = true;
//}

Cell.prototype.checkOccupation = function(mouseX, mouseY, canvasX, canvasY){
  if(mouseX >= this.loc.x-canvasX && mouseX <= this.loc.x -canvasX+this.size && mouseY >= this.loc.y-canvasY && mouseY <= this.loc.y +this.size-canvasY){
    if (this.occupied == false){
      this.occupied = true;
    }
    else{
      this.occupied = false;
    }
  }
}
Cell.prototype.getX = function(){
  return this.loc.x;
}
Cell.prototype.draw = function(){
  if (this.occupied == false){
    this.ctx.fillStyle = 'rgb(200,200,255)';
  }
  else{
    this.ctx.fillStyle = 'rgb(255,200,200)';
  }
  this.ctx.strokeStyle = 'orange';
  this.ctx.lineWidth = 3;
  this.ctx.fillRect(this.loc.x, this.loc.y, this.size, this.size);
  this.ctx.strokeRect(this.loc.x, this.loc.y, this.size, this.size);
  this.ctx.fillStyle = 'black';
  this.ctx.fillText("row: "+ this.i,this.loc.x+this.size/5,this.loc.y+this.size/4);
  this.ctx.fillText("col: "+ this.j, this.loc.x+this.size/5, this.loc.y+this.size/2);
  this.ctx.fillText("occ: "+ this.occupied, this.loc.x+this.size/10, this.loc.y+this.size/1.33);
}
/*
function clickHandler(event){
  mouseX = event.clientX-10;
  mouseY = event.clientY-10;

}
*/
