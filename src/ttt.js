let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newgame = document.querySelector("#newgame");

let turn0 = true; //Player X = false, Player O = true

//All winning patterns
const winningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];

//Click event for boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turn0) {
          box.innerText="O";
          turn0 = false;
        } else{
        box.innerText="X";
        turn0 = true;
        }
        box.disabled = true;

        checkWinner();
      });
    });


//Check for a Winner
const checkWinner = () => {
    for(let pattern of winningPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                // console.log("winner" , pos1Val);
                showWinner(pos1Val);
                // pos1Val.style.color = "blue";
                // pos2Val.style.color = "red";
                // pos3Val.style.color = "red";
            }   

        }
        drawFunction();
        // console.log(pattern);
    }
};

//Show Winner
const showWinner = (winner) => {
    msg.innerText="Congratulations, Winner is " + winner;
    msgcontainer.classList.remove("hide");
    // pos1Val.style.color = "red";
    // pos2Val.style.color = "red";
    // pos3Val.style.color = "red";

    disableboxes();
};//error in css

//Handle Draw
const drawFunction = () => {
    if ([...boxes].every((box) => box.innerText !== "")) {
        msg.innerHTML = "&#x1F60E; <br> It's a Draw!";
        msgcontainer.classList.remove("hide");
        disableboxes();
    }
};

//Enable all boxes for a new game
const resetgame = () => {
    turn0 = true;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    msgcontainer.classList.add("hide");
}

//Disable all boxes
const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};


newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
