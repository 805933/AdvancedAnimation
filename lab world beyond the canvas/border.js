class Border{
  constructor(x,y){
    this.loc = new JSVector(x,y);
    this.vel = new JSVector(0,0);
    this.acc = new JSVector(0,0);
    let listener = document.querySelector('input');
  }
  run(){
    this.update();
    //this.draw();

  }
  update(){
    this.loc.add(this.vel);
    this.vel.add(this.acc);
    listener.addEventListener('keyup', (e) => {
      if(e.keyCode == 37){
        console.log("left arrow responding")
      }
    })
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
