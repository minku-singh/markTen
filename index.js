const billAmountIp = document.querySelector("#bill-amount");
const cashGivenIp = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check");
const msg = document.querySelector(".msg");
const eachNote = document.querySelectorAll(".each-note");

const notesAvailable = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener("click", findChange);

function findChange(){
    const billAmount = Number(billAmountIp.value);
    const cashGiven = Number(cashGivenIp.value);

    // cleanup
    hideMsg()
    for(var i = 0; i < notesAvailable.length; i++){
        eachNote[i].textContent = 0;
    }

    // logic
    if(billAmount > cashGiven){
       showMsg("Want to wash plates???");
    }
    else{
        const cashToReturn = cashGiven - billAmount;
        calculateNotes(cashToReturn);
    }
}

function calculateNotes(cashToReturn){
    
    for(var i = 0; i < notesAvailable.length; i++){
        const num_of_each_note = Math.trunc(cashToReturn / notesAvailable[i]);
        cashToReturn %= notesAvailable[i];
        eachNote[i].textContent = num_of_each_note;
    }

}

function showMsg(message){
    msg.style.display = "block"; 
    msg.textContent = message;
}

function hideMsg(){
    msg.style.display = "none";
}
