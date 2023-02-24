const leftArrow = new Image();
leftArrow.src = "./imgs/leftArrow.png"

export default class Arrow {
    colors = [
        "red",
        "orange",
        "green",
        "blue",
        "white",
        "turquoise"
    ];

    constructor(xPos, yPos, xVel, yVel, width, height, ctx){
        this.xPos = xPos;
        this.yPos = yPos;
        this.xVel = xVel;
        this.yVel = yVel;
        this.width = width;
        this.height = height;
        this.ctx = ctx;

        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.canvas = document.getElementById("game");
    }

    draw(ctx){
        // ctx.fillStyle = this.color;
        this.yPos += this.yVel;
        this.ctx.drawImage(leftArrow, this.xPos, this.yPos, this.width, this.height)
    }
}
