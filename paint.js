const canvas = document.getElementById("canvas");

let canvasWidth = 883;
let canvasHeight = 550;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

const initialColor = "#f1f1f1";

let context = canvas.getContext("2d");
context.fillStyle = initialColor;
context.fillRect(0, 0, canvas.width, canvas.height);

function alignMobile() {
    canvas.width = 370;
    canvas.height = 500;
    context.fillStyle = initialColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

}

function alignNormal() {
    canvas.width = 883;
    canvas.height = 550;
    context.fillStyle = initialColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

//base values that can change
let drawColor = "black";
let drawWidth = 2;
let tool = "pen";

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
    //context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    context.lineTo(getX(event), getY(event));

    event.preventDefault();
}

function draw(event) {
    if (tool === "pen") {
        if (isDrawing == true) {
            //context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
            context.lineTo(getX(event), getY(event));
            context.strokeStyle = drawColor;
            context.lineWidth = drawWidth;
            context.lineCap = "round";
            context.linJoin = "round";
            context.miterLimit = 1; //prevent ugly spikes. works by limiting sharp corners or smth
            context.stroke();
        }
    }

    if (tool === "eraser") {
        if (isDrawing == true) {
            //context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
            context.lineTo(getX(event), getY(event));
            context.strokeStyle = initialColor;
            context.lineWidth = drawWidth;
            context.lineCap = "round";
            context.linJoin = "round";
            context.miterLimit = 2; //prevent ugly spikes. works by limiting sharp corners or smth
            context.stroke();
        }
    }


    event.preventDefault();
}


function getX(event) {
    if (event.pageX == undefined) {
        return event.targetTouches[0].pageX - canvas.offsetLeft
    }
    else {
        return event.pageX - canvas.offsetLeft
    }
}


function getY(event) {
    if (event.pageY == undefined) {
        return event.targetTouches[0].pageY - canvas.offsetTop
    }
    else {
        return event.pageY - canvas.offsetTop
    }
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

function penTool() {
    let pen = document.getElementById("penButton");
    let eraser = document.getElementById("eraserButton");

    tool = "pen"

    pen.style.backgroundColor = "#011632";
    pen.style.color = "white";

    eraser.style.backgroundColor = "#f1f1f1";
    eraser.style.color = "black";

}

function eraserTool() {
    let eraser = document.getElementById("eraserButton");
    let pen = document.getElementById("penButton");

    tool = "eraser";

    pen.style.backgroundColor = "#f1f1f1";
    pen.style.color = "black";

    eraser.style.backgroundColor = "#011632";
    eraser.style.color = "white";

}




function download() {
    let download = document.getElementById("download");
    let img = canvas.toDataURL("image/png")
    download.setAttribute("href", img);
}