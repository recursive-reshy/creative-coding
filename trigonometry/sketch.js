let x, y
let r = 200
let angle = 0
let shiftingAngle = []
let numAmixs = 8
let x2 = []
let y2 = []

function setup() {
  createCanvas( windowWidth, windowHeight )
  angleMode( DEGREES )

  for( let i = 0; i < numAmixs; i++ ) {
    shiftingAngle[i] = i * 90 / numAmixs
  }
}

function draw() {
  background(220)
  
  stroke(0)
  // angle = map( mouseX, 0, width, 0, 360 )

  x = r * cos( angle )
  y = r * sin( angle )

  translate( width / 2, height / 2 )

  noFill()
  ellipse( 0, 0, r * 2, r * 2 )
  fill( 255, 0, 0 )
  ellipse( x, y, 20, 20 )

  for( let i = 0; i < numAmixs; i++ ) {
    x2[i] = r * cos( angle + shiftingAngle[i] )
    y2[i] = r * sin( angle + shiftingAngle[i] )

    fill(255)
    push()
    rotate( -shiftingAngle[i] )
    line( -r, 0, r, 0 )
    line( 0, -r, 0, r )
    ellipse( x2[i], 0, 20, 20 )
    ellipse( 0, y2[i], 20, 20 )
    pop()
    angle += 1
  }
}
