let canvas = document.getElementById("avatarCanvas");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let imageType = "shirt";

//add events for clothing on the right

canvas.width = 883;
canvas.height = 550;

let isBackgroundImage = false;//to later make ditinction from background color and background image
let background = "#f1f1f1";

let context = canvas.getContext("2d");
context.fillStyle = background;
context.fillRect(0, 0, canvas.width, canvas.height);

//initial avatar stats
let hair;
let shirt;
let pant;

//it just runs smoother when i add these booleans to the code
let hasHair = false;
let hasShirt = false;
let hasPant = false;

let gender = document.getElementById("fAvatar");

let isFemale = true;//make distinction from male and female clothes

//coordinates to use for all avatar images
context.drawImage(gender, 216.5, 30, 480 - 30, canvas.height - 30);





function summer() {
    isBackgroundImage = true;
    let summer = document.getElementById("summerCore");
    let winter = document.getElementById("winterCore");
    let night = document.getElementById("nightCore");

    background = document.getElementById("summerImg");

    summer.style.backgroundColor = "#011632";
    summer.style.color = "white";

    winter.style.backgroundColor = "#f1f1f1";
    winter.style.color = "black";

    night.style.backgroundColor = "#f1f1f1";
    night.style.color = "black";

    drawAvatar();
}

function winter() {
    isBackgroundImage = true;
    let summer = document.getElementById("summerCore");
    let winter = document.getElementById("winterCore");
    let night = document.getElementById("nightCore");

    background = document.getElementById("winterImg");

    summer.style.backgroundColor = "#f1f1f1";
    summer.style.color = "black";

    winter.style.backgroundColor = "#011632";
    winter.style.color = "white";

    night.style.backgroundColor = "#f1f1f1";
    night.style.color = "black";

    drawAvatar();
}

function night() {
    isBackgroundImage = true;
    let summer = document.getElementById("summerCore");
    let winter = document.getElementById("winterCore");
    let night = document.getElementById("nightCore");

    background = document.getElementById("nightImg");

    summer.style.backgroundColor = "#f1f1f1";
    summer.style.color = "black";

    winter.style.backgroundColor = "#f1f1f1";
    winter.style.color ="black" ;

    night.style.backgroundColor = "#011632";
    night.style.color = "white";

    drawAvatar();
}

function mattColor() {
    isBackgroundImage = false;
    let summer = document.getElementById("summerCore");
    let winter = document.getElementById("winterCore");
    let night = document.getElementById("nightCore");

    background = document.getElementById("backgroundColor").value;

    summer.style.backgroundColor = "#f1f1f1";
    summer.style.color = "black";

    winter.style.backgroundColor = "#f1f1f1";
    winter.style.color ="black" ;

    night.style.backgroundColor = "#f1f1f1";
    night.style.color = "black";

    drawAvatar();
}

