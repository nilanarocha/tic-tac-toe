// 1. alternate between players "x" and "o". okay 
// 2. Stopped game if all buttons were clicked. okay
// 3. Users shouldn't click the button more than once. okay
// 4. the game should restart after board is full. okay
// 5. check if player "x" won 
// 6. check if player "o" won
// 
let counter = 0;
//create player o array
let playerX = [];
let playerO = [];

// function should return true if player "x" contains all the numbers of one of the matches 
// or false otherwise."boolean"
const checkWin = function (player) {
    let winner = false;
    // I can have 8 matches. (3 horizontals, 3 verticals, 2 diagonals)
    // function includes() check if array contains the number
    if ((player.includes(1) && player.includes(2) && player.includes(3)) ||
        (player.includes(4) && player.includes(5) && player.includes(6)) ||
        (player.includes(7) && player.includes(8) && player.includes(9)) ||
        (player.includes(1) && player.includes(4) && player.includes(7)) ||
        (player.includes(2) && player.includes(5) && player.includes(8)) ||
        (player.includes(3) && player.includes(6) && player.includes(9)) ||
        (player.includes(1) && player.includes(5) && player.includes(9)) ||
        (player.includes(3) && player.includes(5) && player.includes(7))) {
        winner = true;
    }
    return winner;
};

// restart the game 
let restartGame = function () {
    counter = 0;
    $(".game-item").text("");
    $(".game-item").attr("disabled", false);
    playerX = [];
    playerO = [];
    $('.win-item').text("");
};

$(".game-item").click(function () {

    let currentPlayer = "";
    if (counter % 2 === 0) {
        currentPlayer = "X";
        // "+" string to number
        playerX.push(+$(this).attr("id"));
    } else {
        currentPlayer = "O";
        // "+" string to number
        playerO.push(+$(this).attr("id"));
    }
    counter += 1;
    $(this).text(currentPlayer);
    // To disable a submit button, you just need to add a disabled attribute to the submit button.
    $(this).attr("disabled", true);

    if (currentPlayer === "X") {
        let playerXWon = checkWin(playerX);
        if (playerXWon === true) {
            $('.win-item').text('Player X win!');
            // when player X wons I should disable all the buttons of the game.
            $('.game-item').attr("disabled", true);
            return;
        }
    } else {
        let playerOWon = checkWin(playerO);
        if (playerOWon === true) {
            $('.win-item').text('Player O win!');
            // when player X wons I should disable all the buttons of the game.
            $('.game-item').attr("disabled", true);
            return;
        }
    }

    // If user clicks in all buttons the game should restart. 
    if (counter === 9) {
        $('.win-item').text('Draw');
    }
});
// when I click on the  restart button I should call restart game function
$('.restart').click(function () {
    // restart the game 
    restartGame();
});


