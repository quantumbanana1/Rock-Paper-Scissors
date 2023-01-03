

const winner = document.getElementsByClassName("final-outcome")[0];
const computerResult = document.getElementById("computer-result");
const humanResult = document.getElementById("human-result");
const humanCurrentOption = document.getElementsByClassName("human-current-option")[0];
const computerCurrentOption = document.getElementsByClassName("computer-current-option")[0];
const round = document.getElementsByClassName("output-round")[0];
const Bscissors = document.getElementById("scissor");
const Bpaper = document.getElementById("paper");
const Brock = document.getElementById("rock");




let humanWonRounds = 0;
let computerWonRounds = 0;

function deleteChild(humanCurrentOption, computerCurrentOption) {

    var child = humanCurrentOption.lastElementChild;
    while (child) {
        humanCurrentOption.removeChild(child);
        child = humanCurrentOption.lastElementChild;
    }

    child = computerCurrentOption.lastElementChild;
    while (child) {
        computerCurrentOption.removeChild(child);
        child = computerCurrentOption.lastElementChild;
    }
}

const createNameImg = (name) => {
    let string;
    let count = 0
    for (let i = 0; i < name.length; i++) {
        if(isLetter(name[i])) {
            count += 1
            continue
        } else {
            string = name.slice(0, count)
            return string

        }

    }
}

function image(humanChoice, computerChoice)
{   const tail = "Img"
    const readyImages = []
    let path = "../images/"
    const files = ["paper.png", "rock.png", "scissor.png"]

    for (let i = 0; i < files.length; i++) {
        const preName = createNameImg(files[i]);
        window[preName+tail] = document.createElement("img")
        window[preName+tail].src = path + files[i]
        window[preName+tail].value = preName
        window[preName+tail].setAttribute("height", "70");
        window[preName+tail].setAttribute("width", "70");
        readyImages.push(window[preName+tail]);

    }

    return readyImages

}

const imagesForCurrentOpt = image();


const generateComputerChoice = () => {
    const choices = ["scissor", "rock", "paper"]
    const integer = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    let x = choices[integer]
    return x
};

const declareWinner = (humanRounds, computerRounds) => {
    let message;


    if (humanRounds === 5) {
        message = "The winner is Human!"
    } else if (computerRounds === 5) {
        message = "The winner is Computer"
    } else {
        message=""

    }


    return winner.innerText = message


};



function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}


const PlayTheGame = (humanChoice, computerChoice, images) => {
    let message;
    if (humanChoice === computerChoice) {message = "It's a tie!"}
    else if (humanChoice==="scissor" && computerChoice==="paper") {
        message = "Human won this round!";
        humanWonRounds += 1;
    } else if (humanChoice==="paper" && computerChoice==="scissor") {
        message = "Computer won this round!";
        computerWonRounds += 1;
    } else if (humanChoice==="rock" && computerChoice==="scissor") {
        message = "Human won this round!";
        humanWonRounds += 1;
    } else if (humanChoice==="scissor" && computerChoice==="rock") {
        message = "Computer won this round!";
        computerWonRounds += 1;

    } else if (humanChoice==="rock" && computerChoice==="paper") {
        message = "Computer won this round!";
        humanWonRounds += 1;

    } else  {
        message = "Human won this round!";
        computerWonRounds += 1;

    }

    declareWinner(humanWonRounds, computerWonRounds);
    updateDOM(humanWonRounds, computerWonRounds,humanChoice, computerChoice, message, images);



};

function getRightImg (currentOpt, images) {
    let f;

    for(let i = 0; i< images.length; i++) {
        if (images[i].value===currentOpt) {
            f = images[i]

        }

    }
    return f
}

const updateDOM =(humanRounds, ComputerRounds,humanChoice, computerChoice, message, images) => {
    let humanImgOpt = getRightImg(humanChoice,images);
    let computerImgOpt = getRightImg(computerChoice,images);
    if (humanImgOpt.value===computerImgOpt.value) {
        computerImgOpt=humanImgOpt.cloneNode(true)
    }

    deleteChild(humanCurrentOption,computerCurrentOption);
    humanCurrentOption.appendChild(humanImgOpt)
    computerCurrentOption.appendChild(computerImgOpt);
    humanResult.innerText = `Human: ${humanWonRounds}`;
    computerResult.innerText = `Computer: ${computerWonRounds}`;
    round.innerText = message;




};



Bscissors.addEventListener("click", function () {PlayTheGame(this.value, generateComputerChoice(), imagesForCurrentOpt)});
Bpaper.addEventListener("click", function() {PlayTheGame(this.value, generateComputerChoice(), imagesForCurrentOpt)});
Brock.addEventListener("click", function() {PlayTheGame(this.value, generateComputerChoice(),imagesForCurrentOpt)});








