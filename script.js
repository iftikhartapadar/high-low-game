let targetNum;

targetNum = Math.floor((Math.random() * 100) + 1);
let resultDisplay = document.getElementById('result');


function checkNum() {
    let guess = parseInt(document.getElementById('number').value);
    if (guess === targetNum) {
        resultDisplay.innerHTML = "Finally!";
        resultDisplay.style.color="green";
        var audio = new Audio();
        audio.src = "right.mp3";
        audio.play();
    }
    else if (guess > targetNum) {
        resultDisplay.innerHTML = "Too High!";
        resultDisplay.style.color="blue";
        var audio = new Audio();
        audio.src = "wrong.mp3";
        audio.play();
    }

    else if (guess < targetNum) {
        resultDisplay.innerHTML = "Too Low!"
        resultDisplay.style.color="red";
        var audio = new Audio();
        audio.src = "wrong.mp3";
        audio.play();
    }
   
}
checkNum();

