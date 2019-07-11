// 1. alternate between players "x" and "o". okay 
// 2. Stopped game if all buttons were clicked. okay
// 3. Users shouldn't click the button more than once. okay
// 4. the game should restart after board is full. okay
// 5. check if player "x" won 
// 6. check if player "o" won
// 
let counter = 0;
let scoreX = 0;
let scoreO = 0;
//create player o array
let playerX = [];
let playerO = [];


const checkWin = function (player) {
    let winner = false;
    if (player.includes(1) && player.includes(2) && player.includes(3)) {
        $('#1, #2, #3').addClass('game-item-winner');
    }

    if (player.includes(4) && player.includes(5) && player.includes(6)) {
        $('#4, #5, #6').addClass('game-item-winner');
    }

    if (player.includes(7) && player.includes(8) && player.includes(9)) {
        $('#7, #8, #9').addClass('game-item-winner');
    }

    if (player.includes(1) && player.includes(4) && player.includes(7)) {
        $('#1, #4, #7').addClass('game-item-winner');
    }

    if (player.includes(2) && player.includes(5) && player.includes(8)) {
        $('#2, #5, #8').addClass('game-item-winner');
    }

    if (player.includes(3) && player.includes(6) && player.includes(9)) {
        $('#3, #6, #9').addClass('game-item-winner');
    }

    if (player.includes(1) && player.includes(5) && player.includes(9)) {
        $('#1, #5, #9').addClass('game-item-winner');
    }

    if (player.includes(3) && player.includes(5) && player.includes(7)) {
        $('#3, #5, #7').addClass('game-item-winner');
    }

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
    $('.win-message').text("");
    $('#1, #2, #3, #4, #5, #6, #7, #8, #9').removeClass('game-item-winner');
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
    // When I click on the buttons the counter start sum the number of matches.
    counter += 1;
    $(this).text(currentPlayer);
    // To disable a submit button, you just need to add a disabled attribute to the submit button.
    $(this).attr("disabled", true);

    if (currentPlayer === "X") {
        let playerXWon = checkWin(playerX);
        if (playerXWon === true) {
            $('.win-message').text('Player X won! 👏');
            // when player X wons I should disable all the buttons of the game.
            $('.game-item').attr("disabled", true);
            scoreX += 1;
            $('#scoreX').text(`Player X = ${scoreX}`);
            // alert(scoreX)
            return;
        }
    } else {
        let playerOWon = checkWin(playerO);
        if (playerOWon === true) {
            $('.win-message').text('Player O won! 👏');
            // when player O wons I should disable all the buttons of the game.
            $('.game-item').attr("disabled", true);
            scoreO += 1;
            $('#scoreO').text(`Player O = ${scoreO}`);
            // // alert(scoreX);
            return;
        }
    }

    // If user clicks in all buttons the game should restart. 
    if (counter === 9) {
        $('.win-message').text('Draw 🤷🏽‍♀');

    }
});
// when I click on the  restart button I should call restart game function
$('.restart').click(function () {
    // restart the game 
    restartGame();
});



