let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container")

let turnO= true;

const winPatterns = [
    [0,1,2],
    [0, 3,6],
    [0,4,8],
    [1,4,7],
    [ 2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");

}




boxes.forEach((box) => {
    box.addEventListener("click", () => {

if(turnO){
    box.innerText = "O";
    turnO = false;
   

} else{
    box.innerText = "X";


turnO = "True";


}

box.disabled = true;

checkWinner();
    });     

});

const disabledBoxes =()=> {
    for(let box of boxes ){
    box.disabled = true;
}
};
const enableboxes =() =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText = "";
    }
};

const showWinner = ( winner) => {
    msg.innerText = `Congratulation, Winner is  ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        
           let pos1Val =  boxes[pattern[0]].innerText;
           let pos2Val  = boxes[pattern[1]].innerText;
           let pos3Val = boxes[pattern[2]].innerText;

        
    

           if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {{
           
            showWinner(pos1Val);
            return; 
            
    }
  }
 }
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
