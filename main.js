function init() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    

    leftPlayer = new Player(5, window.innerHeight/2);
    rightPlayer = new Player(window.innerWidth - 5 - 10, window.innerHeight/2);
    ball = new Ball(50, 50);
    ele_list = [ball, leftPlayer, rightPlayer];


    window.requestAnimationFrame(updateCanvas);
}


function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateLeft();
    updateRight();
    updateBall();

    for(i = 0; i < ele_list.length; i++){
        ele_list[i].draw(ctx);
    }

    window.requestAnimationFrame(updateCanvas);
}

function updateBall(){
    if(ele_list[0].x + ele_list[0].dx > window.innerWidth-ele_list[0].radius - 5 - 10 || ele_list[0].x + ele_list[0].dx < ele_list[0].radius + 5 + 10) {
        ele_list[0].dx = -ele_list[0].dx;
    }
    if(ele_list[0].y + ele_list[0].dy > window.innerHeight-ele_list[0].radius || ele_list[0].y + ele_list[0].dy < ele_list[0].radius) {
        ele_list[0].dy = -ele_list[0].dy;
    }
    ele_list[0].x += ele_list[0].dx;
    ele_list[0].y += ele_list[0].dy;
}

function updateLeft(){
    if(ele_list[0].dx > 0){
        //if paddle already in center, stay there
        if(ele_list[1].y == window.innerHeight/2){
            ele_list[1].dy = 0;
        }else if(ele_list[1].y < window.innerHeight/2){
            ele_list[1].dy = 2;
        }else if(ele_list[1].y > window.innerHeight/2){
            ele_list[1].dy = -2;
        }
        

    }else{
        var tempdy = ele_list[0].dy;
        var tempy = ele_list[0].y;
        var tempdx = ele_list[0].dx;
        var distance = ele_list[0].x - 5 - 10 - 10; // - padding - paddlewidth - radius
        while(distance > 0){
            if(tempy + tempdy > window.innerHeight - 10 || tempy + tempdy < 10){
                tempdy = -tempdy;
            }
            tempy += tempdy;
            distance += tempdx;
        }
        tempy = tempy - 37;
        
        if(ele_list[1].y == tempy){
            ele_list[1].dy = 0;
        }else if(ele_list[1].y < tempy){
            ele_list[1].dy = 2;
        }else if(ele_list[1].y > tempy){
            ele_list[1].dy = -2;
        }

    }
    ele_list[1].y += ele_list[1].dy;

}


function updateRight(){
    if(ele_list[0].dx < 0){
        //if paddle already in center, stay there
        if(ele_list[2].y == window.innerHeight/2){
            ele_list[2].dy = 0;
        }else if(ele_list[2].y < window.innerHeight/2){
            ele_list[2].dy = 2;
        }else if(ele_list[2].y > window.innerHeight/2){
            ele_list[2].dy = -2;
        }
        

    }else{
        var tempdy = ele_list[0].dy;
        var tempy = ele_list[0].y;
        var tempdx = ele_list[0].dx;
        var distance = window.innerWidth - ele_list[0].x - 5 - 10 - 10; // - padding - paddlewidth - radius
        while(distance > 0){
            if(tempy + tempdy > window.innerHeight - 10 || tempy + tempdy < 10){
                tempdy = -tempdy;
            }
            tempy += tempdy;
            distance -= tempdx;
        }
        tempy = tempy - 37;
        
        if(ele_list[2].y == tempy){
            ele_list[2].dy = 0;
        }else if(ele_list[2].y < tempy){
            ele_list[2].dy = 2;
        }else if(ele_list[2].y > tempy){
            ele_list[2].dy = -2;
        }

    }
    ele_list[2].y += ele_list[2].dy;
}