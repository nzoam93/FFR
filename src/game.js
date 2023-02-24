import Arrow from "./arrow.js";

const leftArrow = new Image();
leftArrow.src = "./imgs/leftArrow.png";

const upArrow = new Image();
upArrow.src = "./imgs/upArrow.png";

const downArrow = new Image();
downArrow.src = "./imgs/downArrow.png";

const rightArrow = new Image();
rightArrow.src = "./imgs/rightArrow.png";

export default class Game{
    constructor(canvas, ctx, canvasBackground){
        this.canvas = canvas;
        this.ctx = ctx;
        this.canvasBackground = canvasBackground;
        this.gameSpeed = 60; //determines how many times a second the game runs
        this.paused = false;
        this.timedLoop; //used by game loop
        this.leftArrow = new Arrow(this.canvas.width * 1/10,0,0,3, this.canvas.width * 1/8, this.canvas.width * 1/8, this.ctx);
        // this.upArrow = new Arrow(this.canvas.width * 1/10 + this.canvas.width * 1/8, 0,0,3, this.canvas.width * 1/8, this.canvas.width * 1/8, this.ctx);
        // this.downArrow = new Arrow(this.canvas.width * 1/10,0,0,3, this.canvas.width * 1/8, this.canvas.width * 1/8, this.ctx);
        // this.rightArrow = new Arrow(this.canvas.width * 1/10,0,0,3, this.canvas.width * 1/8, this.canvas.width * 1/8, this.ctx);

    }

    startGame(){
        this.timedLoop = setInterval(this.gameLoop.bind(this), 1000 / this.gameSpeed);
    }

    //stopping the loop with the pause button
    pauseGame(){
        let pauseButton = document.getElementById("pauseButton");
        if (!this.paused){
            this.paused = true;
            clearInterval(this.timedLoop);
            pauseButton.innerHTML = "Resume";
        }
        else {
            this.paused = false;
            this.timedLoop = setInterval(this.gameLoop.bind(this), 1000 / this.gameSpeed);
            pauseButton.innerHTML = "Pause";
        }
    }

    gameLoop(){
        //clear the screen and draws the background
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.canvasBackground,0,0);

        //draw the arrows on the bottom
        let arrowWidth = this.canvas.width * 1/8
        this.ctx.drawImage(leftArrow, this.canvas.width * 1/10, this.canvas.height - arrowWidth, arrowWidth - 5, arrowWidth)
        this.ctx.drawImage(upArrow, this.canvas.width * 2/10 + arrowWidth, this.canvas.height - arrowWidth - 5, arrowWidth, arrowWidth)
        this.ctx.drawImage(downArrow, this.canvas.width * 3/10 + 2 * arrowWidth, this.canvas.height - arrowWidth - 5, arrowWidth, arrowWidth)
        this.ctx.drawImage(rightArrow, this.canvas.width * 4/10 + 3 * arrowWidth, this.canvas.height - arrowWidth - 5, arrowWidth, arrowWidth)

        //move the arrows
        this.leftArrow.draw(this.ctx);
    }
}
