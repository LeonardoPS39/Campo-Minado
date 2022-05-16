var difficulty;
var difficultyX;
var difficultyY;
var board = [];
var tableMode = document.querySelector(".easyTable")
var minesAmount;
var contagem = 0;
var controleRandomizacao;

window.onload = intermediate();

function easy() {
    difficulty = 1;
    difficultyX = 8;
    difficultyY = 10;
    minesAmount = 10;
    contagem = 0;
    controleRandomizacao = 2;
    generateBoard();
    generateHTMLBoard();
    easyCSS();
}

function intermediate() {
    difficulty = 2;
    difficultyX = 14;
    difficultyY = 18;
    minesAmount = 40;
    contagem = 0;
    controleRandomizacao = 4;
    generateBoard();
    generateHTMLBoard();
    intermediateCSS();
}

function advanced() {
    difficulty = 3;
    difficultyX = 20;
    difficultyY = 24;
    minesAmount = 99;
    contagem = 0;
    controleRandomizacao = 4;
    generateBoard();
    generateHTMLBoard();
    advancedCSS();
}


function generateBoard() {
    board = [];
    for(let i = 0; i < difficultyX; i++) {
        board[i] = [];
        for(let j = 0; j < difficultyY; j++) {
            board[i][j] = 0;
        }
    }
}


function generateMines(cliqueX, cliqueY) {

    contagem = 0;
    var numeroSorteados = [];
    generateGamingHTMLBoard();

    numeroSorteados.push(cliqueX);
    numeroSorteados.push(cliqueY);

    while(contagem < minesAmount) {
        var repeteLaco = false;

        
        let x = Math.floor(Math.random()*board.length);
        let y = Math.floor(Math.random()*(board.length + controleRandomizacao));
        
        console.log(`X sorteado: ${x}\t Y sorteado: ${y}`);
        
        for(var j = 0; j < numeroSorteados.length; j = j + 2) {
            
            if(x == numeroSorteados[j] && y == numeroSorteados[j + 1]) {
                repeteLaco = true;
                break;
            }
        }
        
        if(repeteLaco) {
            continue;
        }
        
        
        numeroSorteados.push(x);
        numeroSorteados.push(y);

        board[x][y] = 'B';
        contagem++;

    }
    
    console.table(board);
    console.log(contagem);
}

document.addEventListener('contextmenu', event => event.preventDefault());

function bandeira(posX, posY) {

    var eventId = document.getElementById(`${posX}${posY}`);

    eventId.addEventListener("mousedown", function(click) {


        if(click.buttons == 2) {

            if(eventId.classList.contains("flag")) {
                
                eventId.src = "../img/fechado.jpeg";
                eventId.classList.remove("flag");
                eventId.classList.add("notFlag");
                console.log('Já tem bandeira');
                
            }else {
                
                eventId.src = "../img/bandeira.jpeg";
                eventId.classList.add("flag");
                console.log("Clicou");

            }
        }
    });


}


