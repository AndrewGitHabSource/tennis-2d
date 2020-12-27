import {gameObject} from './gameObject.js';

export class Player extends gameObject {
    constructor(x, y) {
        super(x, y);

        this.width = 100;
        this.height = 15;

        this.addEvents();
    }

    draw(context) {
        context.rect(this.x, this.y, this.width, this.height);
        context.fill();
    }

    addEvents() {
        window.addEventListener('mousemove', (event) => {
            let x = event.offsetX;
            let y = event.offsetY;
            let borderWidth = 900;

            if (x < borderWidth && x > 0){
                this.setPosition(x, this.y);
            }
        });
    }
}
