class UI {
    constructor(score) {
        this.score = score;
    }

    showScore(ctx){
        ctx.fillStyle = "black";
        ctx.font = "45px sans-serif";
        ctx.fillText(this.score, 5, 45);
    }

    showGameOver(ctx){
        if(bird.gameOver){
            ctx.fillStyle = "black";
            ctx.font = "bold 45px sans-serif";
            ctx.fillText("Game Over!", 70, canvas.height/2 - 100);

            ctx.fillStyle = "gray";
            ctx.font = "25px sans-serif";
            ctx.fillText("Press jump to try again...", 70, canvas.height/2);
        }
    }

    draw(ctx){
        this.showScore(ctx);
        this.showGameOver(ctx);
    }
}