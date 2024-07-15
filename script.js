
// tic tac toe game 
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#btn");
let newGamebtn =document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO= true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () =>{
    turnO=true;
    EnableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
          box.innerText="X";
          turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})
 
const DisabledBoxes =() => {
    for(let box of boxes){
        box.disabled=true;
    }
}
const EnableBoxes =() => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const ShowWinner = (winner) =>{
    msg.innerText =`Congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    DisabledBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let Pos1val = boxes[pattern[0]].innerText;
        let Pos2val = boxes[pattern[1]].innerText;
        let Pos3val = boxes[pattern[2]].innerText;
        if(Pos1val != "" && Pos2val != "" && Pos3val != ""){
            if(Pos1val===Pos2val && Pos2val=== Pos3val){
                console.log("winner", Pos1val);
                ShowWinner(Pos1val);
            }
        }
    }
}
newGamebtn.addEventListener("click" ,resetGame);
resetBtn.addEventListener("click",resetGame)