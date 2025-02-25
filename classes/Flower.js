class Flower {
  constructor( radius, points, fAmp, periods, speed ) {
    this.x = []
    this.y = []
    this.radius = radius

    this.points = points

    this.fRadius = 0
    this.fAmp = fAmp
    this.periods = periods

    this.speed = speed
    this.rot = 0
  }

  display() {
    push()
    blendMode(DIFFERENCE)
    noStroke()
    fill(255)

    beginShape()
    for( let i = 0; i < this.points; i++ ) {
      let angle = i / this.points * 360
  
      this.fRadius = this.fAmp * cos( angle * this.periods )
  
      this.x[i] = ( this.radius + this.fRadius ) * cos( angle + this.rot )
      this.y[i] = ( this.radius + this.fRadius ) * sin( angle + this.rot )
  
      vertex( this.x[i], this.y[i] )
    }
    endShape(CLOSE)
    pop()
    
    this.rot += this.speed
  }
}