function verifyBombs(posX, posY) {
    var minesAround = 0;

    // while(minesAround == 0) {

    // }


    if(board[posX][posY] == 'B') {
        alert('Você clicou na bomba!');
        return 'Bomba';
    }

    switch (difficulty) {
        case 1:

        if(posX == 0){

            if(posX == 0 && posY == 0) {

                if(board[posX][posY + 1] == 'B') {
                    minesAround++;
                }

                if(board[posX + 1][posY + 1] == 'B')  {
                    minesAround++;
                }

                if(board[posX + 1][posY] == 'B') {
                    minesAround++;
                }

            }

            if(posX == 0 && posY == 9) {

                if(board[posX + 1][posY] == 'B') {
                    minesAround++;
                }

                if(board[posX + 1][posY - 1] == 'B') {
                    minesAround++;
                }

                if(board[posX][posY - 1] == 'B') {
                    minesAround++;
                }

     
            }
            
            if(posX == 0 && posY != 0 && posY != 9) {

                if(board[posX][posY + 1] == 'B') {
                    minesAround++;
                }

                if(board[posX + 1][posY + 1] == 'B') {
                    minesAround++;
                }

                if(board[posX + 1][posY] == 'B') {
                    minesAround++;
                }

                if(board[posX + 1][posY - 1] == 'B') {
                    minesAround++;
                }

                if(board[posX][posY - 1] == 'B') {
                    minesAround++;
                }

            }

        }else if(posX == 7){

            if(posX == 7 && posY == 0) {

                if(board[posX - 1][posY] == 'B') {
                    minesAround++;
                }

                if(board[posX - 1][posY + 1] == 'B')  {
                    minesAround++;
                }

                if(board[posX][posY + 1] == 'B') {
                    minesAround++;
                }

            }

            if(posX == 7 && posY == 9) {

                if(board[posX - 1][posY] == 'B') {
                    minesAround++;
                }

                if(board[posX -1][posY - 1] == 'B') {
                    minesAround++;
                }

                if(board[posX][posY - 1] == 'B') {
                    minesAround++;
                }

     
            }

            if(posX == 7 && posY != 0 && posY != 9) {

                if(board[posX - 1][posY] == 'B') {
                    minesAround++;
                }

                if(board[posX - 1][posY + 1] == 'B') {
                    minesAround++;
                }

                if(board[posX][posY + 1] == 'B') {
                    minesAround++;
                }

                if(board[posX][posY - 1] == 'B') {
                    minesAround++;
                }

                if(board[posX - 1][posY - 1] == 'B') {
                    minesAround++;
                }

            }


        }else if(posY == 0 && posX != 0 && posX != 7){

            if(board[posX][posY + 1] == 'B') {
                minesAround++;
            }

            if(board[posX + 1][posY + 1] == 'B')  {
                minesAround++;
            }

            if(board[posX + 1][posY] == 'B') {
                minesAround++;
            }

            if(board[posX -1][posY] == 'B') {
                minesAround++;
            }

            if(board[posX -1][posY + 1] == 'B') {
                minesAround++;
            }


        }else if(posY == 9 && posX != 0 && posX != 7){

            if(board[posX + 1][posY] == 'B') {
                minesAround++;
            }

            if(board[posX + 1][posY - 1] == 'B')  {
                minesAround++;
            }

            if(board[posX][posY - 1] == 'B') {
                minesAround++;
            }

            if(board[posX - 1][posY - 1] == 'B') {
                minesAround++;
            }

            if(board[posX -1][posY] == 'B') {
                minesAround++;
            }
        }else {

            if(board[posX -1][posY -1] == 'B')  {
                minesAround++;
            }
        
            if(board[posX -1][posY] == 'B') {
                minesAround++;
            }
        
            if(board[posX -1][posY +1] == 'B')  {
                minesAround++;
            }
        
            if(board[posX][posY -1] == 'B') {
                minesAround++;
            }
        
            if(board[posX][posY +1] == 'B') {
                minesAround++;
            }
        
            if(board[posX +1][posY -1] == 'B')  {
                minesAround++;
            }
        
            if(board[posX +1][posY] == 'B') {
                minesAround++;
            }
        
            if(board[posX +1][posY +1] == 'B')  {
                minesAround++;
            }
        }
            break;
    
        case 2:

            if(posX == 0){

                if(posX == 0 && posY == 0) {
    
                    if(board[posX][posY + 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX + 1][posY + 1] == 'B')  {
                        minesAround++;
                    }
    
                    if(board[posX + 1][posY] == 'B') {
                        minesAround++;
                    }
    
                }
    
                if(posX == 0 && posY == 17) {
    
                    if(board[posX + 1][posY] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX + 1][posY - 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX][posY - 1] == 'B') {
                        minesAround++;
                    }
    
         
                }
                
                if(posX == 0 && posY != 0 && posX == 17) {
    
                    if(board[posX][posY + 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX + 1][posY + 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX + 1][posY] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX + 1][posY - 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX][posY - 1] == 'B') {
                        minesAround++;
                    }
    
                }
    
            }else if(posX == 13){
    
                if(posX == 13 && posY == 0) {
    
                    if(board[posX - 1][posY] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX - 1][posY + 1] == 'B')  {
                        minesAround++;
                    }
    
                    if(board[posX][posY + 1] == 'B') {
                        minesAround++;
                    }
    
                }
    
                if(posX == 13 && posY == 17) {
    
                    if(board[posX - 1][posY] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX -1][posY - 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX][posY - 1] == 'B') {
                        minesAround++;
                    }
    
         
                }
    
                if(posX == 13 && posY != 0 && posX == 17) {
    
                    if(board[posX - 1][posY] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX - 1][posY + 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX][posY + 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX][posY - 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX - 1][posY - 1] == 'B') {
                        minesAround++;
                    }
    
                }
    
    
            }else if(posY == 0 && posX != 0 && posX != 13){
    
                if(board[posX][posY + 1] == 'B') {
                    minesAround++;
                }
    
                if(board[posX + 1][posY + 1] == 'B')  {
                    minesAround++;
                }
    
                if(board[posX + 1][posY] == 'B') {
                    minesAround++;
                }
    
                if(board[posX -1][posY] == 'B') {
                    minesAround++;
                }
    
                if(board[posX -1][posY + 1] == 'B') {
                    minesAround++;
                }
    
    
            }else if(posY == 17 && posX != 0 && posX != 13){
    
                if(board[posX + 1][posY] == 'B') {
                    minesAround++;
                }
    
                if(board[posX + 1][posY - 1] == 'B')  {
                    minesAround++;
                }
    
                if(board[posX][posY - 1] == 'B') {
                    minesAround++;
                }
    
                if(board[posX - 1][posY - 1] == 'B') {
                    minesAround++;
                }
    
                if(board[posX -1][posY] == 'B') {
                    minesAround++;
                }
            }else {
    
                if(board[posX -1][posY -1] == 'B')  {
                    minesAround++;
                }
            
                if(board[posX -1][posY] == 'B') {
                    minesAround++;
                }
            
                if(board[posX -1][posY +1] == 'B')  {
                    minesAround++;
                }
            
                if(board[posX][posY -1] == 'B') {
                    minesAround++;
                }
            
                if(board[posX][posY +1] == 'B') {
                    minesAround++;
                }
            
                if(board[posX +1][posY -1] == 'B')  {
                    minesAround++;
                }
            
                if(board[posX +1][posY] == 'B') {
                    minesAround++;
                }
            
                if(board[posX +1][posY +1] == 'B')  {
                    minesAround++;
                }
            }
            
            break;
        
        case 3:

            if(posX == 0){

                if(posX == 0 && posY == 0) {
    
                    if(board[posX][posY + 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX + 1][posY + 1] == 'B')  {
                        minesAround++;
                    }
    
                    if(board[posX + 1][posY] == 'B') {
                        minesAround++;
                    }
    
                }
    
                if(posX == 0 && posY == 23) {
    
                    if(board[posX + 1][posY] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX + 1][posY - 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX][posY - 1] == 'B') {
                        minesAround++;
                    }
    
         
                }
                
                if(posX == 0 && posY != 0 && posY != 23) {
    
                    if(board[posX][posY + 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX + 1][posY + 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX + 1][posY] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX + 1][posY - 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX][posY - 1] == 'B') {
                        minesAround++;
                    }
    
                }
    
            }else if(posX == 19){
    
                if(posX == 19 && posY == 0) {
    
                    if(board[posX - 1][posY] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX - 1][posY + 1] == 'B')  {
                        minesAround++;
                    }
    
                    if(board[posX][posY + 1] == 'B') {
                        minesAround++;
                    }
    
                }
    
                if(posX == 19 && posY == 23) {
    
                    if(board[posX - 1][posY] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX -1][posY - 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX][posY - 1] == 'B') {
                        minesAround++;
                    }
    
         
                }
    
                if(posX == 19 && posY != 0 && posY != 23) {
    
                    if(board[posX - 1][posY] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX - 1][posY + 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX][posY + 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX][posY - 1] == 'B') {
                        minesAround++;
                    }
    
                    if(board[posX - 1][posY - 1] == 'B') {
                        minesAround++;
                    }
    
                }
    
    
            }else if(posY == 0 && posX != 0 && posX != 19){
    
                if(board[posX][posY + 1] == 'B') {
                    minesAround++;
                }
    
                if(board[posX + 1][posY + 1] == 'B')  {
                    minesAround++;
                }
    
                if(board[posX + 1][posY] == 'B') {
                    minesAround++;
                }
    
                if(board[posX -1][posY] == 'B') {
                    minesAround++;
                }
    
                if(board[posX -1][posY + 1] == 'B') {
                    minesAround++;
                }
    
    
            }else if(posY == 23 && posX != 0 && posX != 19){
    
                if(board[posX + 1][posY] == 'B') {
                    minesAround++;
                }
    
                if(board[posX + 1][posY - 1] == 'B')  {
                    minesAround++;
                }
    
                if(board[posX][posY - 1] == 'B') {
                    minesAround++;
                }
    
                if(board[posX - 1][posY - 1] == 'B') {
                    minesAround++;
                }
    
                if(board[posX -1][posY] == 'B') {
                    minesAround++;
                }
            }else {
    
                if(board[posX -1][posY -1] == 'B')  {
                    minesAround++;
                }
            
                if(board[posX -1][posY] == 'B') {
                    minesAround++;
                }
            
                if(board[posX -1][posY +1] == 'B')  {
                    minesAround++;
                }
            
                if(board[posX][posY -1] == 'B') {
                    minesAround++;
                }
            
                if(board[posX][posY +1] == 'B') {
                    minesAround++;
                }
            
                if(board[posX +1][posY -1] == 'B')  {
                    minesAround++;
                }
            
                if(board[posX +1][posY] == 'B') {
                    minesAround++;
                }
            
                if(board[posX +1][posY +1] == 'B')  {
                    minesAround++;
                }
            }

            break;
    }


    // if(board[posX -1][posY -1] == 'B')  {
    //     minesAround++;
    // }

    // if(board[posX -1][posY] == 'B') {
    //     minesAround++;
    // }

    // if(board[posX -1][posY +1] == 'B')  {
    //     minesAround++;
    // }

    // if(board[posX][posY -1] == 'B') {
    //     minesAround++;
    // }

    // if(board[posX][posY +1] == 'B') {
    //     minesAround++;
    // }

    // if(board[posX +1][posY -1] == 'B')  {
    //     minesAround++;
    // }

    // if(board[posX +1][posY] == 'B') {
    //     minesAround++;
    // }

    // if(board[posX +1][posY +1] == 'B')  {
    //     minesAround++;
    // }

    //runByBoard(posX, posY, minesAround);

    console.log(posX, posY);
    return board[posX][posY] = minesAround;

}

