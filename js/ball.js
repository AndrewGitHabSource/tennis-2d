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
        if (this.x <= this.size || this.x >= width) {
            return 'left';
        } else if (this.y <= this.size) {
            return 'top';
        } else if (this.y > height && this.y < height + 30) {
            return 'stop';
        } else {
            return false;
        }
    }

    playerCollision(posX, posY, width){
        if (this.x >= posX && this.x <= posX + width && this.y === posY){
            this.step_y *= -1;
            let y = this.y + this.step_y;
            this.setPosition(this.x, y);
        }
    }

    move() {
        switch (this.borderCollision(900, 500)) {
            case 'left':
                this.step_x *= -1;
                break;
            case 'top':
                this.step_y *= -1;
                break;
            case 'stop':
                console.log('Game over');
                this.step_y = 0;
                break;
        }

        let x = this.x + this.step_x;
        let y = this.y + this.step_y;

        this.setPosition(x, y);
    }
}
