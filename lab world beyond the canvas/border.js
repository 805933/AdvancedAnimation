class Border{
  constructor(x,y,width){
    this.loc = new JSVector(x,y);
    this.vel = new JSVector(0,0);
    this.acc = new JSVector(0,0);
    this.width = width;
    //listener = document.querySelector('input');
    //listener = document.getElementById("listener")
  }
  run(){
    this.update();
    //this.draw();

  }
  update(){
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    document.addEventListener('keydown', function(event){
      switch(event.code){
        case "KeyW":
          console.log("w key responding");
      }
    })
    document.addEventListener('keydown', function(event){
      switch(event.code){
        case "KeyA":
          console.log("a key responding");
      }
    })
    document.addEventListener('keydown', function(event){
      switch(event.code){
        case "KeyS":
          console.log("s key responding");
      }
    })
    document.addEventListener('keydown', function(event){
      switch(event.code){
        case "KeyD":
          console.log("d key responding");
      }
    })
  }
  draw(){
    context.moveTo(this.x-2000,this.y)
    context.lineTo(this.x+2000,this.y)
    context.moveTo(this.x,this.y+2000)
    context.lineTo(this.x,this.y-2000)
    context.stroke();
  }
}
/*
      this.listener.addEventListener('keyup', (e) => {
        if(e.keyCode == 38){
          console.log("up arrow responding")
        })
      }
      this.listener.addEventListener('keyup', (e) => {
        if(e.keyCode == 39){
          console.log("right arrow responding")
        })
      }
      this.listener.addEventListener('keyup', (e) => {
        if(e.keyCode == 40){
          console.log("down arrow responding")
        })
    }
    */
