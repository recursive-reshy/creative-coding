let flowers = []
let numOfFlowers = 15

function setup() {
  createCanvas( windowWidth, windowHeight )
  angleMode( DEGREES )
  for( let i = 0; i < numOfFlowers; i++ ) {
    if( i % 2 == 0 ) {
			flowers[i] = new Flower( ( 140 - i * 10 ), 100, 15, 7, ( i * 0.1 ) )
    } else{
			flowers[i] = new Flower( ( 140 - i * 10 ), 100, 15, 7, ( i * -0.1 ) )
		}
  }
}

function draw() {
  background(0)
  translate( width / 2, height / 2 )
  
  for( let i = 0; i < numOfFlowers; i++ ) {
    flowers[i].display()
  }
}
