class ScribbleCircle{
    alpha = 80
    constructor(x,y, width, height, scribble){
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.scribble = scribble
    }
    draw(){
      this.alpha += (0 - this.alpha)/20
      strokeWeight(20)
      stroke(255, this.alpha)
      this.scribble.scribbleEllipse( this.x, this.y, this.width, this.height)
  }
}