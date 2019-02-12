import Mouse from "./mouse.js";
import Ball from "./ball.js";
let canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    pos = new Mouse(canvas),
    balls = [],
    mouse = new Ball(0,0,30,"green");
//drawCircle(100,100,50);

for (var i=0;i<200;i++){
    balls.push(
        new Ball(
            Math.random()*601,
            Math.random()*601
        )
    );
}


function Render() {
    window.requestAnimationFrame(Render);
    ctx.clearRect(0,0,600,600);
    // drawCircle(pos.x, pos.y, 20);
    mouse.setPos(pos.x,pos.y);
    mouse.draw(ctx);

    balls.forEach(ball=>{
        ball.think(pos);
        ball.draw(ctx);
        }
    )
}

Render();
import '../css/style.css';
