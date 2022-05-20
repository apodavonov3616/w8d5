import Level from "./level";

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.animate();
  }

  animate(){
    this.level = new Level(this.dimensions)
    this.level.drawBackground(this.ctx)
    // level.drawBackground(window)
  }
}


