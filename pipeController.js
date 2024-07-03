class PipeController{
    constructor(gap, noOfPipes, pipeWidth, color){
        this.gap = gap;
        this.noOfPipes = noOfPipes;
        this.pipeWidth = pipeWidth;
        this.pipeHeight = 600;  // keep it atleast more than canvas height
        this.pipeColor = color;

        this.pipeX = 0;
        this.pipeY = 0;

        this.pipeArray = [];
        for (let i = 0; i < this.noOfPipes; i++) {
            this.pipeX = (canvas.width+500)+(this.gap*i);
            this.pipeY = randomBetween(100, canvas.height-100)
            this.pipe = new Pipe(this.pipeX, this.pipeY, this.pipeWidth, this.pipeHeight, this.pipeColor);
            this.pipeArray.push(this.pipe);
        }

        console.log(this.pipeArray);
    }

    resetPipes(){
        this.pipeArray = [];
        for (let i = 0; i < this.noOfPipes; i++) {
            this.pipeX = (canvas.width+500)+(this.gap*i);
            this.pipeY = randomBetween(100, canvas.height-100)
            this.pipe = new Pipe(this.pipeX, this.pipeY, this.pipeWidth, this.pipeHeight, this.pipeColor);
            this.pipeArray.push(this.pipe);
        }

        console.log(this.pipeArray);
    }

    update(){
        if(bird.gameOver){
            return;
        }

        this.pipeArray.forEach((pipe) => {
            pipe.update();

            if(pipe.x < -50){
                pipe.x = (this.gap*(this.noOfPipes))-50;
                pipe.y = randomBetween(100, canvas.height-100);
                pipe.passed = false;
            }
        })
    }

    draw(ctx){
        this.pipeArray.forEach((pipe) => {
            pipe.draw(ctx);
        })
    }
}