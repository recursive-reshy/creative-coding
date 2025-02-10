let x, y
let r = 360

let angle = 0
let shiftingAngle = []
let numAmixs = 20
let x2 = []
let y2 = []

function setup() {
  createCanvas( windowWidth, windowHeight )
  angleMode( DEGREES )
  colorMode( HSB )

  for( let i = 0; i < numAmixs; i++ ) {
    shiftingAngle[i] = i * 90 / numAmixs
  }
}

function draw() {
  let hueValue = angle % 360 // Map angle to hue range
  background( hueValue, 100, 100 ) // Set background color based on hue
  
  stroke(0)

  x = r * cos( angle )
  y = r * sin( angle )

  translate( width / 2, height / 2 )

  // Primary ellipse color - changes independently from background
  let primaryEllipseHue = ( angle * 2 ) % 360 // Faster hue change for ellipse
  fill( primaryEllipseHue, 100, 100 )
  ellipse( 0, 0, r * 2, r * 2 )

  fill( 255 )
  ellipse( x, y, 20, 20 )

  for( let i = 0; i < numAmixs; i++ ) {
    x2[i] = r * cos( angle + shiftingAngle[i] )
    y2[i] = r * sin( angle + shiftingAngle[i] )

    let ellipseHue = ( angle * 2 + shiftingAngle[i] * 5 ) % 360
    fill(ellipseHue, 100, 100)

    // Change stroke color dynamically
    let strokeHue = ( angle * 3 + shiftingAngle[i] * 4 ) % 360
    stroke( strokeHue, 100, 100 ) // Stroke color changes dynamically

    push()
    rotate( -shiftingAngle[i] )
    line( -r, 0, r, 0 )
    line( 0, -r, 0, r )
    ellipse( x2[i], 0, 20, 20 )
    ellipse( 0, y2[i], 20, 20 )
    pop()

  }

  angle += 1
}
