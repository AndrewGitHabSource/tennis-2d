import {Ball} from './ball.js';
import {Controll} from './controll.js';
import {Player} from './player.js';
import {Map} from './map.js';

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
        this.ball = new Ball(this.width / 2 - size, this.height - size);
        this.player = new Player((this.width / 2) - size, this.height - size, this.context);
        this.map = new Map(this.context);
        let controll = new Controll(this.updateCallback, this);

        controll.timer();
    }

    updateCallback(self) {
        self.context.clearRect(0, 0, self.width, self.height);
        self.ball.move(self.context);
        self.ball.draw(self.context, '#26cc1c');
        self.ball.playerCollision(self.player.x, self.player.y, self.widthPlayer);
        self.player.draw(this.context);
        self.drawBorder();
        self.map.ballCollision(self.ball.x, self.ball.y, self.ball);
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
