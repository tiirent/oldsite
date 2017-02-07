function init() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    

    leftPlayer = new Player(5, window.innerHeight/2);
    rightPlayer = new Player(window.innerWidth - 5 - 10, window.innerHeight/2);
    ball = new Ball(window.innerWidth/2, window.innerHeight/2);
    ele_list = [];


    window.requestAnimationFrame(updateCanvas);
}


function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    movePerson();
    me.draw(ctx);

    window.requestAnimationFrame(updateCanvas);
}

function movePerson(){

}