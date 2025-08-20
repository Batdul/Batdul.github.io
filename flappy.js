const canvas = document.getElementById("flappyCanvas");

canvas.width = window.innerWidth;
let context = canvas.getContext("2d");

context.fillStyle = "#659cb2";
context.fillRect(0, 0, canvas.width, canvas.height);

bird = new Bird();

obs1 = new Obstacles(600);
obs2 = new Obstacles(800);
obs3 = new Obstacles(1000);

class Bird {
    constructor() {
        this.y = 0
    }
}