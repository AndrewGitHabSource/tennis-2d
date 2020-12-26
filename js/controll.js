export class Controll {
    constructor(updateCallback, params = null) {
        this.lastTime = 0;
        this.milliseconds = 40;
        this.updateCallback = updateCallback;
        this.params = params;
    }

    timer(timestamp) {
        let requestAnimationId = requestAnimationFrame((timestamp) => { this.timer(timestamp) });

        if (timestamp >= this.lastTime + this.milliseconds) {
            this.updateCallback(this.params);

            this.lastTime = timestamp;
        }
    }
}
