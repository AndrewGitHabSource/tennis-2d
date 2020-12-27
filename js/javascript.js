import {Ball} from './ball.js';
import {Controll} from './controll.js';
import {Player} from './player.js';

class Starter {
    constructor() {
        let canvas = document.getElementById("canvas");
        this.context = canvas.getContext("2d");
        this.width = 900;
        this.height = 500;
        this.widthPlayer = 100;
    }

    start() {
        let size = 15;
        this.ball = new Ball(this.width / 2, this.height - size);
        this.player = new Player((this.width / 2) - size, this.height - size);
        let controll = new Controll(this.updateCallback, this);

        controll.timer();
    }

    updateCallback(self) {
        self.context.clearRect(0, 0, self.width, self.height);
        self.drawBorder();
        self.ball.move();
        self.ball.draw(self.context, '#26cc1c');
        self.player.draw(self.context);
        self.ball.playerCollision(self.player.x, self.player.y, self.widthPlayer);
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
