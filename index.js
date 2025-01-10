var randomNumber = Math.floor(Math.random() * 100) + 1;
var x = 1;

document.getElementById('btn').addEventListener('click', function () {
    var guess = parseInt(document.getElementById('guessInput').value);
    
    if (guess === randomNumber) {
        document.getElementById('cnt').innerHTML = "You have opened " + x + " boxes.";
        display("You guessed it right!");
        x++;
        randomNumber = Math.floor(Math.random() * 100) + 1;
    } else if (guess < randomNumber) {
        display("Number is too Low!");
    } else {
        display("Number is too High!");
    }
    
    if (x === 6) {
        display("Congratulations! You have opened all the boxes.");
        document.getElementById('img').src = "open.jpeg";
    }
});

function display(msg) {
    document.getElementById('msg').textContent = msg;
}
