class BezierBlob{
    alpha = 80
    constructor(x,y, width, height, iterations){
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.halfWidth = width/2
      this.halfHeight = height/2
      this.iterations = iterations
    }
    draw(){
      this.alpha += (0 - this.alpha)/20
    // console.log('draw BB')
      noFill()
      stroke(255, this.alpha)
      // strokeWeight(2)
      let x1, y1, x2, y2, x3, y3, x4, y4
      for(let i = 0; i < this.iterations; i++){
        x1 = this.x + random(-this.halfWidth, this.halfWidth)
        x2 = this.x + random(-this.width, this.width)
        x3 = this.x + random(-this.width*2, this.width*2)
        x4 = this.x + random(-this.halfWidth, this.halfWidth)
        y1 = this.y + random(-this.halfHeight, this.halfHeight)
        y2 = this.y + random(-this.height, this.height)
        y3 = this.y + random(-this.height*2, this.height*2)
        y4 = this.y + random(-this.halfHeight, this.halfHeight)
        bezier(x1, y1, x2, y2, x3, y3, x4, y4)
      }
    }
  }