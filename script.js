// For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class
/*
let marks = [85,97,44,37,76,60];
let totalMarks =0;
for(let i=0; i<marks.length; i++){
    totalMarks = totalMarks + marks[i];
    
    console.log(totalMarks);
    let avg = totalMarks/marks.length;
    console.log(avg);
}
function findVowel(str){
    let count =0;
    for(let i=0; i<str.length; i++){
       if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
        count++;
       } 
       
    }
    return count;
}
console.log(findVowel("Nasimather"));
console.log("**********************--------------------**********************");

let myfunc = (str)=>{
    let count= 0;
    for(let i=0; i<str.length; i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
         count++;
        } 
        
     }
     return count;
}
console.log(myfunc("poco"));
*/
//let dic = document.querySelector("div");
//console.log(dic);
//let dcc = dic.setAttribute("class","classnn");
//console.log(dcc)

// let sty=document.querySelector("div");
// sty.style.backgroundColor="blue";
// sty.style.color="green";
// console.log(sty);
// let el = document.createElement("button");
// el.innerText="click me";

// console.log(el);
// let dic = document.querySelector("div");
// dic.append(el);
//dic.prepend(el);
//dic.before(el);
//dic.after(el);

// let bttn = document.createElement("button");
// bttn.innerText="click me btn";
// bttn.style.backgroundColor="red";
// bttn.style.color="white";
// document.querySelector("body").prepend(bttn);

// let ndd = document.createElement("h1");
// ndd.innerText="helllo javascript its ather";
// document.querySelector("body").append(ndd);
// let x = document.querySelector("p");
// x.classList.add("newpara");
// let body =document.querySelector("body");
// let curr="light";

// let button=document.querySelector("button");
// button.addEventListener("click",()=>{
//     if(curr==="light"){
//         curr="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         curr="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
// })

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