function setgenderMale() {
    gender = document.getElementById("mAvatar")
    isFemale = false;
    hasHair = false;
    hasPant = false;
    hasShirt = false;

    pant = "";
    hair = "";
    shirt = "";

    if (imageType === "shirt") {
        if (isFemale) {
            image1.src = 'fShirt1.png';
            image1.style.objectPosition = "-5px -10px";

            image2.src = 'fShirt2.png';
            image2.style.objectPosition = "-5px -10px";

        } else {
            image1.src = 'mShirt1.png';
            image1.style.objectPosition = "10px -15px";

            image2.src = 'mShirt2.png';
            image2.style.objectPosition = "10px -15px";

        }
    } else if (imageType === "pant") {
        if (isFemale) {
            image1.src = 'fPant1.png';
            image1.style.objectPosition = "10px -80px";

            image2.src = 'fPant2.png';
            image2.style.objectPosition = "10px -80px";

        } else {
            image1.src = 'mPant1.png';
            image1.style.objectPosition = "5px -100px";

            image2.src = 'mPant2.png';
            image2.style.objectPosition = "5px -100px";

        }
    } else if (imageType === "hair") {
        if (isFemale) {
            image1.src = 'fHair1.png';
            image1.style.objectPosition = "0px 65px";

            image2.src = 'fHair2.png';
            image2.style.objectPosition = "0px 65px";

        } else {
            image1.src = 'mHair1.png';
            image1.style.objectPosition = "0px 65px";

            image2.src = 'mHair2.png';
            image2.style.objectPosition = "0px 65px";

        }
    }
    girlButton.style.backgroundColor = "pink";
    girlButton.style.color = "black";

    boyButton.style.backgroundColor = "darkblue";
    boyButton.style.color = "white";

    drawAvatar();


}
function setgenderFemale() {
    gender = document.getElementById("fAvatar");

    girlButton = document.getElementById("girlButton");
    boyButton = document.getElementById("boyButton");

    isFemale = true;
    hasHair = false;
    hasPant = false;
    hasShirt = false;

    pant = "";
    hair = "";
    shirt = "";
    if (imageType === "shirt") {
        if (isFemale) {
            image1.src = 'fShirt1.png';
            image1.style.objectPosition = "-5px -10px";

            image2.src = 'fShirt2.png';
            image2.style.objectPosition = "-5px -10px";

        } else {
            image1.src = 'mShirt1.png';
            image1.style.objectPosition = "10px -15px";

            image2.src = 'mShirt2.png';
            image2.style.objectPosition = "10px -15px";

        }
    } else if (imageType === "pant") {
        if (isFemale) {
            image1.src = 'fPant1.png';
            image1.style.objectPosition = "10px -80px";

            image2.src = 'fPant2.png';
            image2.style.objectPosition = "10px -80px";

        } else {
            image1.src = 'mPant1.png';
            image1.style.objectPosition = "5px -100px";

            image2.src = 'mPant2.png';
            image2.style.objectPosition = "5px -100px";

        }
    } else if (imageType === "hair") {
        if (isFemale) {
            image1.src = 'fHair1.png';
            image1.style.objectPosition = "0px 65px";

            image2.src = 'fHair2.png';
            image2.style.objectPosition = "0px 65px";

        } else {
            image1.src = 'mHair1.png';
            image1.style.objectPosition = "0px 65px";

            image2.src = 'mHair2.png';
            image2.style.objectPosition = "0px 65px";

        }
    }

    girlButton.style.backgroundColor = "rgb(135, 66, 78)";
    girlButton.style.color = "white";

    boyButton.style.backgroundColor = "skyblue";
    boyButton.style.color = "black";

    drawAvatar();


}


function showShirts() {
    let shirtButton = document.getElementById("shirtButton");
    let hairButton = document.getElementById("hairButton");
    let pantButton = document.getElementById("pantButton");

    imageType = "shirt";
    if (isFemale) {
        image1.src = 'fShirt1.png';
        image1.alt = 'female shirt 1';
        image1.style.objectPosition = "-5px -10px";

        image2.src = 'fShirt2.png';
        image2.style.objectPosition = "-5px -10px";
        image2.alt = 'female shirt 2';


    } else {
        image1.src = 'mShirt1.png';
        image1.style.objectPosition = "10px -15px";
        image1.alt = 'male shirt 1';


        image2.src = 'mShirt2.png';
        image2.style.objectPosition = "10px -15px";
        image2.alt = 'male shirt 2';

    }

    shirtButton.style.backgroundColor = "#011632";
    shirtButton.style.color = "white";

    hairButton.style.backgroundColor = "#f1f1f1";
    hairButton.style.color = "black";

    pantButton.style.backgroundColor = "#f1f1f1";
    pantButton.style.color = "black";
}