var boardLabel

function generateHTMLBoard() {

    boardLabel = document.getElementById('board').innerHTML = null;

    for(var i = 0; i < difficultyX; i++) {

        for(var j = 0; j < difficultyY; j++) {

            boardLabel = document.getElementById('board').innerHTML += `<img src="../img/fechado.jpeg" onclick="generateMines(${i}, ${j})">`;
        }
    }
}

function easyCSS() {
    tableMode.classList.remove("intermediateMode");
    tableMode.classList.remove("advancedMode");
    tableMode.classList.add("easyMode");
}

function intermediateCSS() {
    tableMode.classList.remove("easyMode");
    tableMode.classList.remove("advancedMode");
    tableMode.classList.add("intermediateMode");
    
}

function advancedCSS() {
    tableMode.classList.remove("easyMode");
    tableMode.classList.remove("intermediateMode");
    tableMode.classList.add("advancedMode");
}

function generateGamingHTMLBoard() {

    boardLabel = document.getElementById('board').innerHTML = null;

    for(var i = 0; i < difficultyX; i++) {

        for(var j = 0; j < difficultyY; j++) {

            boardLabel = document.getElementById('board').innerHTML += `<img src="../img/fechado.jpeg" onmousedown="bandeira(${i},${j})" onclick="verifyBombs(${i},${j})" id="${i}${j}">`;
        }
    }
}

