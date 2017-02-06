function init() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    score = 0;
    health = 100;

    mouseX = window.innerWidth / 2;
    mouseY = window.innerHeight / 2;

    wPressed = false;
    sPressed = false;
    aPressed = false;
    dPressed = false;

    me = new Player();
    me.x = window.innerWidth / 2 + 32;
    me.y = 200;

    // showLines = 0;
    // score = 0;
    // died = 0;

    // if (canvas.getContext) {
    //     ctx = canvas.getContext('2d');
    // }

    // ctx.globalCompositeOperation = 'destination-over';

    // document.addEventListener("mousemove", function(event) {
    //     mouseX = event.clientX;
    //     mouseY = event.clientY;
    // });

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    // document.addEventListener("click", function() {

    // });

    window.requestAnimationFrame(updateCanvas);
}


function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    movePerson();
    me.draw(ctx);

    window.requestAnimationFrame(updateCanvas);
}

function movePerson(){
    if(wPressed){
        me.move(0,-2);
    }
    if(sPressed){
        me.move(0,2);
    }
    if(aPressed){
        me.move(-2,0);
    }
    if(dPressed){
        me.move(2,0);
    }

}

function keyDownHandler(e) {
    if(e.keyCode == 87) {
        wPressed = true;
    }else if(e.keyCode == 83) {
        sPressed = true;
    }else if(e.keyCode == 65){
        aPressed = true;
    }else if(e.keyCode == 68){
        dPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 87) {
        wPressed = false;
    } else if(e.keyCode == 83) {
        sPressed = false;
    }else if(e.keyCode == 65){
        aPressed = false;
    }else if(e.keyCode == 68){
        dPressed = false;
    }
}