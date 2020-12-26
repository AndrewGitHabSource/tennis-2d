import {gameObject} from './gameObject.js';

export class Ball extends gameObject {
    constructor(x, y) {
        super(x, y);
        this.size = 15;
        this.step_x = -15;
        this.step_y = -15;
    }

    draw(context, color) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        context.closePath();
        context.fillStyle = color;
        context.fill();
    }

    borderCollision(width, height) {
        if (this.x <= 0 || this.x >= width) {
            return 'left';
        } else if (this.y <= 0) {
            return 'top';
        } else {
            return false;
        }
    }

    move() {
        switch (this.borderCollision()) {
            case 'left': this.step_x *= -1; break;
            case 'top': this.step_y *= -1; break;
        }

        let x = this.x + this.step_x;
        let y = this.y + this.step_y;

        this.set(x, y);
    }
}
