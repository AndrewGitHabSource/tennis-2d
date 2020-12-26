export class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 15;
    }

    draw(context, color) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        context.closePath();
        context.fillStyle = color;
        context.fill();
    }
}
