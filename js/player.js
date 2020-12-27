import {gameObject} from './gameObject.js';

export class Player extends gameObject {
    constructor(x, y, context) {
        super(x, y);

        this.width = 100;
        this.height = 15;
        this.context = context;
        this.color = '#26cc1c';

        this.addEvents();
    }

    draw() {
        this.fillStyle = this.color;
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.fill();
    }

    addEvents() {
        window.addEventListener('mousemove', (event) => {
            let x = event.offsetX;
            let y = event.offsetY;
            let borderWidth = 900;
            let end = borderWidth - 2;

            if (x < borderWidth && x > 0){
                this.context.clearRect(1, this.y - 1, end, this.height);
                this.setPosition(x, this.y);
                this.draw();
            }
        });
    }
}
