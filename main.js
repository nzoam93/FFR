document.addEventListener("DOMContentLoaded", () => {
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
    document.getElementById("game-container").style.left="300px"
})
