function Ball(x, y){
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
}

Ball.prototype.draw = function (ctx){
	ctx.beginPath();
	ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
	ctx.fillStyle = "#FFFFFF";
	ctx.fill();
	ctx.closePath();

}