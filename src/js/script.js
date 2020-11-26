import Mouse from './mouse.js';
import Ball from './ball.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const pos = new Mouse(canvas);
const mouse = new Ball(0, 0, 30, 'green');
const balls = [];

for (let i = 0; i < 200; i++) {
    balls.push(
        new Ball(
            Math.random() * 601,
            Math.random() * 601
        )
    );
}


function Render() {
    window.requestAnimationFrame(Render);
    ctx.clearRect(0, 0, 600, 600);
    mouse.setPos(pos.x, pos.y);
    mouse.draw(ctx);

    balls.forEach(ball => {
        ball.think(pos);
        ball.draw(ctx);
    });
}

Render();
import '../css/style.css';
