import {Ball} from './ball.js';

class Starter {
    constructor() {
        let canvas = document.getElementById("canvas");
        this.context = canvas.getContext("2d");
        this.width = 900;
        this.height = 500;
    }

    start() {
        let size = 15;
        let ball = new Ball(this.width / 2, this.height - size);
        this.drawBorder();
        ball.draw(this.context, '#26cc1c');
    }

    drawBorder() {
        this.line(0, 0, 0, this.height);
        this.line(0, 0, this.width, 0);
        this.line(this.width, 0, this.width, this.height);
        this.line(0, this.height, this.width, this.height);
    }

    line(x0, y0, x, y) {
        this.context.beginPath();
        this.context.moveTo(x0, y0);
        this.context.lineTo(x, y);
        this.context.stroke();
    }
}

let starter = new Starter();
starter.start();
