let player = "player_2"; 
let isGameOver = false; 

const squares = document.getElementsByClassName('mark')

for (const square of squares) {
    square.addEventListener('click', function(e) {
        const innerText = e.target.innerText; 
            if (innerText || isGameOver) return;
            if (player === "player_1") {
                e.target.innerText = "X";
                player = "player_2"
            } else {
                e.target.innerText = "O";
                player = "player_1"
            }
        
            const gameover =  gameOver(e.target.innerText)
            if (gameover) {
                console.log("Game Over");
            }
    })
}

// document.getElementById('square_1').addEventListener('click',function (e) {
//     const innerText = e.target.innerText; 
//     if (innerText || isGameOver) return;
//     if (player === "player_1") {
//         e.target.innerText = "X";
//         player = "player_2"
//     } else {
//         e.target.innerText = "O";
//         player = "player_1"
//     }

//     const gameover =  gameOver(e.target.innerText)
//     if (gameover) {
//         console.log("Game Over");
//     }
// })

// document.getElementById('square_2').addEventListener('click', function (e) {
//     const innerText = e.target.innerText; 
//     if (innerText || isGameOver) return;
//     if (player === "player_1") {
//         e.target.innerText = "X";
//         player = "player_2"
//     } else {
//         e.target.innerText = "O";
//         player = "player_1"
//     }

//     const gameover =  gameOver(e.target.innerText)
//     if (gameover) {
//         console.log("Game Over");
//     }

// })

// document.getElementById('square_3').addEventListener('click', function (e) {
//     const innerText = e.target.innerText; 
//     if (innerText || isGameOver) return;
//     if (player === "player_1") {
//         e.target.innerText = "X";
//         player = "player_2"
//     } else {
//         e.target.innerText = "O";
//         player = "player_1"
//     }

//     const gameover =  gameOver(e.target.innerText)
//     if (gameover) {
//         console.log("Game Over");
//     }
// })

// document.getElementById('square_4').addEventListener('click', function (e) {
//     const innerText = e.target.innerText; 
//     if (innerText || isGameOver) return;
//     if (player === "player_1") {
//         e.target.innerText = "X";
//         player = "player_2"
//     } else {
//         e.target.innerText = "O";
//         player = "player_1"
//     }

//     const gameover =  gameOver(e.target.innerText)
//     if (gameover) {
//         console.log("Game Over");
//     }
// })

// document.getElementById('square_5').addEventListener('click', function (e) {
//     const innerText = e.target.innerText; 
//     if (innerText || isGameOver) return;
//     if (player === "player_1") {
//         e.target.innerText = "X";
//         player = "player_2"
//     } else {
//         e.target.innerText = "O";
//         player = "player_1"
//     }

//     const gameover =  gameOver(e.target.innerText)
//     if (gameover) {
//         console.log("Game Over");
//     }
// })

// document.getElementById('square_6').addEventListener('click', function (e) {
//     const innerText = e.target.innerText; 
//     if (innerText || isGameOver) return;
//     if (player === "player_1") {
//         e.target.innerText = "X";
//         player = "player_2"
//     } else {
//         e.target.innerText = "O";
//         player = "player_1"
//     }

//     const gameover =  gameOver(e.target.innerText)
//     if (gameover) {
//         console.log("Game Over");
//     }
// })

// document.getElementById('square_7').addEventListener('click', function (e) {
//     const innerText = e.target.innerText; 
//     if (innerText || isGameOver) return;
//     if (player === "player_1") {
//         e.target.innerText = "X";
//         player = "player_2"
//     } else {
//         e.target.innerText = "O";
//         player = "player_1"
//     }

//     const gameover =  gameOver(e.target.innerText)
//     if (gameover) {
//         console.log("Game Over");
//     }
// })

// document.getElementById('square_8').addEventListener('click', function (e) {
//     const innerText = e.target.innerText; 
//     if (innerText || isGameOver) return;
//     if (player === "player_1") {
//         e.target.innerText = "X";
//         player = "player_2"
//     } else {
//         e.target.innerText = "O";
//         player = "player_1"
//     }

//     const gameover =  gameOver(e.target.innerText)
//     if (gameover) {
//         console.log("Game Over");
//     }
// })

// document.getElementById('square_9').addEventListener('click', function (e) {
//     const innerText = e.target.innerText; 
//     if (innerText || isGameOver) return;
//     if (player === "player_1") {
//         e.target.innerText = "X";
//         player = "player_2"
//     } else {
//         e.target.innerText = "O";
//         player = "player_1"
//     }

//     const gameover =  gameOver(e.target.innerText)
//     if (gameover) {
//         console.log("Game Over");
//     }
// })

document.getElementById('reset').addEventListener('click', function(e) {
   const squares =  document.getElementsByClassName('mark')
   for(const square of squares) {
       square.innerText = "";
   }
   isGameOver = false;
})

const showGameOver = (char) => {
    document.getElementById('winner').innerText = char === 'X' ? 'player_1' : 'player_2'
}

const gameOver = (char) => {
    // how many marks are set 
    const squares = document.getElementsByClassName('mark');
    let count = 0;
    for (const square of squares) {
        if (square.innerText !== "")  count ++;
    }

    if (count === 9) {
        document.getElementById('winner').innerText = "No winner"
    }


    if (getValue('square_1') === char && getValue('square_2') === char && getValue('square_3') === char) {
        isGameOver = true;
        showGameOver(char)
        return true;
    }

    if (getValue('square_4') === char && getValue('square_5') === char && getValue('square_6') === char) {
        isGameOver = true;
        showGameOver(char)
        return true;
    }

    if (getValue('square_7') === char && getValue('square_8') === char && getValue('square_9') === char) {
        isGameOver = true;
        showGameOver(char)
        return true;
    }

    if (getValue('square_1') === char && getValue('square_4') === char && getValue('square_7') === char) {
        isGameOver = true;
        showGameOver(char)
        return true;
    }

    if (getValue('square_2') === char && getValue('square_5') === char && getValue('square_8') === char) {
        isGameOver = true;
        showGameOver(char)
        return true;
    }

    if (getValue('square_3') === char && getValue('square_6') === char && getValue('square_9') === char) {
        isGameOver = true;
        showGameOver(char)
        return true;
    }

    if (getValue('square_1') === char && getValue('square_5') === char && getValue('square_9') === char) {
        isGameOver = true;
        showGameOver(char)
        return true;
    }

    if (getValue('square_3') === char && getValue('square_5') === char && getValue('square_7') === char) {
        isGameOver = true;
        showGameOver(char)
        return true;
    }
    
    return false;
    
}

const getValue = (id) => {
    return document.getElementById(id).innerText;

}