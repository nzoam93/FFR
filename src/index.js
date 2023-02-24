import Game from "./game.js";

    const canvas = document.getElementById("game");
    canvas.width = 500;
    canvas.height = 550;
    const canvasBackground = new Image();
    canvasBackground.src = './imgs/background.png';
    const ctx = canvas.getContext("2d");


    const currentGame = new Game(canvas, ctx, canvasBackground);

    const playButton = document.getElementById("playButton");
    playButton.addEventListener("click", ()=>{
        //starts the game
        currentGame.startGame();
    })

    const pauseButton = document.getElementById("pauseButton");
    pauseButton.addEventListener("click", ()=>{
        //pauses the game
        currentGame.pauseGame();
    })


    // const moveObject = (object, xStep, yStep) => {
    //     let div = document.getElementById(object);
    //     let rect = div.getBoundingClientRect();
    //     let x = rect.left;
    //     let y = rect.top;
    //     let newX = x + xStep;
    //     let newY = y + yStep;
    //     document.getElementById(object).style.left=newX+"px";
    //     document.getElementById(object).style.top=newY+"px";
    //     document.getElementById(object).style.top="2px";

    //     console.log(div.style.top)
    // }

    // const constantMovement = () => {
    //     moveObject("top-arrow", 10, 10)
    // }

    // let timedLoop = setInterval(constantMovement, 1000)
    // let startButton = document.getElementById("start-button")
    // startButton.style.left="10px"
    // console.log(startButton.style.left)
