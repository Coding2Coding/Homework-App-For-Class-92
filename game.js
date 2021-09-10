var username1 = localStorage.getItem("username1");
var username2 = localStorage.getItem("username2");

document.getElementById("player1Username").innerHTML = username1 + ": ";
document.getElementById("player2Username").innerHTML = username2 + ": ";

document.getElementById("questionTurn").innerHTML = "Question Turn: " + username1;
document.getElementById("answerTurn").innerHTML = "Answer Turn: " + username2;


function send() {
    firstNumber = document.getElementById("firstNumberInput").value;
    secondNumber = document.getElementById("secondNumberInput").value;
    actualAnswer = parseInt(firstNumber) * parseInt(secondNumber);
    var question = firstNumber + " multiplied by " + secondNumber;
    document.getElementById("question").innerHTML = question;
    document.getElementById("firstNumberInput").value = "";
    document.getElementById("secondNumberInput").value = "";
}

var questionTurn = "username1";
var answerTurn = "username2";

var player1Score = "0";
var player2Score = "0";

function checkAnswer() {
    var playerAnswer = document.getElementById("answer").value;

    if(playerAnswer == actualAnswer) {
        
        if(answerTurn == "username1") {
            var updatedPlayer1Score = player1Score + 1;
            document.getElementById("player1Score").innerHTML = updatedPlayer1Score;
            answerTurn = "username2"
            document.getElementById("answerTurn").innerHTML = "Answer Turn: " + username2;
        }
        
        else {
            var updatedPlayer2Score = player2Score + 1;
            document.getElementById("player2Score").innerHTML = updatedPlayer2Score;
            answerTurn = "username1";
            document.getElementById("answerTurn").innerHTML = "Answer Turn: " + username1;
        }
        
        if(questionTurn == "username1") {
            questionTurn = "username2";
            document.getElementById("questionTurn").innerHTML = "Question Turn: " + username2;
        }

        else {
            questionTurn = "username1";
            document.getElementById("questionTurn").innerHTML = "Question Turn: " + username1;       }
    }
    
}