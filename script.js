let usr_score=0;
let comp_score=0;

const choices=document.querySelectorAll(".choice");
const msg =document.querySelector(".msg");
const userScore= document.querySelector("#usr_score");
const compScore= document.querySelector("#comp_score")

let showWinner = (userWin ,userChoice ,compChoice) =>{
    if(userWin){
        usr_score++;
        userScore.innerHTML=usr_score;
        msg.innerHTML=`You win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="#2fff2b";
        msg.style.color="black";
    }else{
        comp_score++;
        compScore.innerHTML=comp_score;
        msg.innerHTML=`You lost ! ${compChoice} beats yours ${userChoice}`;
        msg.style.backgroundColor ="#fa2419";
        msg.style.color="white";
    }
}

let genCompChoice=()=>{
    const options=["rock","paper", "scissors"];
    const opIdx=Math.floor(Math.random()*3);
    return options[opIdx]
}

let playGame =(userChoice)=>{
    console.log(`User choose ${userChoice}`);

    let compChoice=genCompChoice();
    console.log(`Computer choose ${compChoice}`)

    if(userChoice ===  compChoice){
        msg.innerHTML=`It is a draw !`;
        msg.style.backgroundColor ="Yellow";
        msg.style.color="black";
    }else{
        userWin=true;
        if(userChoice === 'rock'){
            userWin = compChoice==='papper'? false : true;
        }else if(userChoice === 'paper'){
            userWin = compChoice==='scissors'? false : true;
        }else if(userChoice === 'scissors'){
            userWin = compChoice==='rock'? false : true;
        }
        showWinner(userWin ,userChoice ,compChoice);
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click" ,()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
})