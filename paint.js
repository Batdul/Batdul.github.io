const canvas = document.getElementById("canvas");
canvas.width = 883;
canvas.height = 550;

const initialColor = "#f1f1f1"

let context = canvas.getContext("2d");
context.fillStyle = initialColor;
context.fillRect(0, 0, canvas.width, canvas.height);

//base values that can change
let drawColor = "black";
let drawWidth = 2;
let drawOpacity = 1;

let drawHistory = [];
let index = -1;

let isDrawing = false;

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);

canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);


function start(event) {
    isDrawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);

    event.preventDefault();
}

function draw(event) {
    if (isDrawing == true) {
        context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        context.strokeStyle = drawColor;
        context.lineWidth = drawWidth;
        context.globalAlpha = drawOpacity;
        context.lineCap = "round";
        context.linJoin = "round";
        context.miterLimit = 2; //prevent ugly spikes. works by limiting sharp corners or smth
        context.stroke();
    }

    event.preventDefault();

}

function stop(event) {
    if (isDrawing == true) {
        context.stroke();
        context.closePath();
        isDrawing = false;
    }

    event.preventDefault();
    if (event.type != 'mouseout') {
        drawHistory.push(context.getImageData(0, 0, canvas.width, canvas.height));
        index += 1;
    }
}

function clearCanvas() {
    context.fillStyle = initialColor;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawHistory = [];
    index = -1;
}

function colorChange() {
    let color = document.getElementById("chosenColor").value;
    drawColor = color; //je sais que jaurait pu mettre ca direct dans html mais je prefere ca
}


function undoLast() {
    if (index <= 0) {
        clearCanvas();
    } else {
        index -= 1;
        drawHistory.pop();
        context.putImageData(drawHistory[index], 0, 0);
    }
}

function opacityChange() {
    let opacity = document.getElementById("chosenOpacity").value;

    drawOpacity = opacity/100;

}