import Arrow from "../arrow";

export default class HappyBirthday{
    constructor(){
        this.arrows = []
        this.canvas = document.getElementById("game");
        this.createArrows()
    }

    createArrows(){
        this.arrows.push(new Arrow)
    }
}
