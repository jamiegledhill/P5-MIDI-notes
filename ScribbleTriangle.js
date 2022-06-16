class ScribbleTriangle{
    alpha = 80
    constructor(x,y, width, height, scribble){
      this.x = x +8
      this.y = y
      this.width = width
      this.height = height
      this.scribble = scribble
    }
    draw(){
      this.alpha += (0 - this.alpha)/20
    // console.log('draw BB')
      strokeWeight(20)
      stroke(255, this.alpha)
      this.scribble.scribbleLine( this.x - this.width/2, this.y + this.height/2, this.x - this.width/2, this.y -this.height/2)
      this.scribble.scribbleLine( this.x - this.width/2, this.y -this.height/2, this.x+ this.width/2, this.y)
      this.scribble.scribbleLine( this.x+ this.width/2, this.y, this.x - this.width/2, this.y + this.height/2)
  }
}