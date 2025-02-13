class Box {
  constructor( x, y ) {
    this.x = x
    this.y = y
    this.isLetter = false
    this.isRotating = true
    this.angle = 0
    this.hasDepth = true
    this.depth = 0
  }

  display() {
    if( this.isLetter ) {
      fill( 0, 0, 255 )
      this.angle += 1
      this.depth = this.hasDepth && this.depth + 2 * sin( this.angle )
    } else {
      fill(255)
      this.angle -= 1
      this.depth = this.hasDepth && this.depth + 2 * cos( this.angle )
    }

    push()
    translate( this.x, this.y, this.depth )
    if( this.isRotating ) {
      rotateX( this.angle )
      rotateY( this.angle )
    }
    box( size - ( 1 / 3 * size ) )
    pop()
  }
}