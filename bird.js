class Bird {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

        this.speed = 0;   // speed on Y axis
        this.gravity = 0.1;
        this.jumpForce = 4;

        this.isJumpPressed = false;
        this.gameOver = false;

        this.#addKeyboardListeners();
    }

    applyGravity() {
        this.y += this.speed;
        this.speed += this.gravity;
    }

    #addKeyboardListeners() {
        document.onkeydown = (event) => {
            if (event.key == " " || event.key == "ArrowUp") {
                if (this.gameOver) {
                    this.resetBird();
                    ui.score = 0;
                    pipeController.resetPipes();
                } else {
                    this.isJumpPressed = true;
                }
            }
        }
    }

    jump() {
        this.speed = -this.jumpForce;
    }

    checkCollision() {
        pipeController.pipeArray.forEach((pipe) => {
            if (this.pipeCollision(pipe) || this.canvasCollision()) {
                this.gameOver = true;
            }
        })
    }

    pipeCollision(pipe) {
        return this.x + this.width / 2 > pipe.x - pipe.width / 2 &&
            this.x - this.width / 2 < pipe.x + pipe.width / 2 &&
            (
                this.y - this.height / 2 < pipe.y - pipe.pipeEntranceGap / 2 ||
                this.y + this.height / 2 > pipe.y + pipe.pipeEntranceGap / 2
            );
    }

    canvasCollision() {
        return this.y - this.height / 2 < 0 ||
            this.y + this.height / 2 > canvas.height;
    }

    resetBird() {
        this.speed = 0;
        this.y = 200;
        this.gameOver = false;
    }

    update() {
        if (this.gameOver) {
            return;
        }

        if (this.isJumpPressed) {
            this.jump();
            this.isJumpPressed = false;
        }

        this.applyGravity();
        this.checkCollision();
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.rect(
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}