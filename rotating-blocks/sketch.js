let cols, rows
let distMouse = 50
let size = 10
let offset = 4
let blocks = []


function setup() {
  createCanvas( 800, windowHeight )
  // set rectangle mode to center
  rectMode(CENTER)
  // set angle mode to center
  angleMode(DEGREES)
  cols = width / size
  rows = height / size

  for( let i = 0; i < cols; i++ ) {
    blocks[i] = []
    for( let j = 0; j < rows; j++ ) {
      blocks[ i ][ j ] = new Block( ( size / 2 ) + ( i * size ), ( size / 2 ) +  ( j * size ) )
    }
  }
}

function draw() {
  background(0)

  for( let i = 0; i < cols; i++ ) {
    for( let j = 0; j < rows; j++ ) {
      block = blocks[ i ][ j ]
      block.move()
      block.display()
    }
  }
}
