export class Map {
    constructor(context) {
        this.m = 30;
        this.n = 7;

        this.matrix = this.createMatrix(this.m, this.n);

        console.log(this.matrix);

        this.size = 30;
        this.color = '#26cc1c';
        this.context = context;
    }

    draw() {
        for (let i = 0; i <= this.matrix.length - 1; i++) {
            for (let j = 0; j <= this.matrix[i].length - 1; j++) {
                if (this.matrix[i][j] === 1) {
                    this.drawRect(i * this.size, j * this.size, this.size, this.size);
                }
            }
        }
    }

    drawRect(x, y, w, h) {
        let borderWidth = 1;
        this.context.strokeRect(x, y, w, h);
        this.context.fillStyle = this.color;
        this.context.rect(x, y, w - borderWidth, h - borderWidth);
        this.context.fill();
    }

    createMatrix(m, n) {
        return Array.from({
            length: m
        }, () => new Array(n).fill(this.random(1, 2)));
    }

    random(min, max) {
        return parseInt(Math.random() * (max - min) + min);
    }

    ballCollision(x, y, ball) {
        let i = parseInt(x / this.size);
        let j = parseInt(y / this.size);

        if (this.matrix[i][j] === 1 || this.matrix[i][j + 1] === 1){
            this.matrix[i][j] = 0;
            this.matrix[i][j + 1] = 0;

            ball.step_y *= -1;
            ball.step_x *= -1;
        }

        this.draw();
    }
}
