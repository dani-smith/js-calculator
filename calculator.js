var screenDisplay = '';
var temp = '';

function clickNum(i) { 
    checkForNewCalculation();
    displayNum(i);
}

function displayNum(i) {
    document.getElementById("screen").value += i;
    temp += i;
}


function checkForNewCalculation() {
    screenDisplay = document.getElementById("screen").value;
    if (document.getElementById("screen").classList.contains("result")){
        allClear();
        document.getElementById("screen").classList.remove("result");
    };
}

function clearScreen() {
    screenDisplay = "";
    document.getElementById("screen").value = screenDisplay;
}

function allClear() {
    screenDisplay = "";
    document.getElementById("screen").value = screenDisplay;
    temp ="";
}

function maths(i) {
    screenDisplay =document.getElementById("screen");
    if (document.getElementById("screen").classList.contains("result")){
        temp = screenDisplay.value;
        screenDisplay.classList.remove("result");
    };
    clearScreen();
    temp += i;
}

function equal() {
    screenDisplay = document.getElementById("screen");
    temp = eval(temp);
    document.getElementById("screen").value = temp;
    screenDisplay.classList.add("result");
}
