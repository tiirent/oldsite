
function Player(x,y){
	this.x = x;
	this.y = y;
	this.height = 75;
	this.width = 10;
	this.dy = 0;
	this.speed = 1;
}

Player.prototype.draw = function(ctx){
	ctx.beginPath();
	ctx.rect(this.x, this.y, this.width, this.height);
	ctx.fillStyle = "#FFFFFF";
	ctx.fill();
	ctx.closePath();
}
