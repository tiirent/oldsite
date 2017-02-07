
function Player(x,y){
	this.x = x;
	this.y = y;
}

Player.prototype.draw = function(ctx){
	if(!this.killed){
		ctx.beginPath();
		ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
		ctx.fillStyle = "#FFFFFF";
		ctx.fill();
		ctx.closePath();
	}
}

Player.prototype.move = function(mX, mY){
	this.x = this.x + mX;
	this.y = this.y + mY;
}

Player.prototype.shoot = function(mX, mY){
	
}