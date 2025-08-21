let initialR;
let initialG;
let initialB;

let guessR = 0;
let guessG = 0;
let guessB = 0;

let randomColor;

let InitialColorSet = document.getElementById("initialColor");
let guessedColor = document.getElementById("guessedColor");
let answer = document.getElementById("answer");

function setColor() {
    //set random color for rgb
    initialR = Math.floor(Math.random() * 256);
    initialG = Math.floor(Math.random() * 256);
    initialB = Math.floor(Math.random() * 256);
    return `rgb(${initialR}, ${initialG}, ${initialB})`;
}

function showColor() {
    randomColor = setColor();
    InitialColorSet.style.backgroundColor = randomColor;
    answer.innerHTML = "Your color";
}

function showGuess() {
    guessR = document.getElementById("red").value;
    guessG = document.getElementById("green").value;
    guessB = document.getElementById("blue").value;

    let chosenColor = `rgb(${guessR}, ${guessG}, ${guessB})`;
    guessedColor.style.backgroundColor = chosenColor;
}


function distance(rgb1r,rgb1g,rgb1b,rgb2r,rgb2g,rgb2b,) { //jai trouvee les math enligne. ca c pour calculer la distance
  const rDiff = rgb1r - rgb2r;
  const gDiff = rgb1g - rgb2g;
  const bDiff = rgb1b - rgb2b;
    return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
}

function evaluateGuess(){
    let dist = distance(initialR,initialG,initialB,guessR,guessG,guessB);
    const maxDist = 441.61;
    let accuracy = Math.round(Math.max(0,100 - (dist / maxDist) * 100));


    answer.innerHTML = accuracy + "% Accurate";
    console.log(accuracy);
}