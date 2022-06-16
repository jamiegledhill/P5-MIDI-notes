class BezierVertexBlob {
    constructor(x, y, width, height, iterations) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.halfWidth = width / 2
        this.halfHeight = height / 2
        this.iterations = iterations
    }
    draw() {
        console.log('draw BVB')
        noFill()
        stroke(50, 50)
        strokeWeight(1)
        let x1, y1, x2, y2, x3, y3, prevX3
        beginShape()
        vertex(this.x, this.y)
        for (let i = 0; i < this.iterations; i++) {
           if (prevX3) {
                x1 = prevX3
           } else {
                x1 = this.x + random(-this.width, this.width)
           }
            x2 = this.x + random(-this.width, this.width)
            x3 = this.x + random(-this.halfWidth, this.halfWidth)
            y1 = this.y + random(-this.height, this.height)
            y2 = this.y + random(-this.height, this.height)
            y3 = this.y + random(-this.halfHeight, this.halfHeight)
            prevX3 = x3
            bezierVertex(x1, y1, x2, y2, x3, y3)
        }
        vertex(this.x, this.y)
        endShape()
    }
}