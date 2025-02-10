class Block {
	constructor( x, y ) {
		this.x = x
		this.y = y
		this.angle = 0
		this.stroke = 70
	}

	display() {
		noFill()
		stroke(this.stroke)
		// Saves the current transformations (translate and rotate)
		push()
		// Translate the origin point
		translate( this.x, this.y )
		rotate( this.angle )
		if( this.angle > 0 && this.angle < 45 )
			this.drawRect()
		else
			this.drawX()
		// Restores the transformations to the original origin point of the canvas
		pop()
	}

	move() {
		// Only start incrementing the angle if the mouse has moved 
		if( ( pmouseX - mouseX != 0 ) || ( pmouseY - mouseY != 0 ) ) {
			if( dist( mouseX, mouseY, this.x, this.y ) < distMouse ) {
				this.angle += 1
				// Turn stroke to white when mouse approaches
				this.stroke = color( 255, 255, 0 )
			}
		} 

		// If block has started rotating, continue until it reaches 90 degrees
		if( this.angle > 0 && this.angle < 90 ) {
			this.angle += 1
			if( this.angle > 45 ) 
				this.stroke = color( 'blue' )
			// Decrease stroke as block rotates, only if stroke is more than the original color
			if( this.stroke > 70 )
				this.stroke -= 3
		}
		else {
			this.angle = 0
			// Reset stroke to original color
			this.stroke = 70
		}
	}

	drawRect() {
		rect( 0, 0, ( size - offset ), ( size - offset ) )
	}

	drawX() {
		let margin = -size / 2
		line( ( margin + offset / 2 ), ( margin + offset / 2 ), ( margin + size - offset / 2 ), ( margin + size - offset / 2 ) )
		line( ( margin + size - offset / 2 ), ( margin + offset / 2 ), ( margin + offset / 2 ), ( margin + size - offset / 2 ) )
	}
}