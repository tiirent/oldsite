var score;
var health;
var radius;
function Player(){
	this.dx = 0;
	this.dy = 0;
	this.x = 500;
	this.y = 500;
	this.radius = 25;
	this.killed = false;
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

Player.prototype.move = function(mX,mY){
	this.x = this.x + mX;
	this.y = this.y + mY;
}