// function generateGamingHTMLBoardWithNumbers() {

//     boardLabel = document.getElementById('board').innerHTML = null;

//     for(var i = 0; i < difficultyX; i++) {

//         for(var j = 0; j < difficultyY; j++) {

//             boardLabel = document.getElementById('board').innerHTML += `<img src="../img/fechado.jpeg" onclick="verifyBombs(${i},${j})">`;
//         }
//     }
// }



// function runByBoard(spotX, spotY, minescheked) {
    

//     /*if(spotX == 0 && spotY == 0) {

//         do {


            
//         } while (spotX == 0 && spotY == 0);
//     }else {

//     }*/

//     if(minescheked == 0){

//         // var clearSpots = [spotX - 1 spotY - 1, ... , ... , ... , ...]

//         do {
            
//             if(board[spotX -1][spotY -1] == 'B')  {
//                 minescheked++;
//             } else {

//                 clearSpots.push(`${spotX - 1} ${spotY - 1}`);

//             }

//             if(board[spotX -1][spotY] == 'B') {
//                 minescheked++;
//             }

//             if(board[spotX -1][spotY +1] == 'B')  {
//                 minescheked++;
//             }

//             if(board[spotX][spotY -1] == 'B') {
//                 minescheked++;
//             }

//             if(board[spotX][spotY +1] == 'B') {
//                 minescheked++;
//             }

//             if(board[spotX +1][spotY -1] == 'B')  {
//                 minescheked++;
//             }

//             if(board[spotX +1][spotY] == 'B') {
//                 minescheked++;
//             }

//             if(board[spotX +1][spotY +1] == 'B')  {
//                 minescheked++;
//             }
            

//         } while(minescheked != 0);
//     }

//     /*
//         clearSpots = [posX -1, posY -1, ... ,]

//         fro(let i = o; i menor que clearSpots.length; i = i + 2){
            
//             spotX = posição do veto 1
//             spotY = posição do vetor 2

//             if(board[spotX -1][spotY -1] == 'B')  {
//                 minescheked++;
//             } else {

//                 clearSpots.push(`${spotX - 1} ${spotY - 1}`);
//             }

//             if(board[spotX -1][spotY] == 'B') {
//                 minescheked++;
//             }

//             if(board[spotX -1][spotY +1] == 'B')  {
//                 minescheked++;
//             }

//             if(board[spotX][spotY -1] == 'B') {
//                 minescheked++;
//             }

//             if(board[spotX][spotY +1] == 'B') {
//                 minescheked++;
//             }

//             if(board[spotX +1][spotY -1] == 'B')  {
//                 minescheked++;
//             }

//             if(board[spotX +1][spotY] == 'B') {
//                 minescheked++;
//             }

//             if(board[spotX +1][spotY +1] == 'B')  {
//                 minescheked++;
//             }
//         }

//     */

// }