function Ball(nx, ny){
	this.x = nx;
	this.y = ny;
	this.dx = getRandomInt(0,10);
	this.dy = getRandomInt(-10,10);
	this.radius = 10;
}

Ball.prototype.draw = function (ctx){
	//updateBall();
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
	ctx.fillStyle = "#FFFFFF";
	ctx.fill();
	ctx.closePath();
}

function getRandomInt(min, max){
	rand = Math.floor(Math.random() * (max-min + 1)) + min;
	while(rand == 0){
		rand = Math.floor(Math.random() * (max-min + 1)) + min;
	}
	return rand;
}