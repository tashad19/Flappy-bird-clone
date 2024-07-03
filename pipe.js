class Pipe {
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

        this.speed = 2;
        this.pipeEntranceGap = 150;

        this.passed = false;
    }

    checkPassed(){
        if(!this.passed && bird.x > this.x + this.width/2){
            ui.score += 1;
            this.passed = true;
        }
    }

    update(){
        this.x -= this.speed;

        this.checkPassed();
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        // Upper pipe
        ctx.rect(
            this.x-this.width/2,
            this.y-this.height-this.pipeEntranceGap/2,
            this.width,
            this.height
        );
        ctx.fill();
        // Lower pipe
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2,
            this.y+this.pipeEntranceGap/2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}