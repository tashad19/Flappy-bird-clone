const canvas = document.getElementById("myCanvas");
canvas.width = 400;
canvas.height = 500;
const ctx = canvas.getContext("2d");

const bird = new Bird(150, 200, 30, 30, "red");
const pipeController = new PipeController(300, 5, 60, "green");
const ui = new UI(0);
pipeController.draw(ctx);
bird.draw(ctx);
ui.draw(ctx);

animate();

function animate() {
    if (!bird.gameOver) {
        pipeController.update();
        bird.update();
    }

    canvas.width = 400;
    canvas.height = 500;
    pipeController.draw(ctx);
    bird.draw(ctx);
    ui.draw(ctx);

    requestAnimationFrame(animate);
}