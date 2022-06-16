class NoiseBlob{
    alpha = 80
    constructor(x,y, width, height, iterations, seed){
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.iterations = iterations
      this.seed = seed
    }
    draw(){
    let t = this.seed
      this.alpha += (0 - this.alpha)/20
    // console.log('draw NB')
      noFill()
      stroke(255, this.alpha)
      // strokeWeight(2)
      let x1, y1, x2, y2, x3, y3, x4, y4
      for(let i = 0; i < this.iterations; i++){
        x1 = width * noise(t + 15)
        x2 = width * noise(t + 25)
        x3 = width * noise(t + 35)
        x4 = width * noise(t + 45)
        y1 = height * noise(t + 55)
        y2 = height * noise(t + 65)
        y3 = height * noise(t + 75)
        y4 = height * noise(t + 85)
        bezier(x1, y1, x2, y2, x3, y3, x4, y4)
        t+=0.005
      }
    }
  }