function showPants() {
    let shirtButton = document.getElementById("shirtButton");
    let hairButton = document.getElementById("hairButton");
    let pantButton = document.getElementById("pantButton");


    imageType = "pant";
    if (isFemale) {
        image1.src = 'fPant1.png';
        image1.alt = 'female pant 1';
        image1.style.objectPosition = "10px -80px";

        image2.src = 'fPant2.png';
        image2.alt = 'female pant 2';
        image2.style.objectPosition = "10px -80px";

    } else {
        image1.src = 'mPant1.png';
        image1.alt = 'male pant 1';
        image1.style.objectPosition = "5px -100px";

        image2.src = 'mPant2.png';
        image2.alt = 'male pant 2';
        image2.style.objectPosition = "5px -100px";

    }

    shirtButton.style.backgroundColor = "#f1f1f1";
    shirtButton.style.color = "black";

    hairButton.style.backgroundColor = "#f1f1f1";
    hairButton.style.color = "black";

    pantButton.style.backgroundColor = "#011632";
    pantButton.style.color = "white";
    white
}


function showHair() {
    let shirtButton = document.getElementById("shirtButton");
    let hairButton = document.getElementById("hairButton");
    let pantButton = document.getElementById("pantButton");


    imageType = "hair";
    if (isFemale) {
        image1.src = 'fHair1.png';
        image1.alt = 'female hair 1';
        image1.style.objectPosition = "0px 65px";

        image2.src = 'fHair2.png';
        image2.alt = 'female hair 2';
        image2.style.objectPosition = "0px 65px";

    } else {
        image1.src = 'mHair1.png';
        image1.alt = 'male shirt 1';
        image1.style.objectPosition = "0px 65px";

        image2.src = 'mHair2.png';
        image2.alt = 'male shirt 2';
        image2.style.objectPosition = "0px 65px";

    }

    shirtButton.style.backgroundColor = "#f1f1f1";
    shirtButton.style.color = "black";

    hairButton.style.backgroundColor = "#011632";
    hairButton.style.color = "white";

    pantButton.style.backgroundColor = "#f1f1f1";
    pantButton.style.color = "black";
}


image1.addEventListener("click", changeAvatar1);
image2.addEventListener("click", changeAvatar2);

function changeAvatar1() {
    if (imageType === "shirt") {
        hasShirt = true;
        if (isFemale) {
            shirt = document.getElementById("fShirt1");
        } else {
            shirt = document.getElementById("mShirt1");

        }
    } else if (imageType === "pant") {
        hasPant = true;

        if (isFemale) {
            pant = document.getElementById("fPant1");

        } else {
            pant = document.getElementById("mPant1");

        }
    } else if (imageType === "hair") {
        hasHair = true;

        if (isFemale) {
            hair = document.getElementById("fHair1");

        } else {
            hair = document.getElementById("mHair1");

        }
    }
    drawAvatar();
}

function changeAvatar2() {
    if (imageType === "shirt") {
        hasShirt = true;
        if (isFemale) {
            shirt = document.getElementById("fShirt2");
        } else {
            shirt = document.getElementById("mShirt2");

        }
    } else if (imageType === "pant") {
        hasPant = true;
        if (isFemale) {
            pant = document.getElementById("fPant2");

        } else {
            pant = document.getElementById("mPant2");

        }
    } else if (imageType === "hair") {
        hasHair = true;
        if (isFemale) {
            hair = document.getElementById("fHair2");

        } else {
            hair = document.getElementById("mHair2");

        }
    }
    drawAvatar();
}



function drawAvatar() {
    if (isBackgroundImage) {
        context.drawImage(background, 0, 0, canvas.width, canvas.height);


    } else {
        context.fillStyle = background;
        context.fillRect(0, 0, canvas.width, canvas.height);

    }

    context.drawImage(gender, 216.5, 30, 480 - 30, canvas.height - 30);

    if (hasHair) {
        context.drawImage(hair, 216.5, 30, 480 - 30, canvas.height - 30);
    }
    if (hasShirt) {
        context.drawImage(shirt, 216.5, 30, 480 - 30, canvas.height - 30);
    }
    if (hasPant) {
        context.drawImage(pant, 216.5, 30, 480 - 30, canvas.height - 30);
    }
}


function download() { //download name is the name u give avatar
    let enregistre = document.getElementById("download");
    let name = document.getElementById("name").value;
    if (name !== "") {
        enregistre.download = name;
    } else {
        enregistre.download = "Avatar";
    }
    let img = canvas.toDataURL("image/png")
    enregistre.setAttribute("href", img);
}