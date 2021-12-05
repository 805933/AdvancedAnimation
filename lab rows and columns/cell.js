function Cell(x, y, size, ctx, i, j){
  this.loc = new JSVector(x,y);
  this.size = size;
  this.ctx = ctx;
  this.neighbors = {n:null,s:null,e:null,w:null,ne:null,se:null,sw:null,nw:null}
  this.i = i;
  this.j = j;

}

Cell.prototype.draw = function(){
  this.ctx.fillStyle = 'rgb(200,200,255)';
  this.ctx.strokeStyle = 'orange';
  this.ctx.lineWidth = 3;
  this.ctx.fillRect(this.loc.x, this.loc.y, this.size, this.size);
  this.ctx.strokeRect(this.loc.x, this.loc.y, this.size, this.size);
  this.ctx.fillStyle = 'black';
  this.ctx.fillText("row: "+ this.i,this.loc.x+this.size/5,this.loc.y+this.size/4);
  this.ctx.fillText("col: "+ this.j, this.loc.x+this.size/5, this.loc.y+this.size/2)
}
