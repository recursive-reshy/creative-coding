let size = 30
let rows, cols, font

let boxes = []

let msg = 'R'

let points = []

let fontX = -152
let fontY = 160
let fontSize = 400

function preload() {
	font = loadFont('../fonts/Roboto-Bold.ttf')
}

function setup() {
  // WEBGL is a 3D rendering context
  createCanvas( 600, windowHeight, WEBGL )
	angleMode( DEGREES )

	cols = width / size
	rows = height / size

	points = font.textToPoints( msg, fontX, fontY, fontSize )

	for( let i = 0; i < cols; i++ ) {
		boxes[i] = []
		for( let j = 0; j < rows; j++ ) {
			boxes[i][j] = new Box(
				( size / 2 + i * size ) - ( size * cols / 2 ),
				( size / 2 + j * size ) - ( size * rows / 2 )
			)
		}
	}
}

function draw() {
  background(220)

	let distance

	for( let i = 0; i < cols; i++ ) {
		for( let j = 0; j < rows; j++ ) {
			for( let k = 0; k < points.length; k++ ) {
				distance = dist( 
					points[k].x,
					points[k].y,
					boxes[i][j].x,
					boxes[i][j].y
				)

				if( distance < 15 ) {
					boxes[i][j].isLetter = true
				}
			}
			// boxes[i][j].isRotating = false
			boxes[i][j].display()
		}
	}

	// Use ellipse to outline the msg points
	// fill( 255, 0, 0 )
	// for( let i = 0; i < points.length; i++ ) {
	// 	ellipse( points[i].x, points[i].y, 10, 10 )
	// }
}
