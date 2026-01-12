let userscore = 0;
let computerscore = 0;
const choices = document.querySelectorAll('.choices');
const usernum = document.querySelector('.user');
const compnum = document.querySelector('.comp');
const winSound = document.getElementById('win-sound');
const looseSound = document.getElementById('loose-sound');
const drawSound = document.getElementById('draw-sound');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userchoice = choice.id;
        playgame(userchoice);
    });
});


let getcompchoice = () => {
    const opt = ['rock', 'paper', 'scissors'];
    const randomindex = Math.floor(Math.random() * 3);
    return opt[randomindex];
}
const move = document.querySelector('.move');

const drawgame = () => {
    move.innerText="It's a draw!";
    move.style.backgroundColor = "yellow";
    move.style.color = "black";
    move.style.fontFamily = "fantasy";
    drawSound.currentTime = 0;
    drawSound.play();
    setTimeout(() => {
        drawSound.pause();
        drawSound.src = drawSound.src;
    }, 1000);
}
let userchoice;

const showwinner = (userwins, userchoice, compchoice) => {
    if(userwins){
    move.innerText= `Congratulations! Your ${userchoice} beats Computer's ${compchoice}`;
    move.style.backgroundColor = "green";
    move.style.color = "black";
    move.style.fontFamily = "fantasy";
    move.style.fontweight = "bold";
    userscore++;
    usernum.innerText = userscore;
    winSound.currentTime = 0;
    winSound.play();
    setTimeout(() => {
        winSound.pause();
        winSound.src = winSound.src;
    }, 1000);
    }
    else{
    move.innerText= `Computer wins! Your ${userchoice} loses to Computer's ${compchoice}`;
    move.style.backgroundColor = "red";
    move.style.color = "black";
    move.style.alignItems = "center";
    move.style.fontFamily = "fantasy";
    computerscore++;
    compnum.innerText = computerscore;
    looseSound.currentTime = 0;
    looseSound.play();
    setTimeout(() => {
        looseSound.pause();
        looseSound.src = looseSound.src;
    }, 2000);
    }
}

const playgame = (userchoice) => {
    console.log(`User choice: ${userchoice}`);
    const compchoice = getcompchoice();
    console.log(`Computer choice: ${compchoice}`);  

if (userchoice === compchoice) {
    drawgame();
}
else{
    let userwins;
    if(userchoice === "rock"){
        userwins = compchoice === "paper" ? false : true;
    }
    else if(userchoice === "paper"){
        userwins = compchoice === "scissors" ? false : true;
    }   
    else{
        userwins = compchoice === "rock" ? false : true;
}
    showwinner(userwins, userchoice, compchoice); 
}
};






