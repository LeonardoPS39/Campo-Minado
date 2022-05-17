var difficulty;
var difficultyX;
var difficultyY;
var board = [];
var tableMode = document.querySelector(".easyTable");
var minesAmount;
var contagem = 0;
var controleRandomizacao;
var countFlags;
var bandeiraTag = document.getElementById('countFlag');

window.onload = intermediate();

function easy() {
    difficulty = 1;
    difficultyX = 8;
    difficultyY = 10;
    minesAmount = 10;
    contagem = 0;
    countFlags = 10;
    controleRandomizacao = 2;
    generateBoard();
    generateHTMLBoard();
    easyCSS();
    bandeiraTag.innerHTML = `<p>${countFlags} &#128681</p>`;
}

function intermediate() {
    difficulty = 2;
    difficultyX = 14;
    difficultyY = 18;
    minesAmount = 40;
    countFlags = 40;
    contagem = 0;
    controleRandomizacao = 4;
    generateBoard();
    generateHTMLBoard();
    intermediateCSS();
    bandeiraTag.innerHTML = `<p>${countFlags} &#128681</p>`;
}

function advanced() {
    difficulty = 3;
    difficultyX = 20;
    difficultyY = 24;
    minesAmount = 99;
    countFlags = 99;
    contagem = 0;
    controleRandomizacao = 4;
    generateBoard();
    generateHTMLBoard();
    advancedCSS();
    bandeiraTag.innerHTML = `<p>${countFlags} &#128681</p>`;
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

    var minesAround
    
    for(var i = 0; i < board.length; i++) {
        
        for(var j = 0; j < board.length + controleRandomizacao; j++) {
            minesAround = 0;

            if(board[i][j] == 'B') {
                continue;
            }else {

                if(i == 0) {
                    if(i == 0 && j == 0) {
                        if(board[i][j + 1] == 'B') {
                            minesAround++;
                        }
                        if(board[i + 1][j + 1] == 'B')  {
                            minesAround++;
                        }
                        if(board[i + 1][j] == 'B') {
                            minesAround++;
                        }
                    }
                    if(i == 0 && j == board.length + controleRandomizacao - 1) {
                        if(board[i + 1][j] == 'B') {
                            minesAround++;
                        }
                        if(board[i + 1][j - 1] == 'B') {
                            minesAround++;
                        }
                        if(board[i][j - 1] == 'B') {
                            minesAround++;
                        }
                
                    }
                    
                    if(i == 0 && j != 0 && j != board.length + controleRandomizacao - 1) {
                        if(board[i][j + 1] == 'B') {
                            minesAround++;
                        }
                        if(board[i + 1][j + 1] == 'B') {
                            minesAround++;
                        }
                        if(board[i + 1][j] == 'B') {
                            minesAround++;
                        }
                        if(board[i + 1][j - 1] == 'B') {
                            minesAround++;
                        }
                        if(board[i][j - 1] == 'B') {
                            minesAround++;
                        }
                    }
                }else if(i == board.length - 1) {
                    if(i == board.length - 1 && j == 0) {
                        if(board[i - 1][j] == 'B') {
                            minesAround++;
                        }
                        if(board[i - 1][j + 1] == 'B')  {
                            minesAround++;
                        }
                        if(board[i][j + 1] == 'B') {
                            minesAround++;
                        }
                    }
                    if(i == board.length - 1 && j == board.length + controleRandomizacao - 1) {
                        if(board[i - 1][j] == 'B') {
                            minesAround++;
                        }
                        if(board[i -1][j - 1] == 'B') {
                            minesAround++;
                        }
                        if(board[i][j - 1] == 'B') {
                            minesAround++;
                        }
                
                    }
                    if(i == board.length - 1 && j != 0 && j != board.length + controleRandomizacao - 1) {
                        if(board[i - 1][j] == 'B') {
                            minesAround++;
                        }
                        if(board[i - 1][j + 1] == 'B') {
                            minesAround++;
                        }
                        if(board[i][j + 1] == 'B') {
                            minesAround++;
                        }
                        if(board[i][j - 1] == 'B') {
                            minesAround++;
                        }
                        if(board[i - 1][j - 1] == 'B') {
                            minesAround++;
                        }
                    }
                }else if(j == 0 && i != 0 && i != board.length - 1){
                    if(board[i][j + 1] == 'B') {
                        minesAround++;
                    }
                    if(board[i + 1][j + 1] == 'B')  {
                        minesAround++;
                    }
                    if(board[i + 1][j] == 'B') {
                        minesAround++;
                    }
                    if(board[i -1][j] == 'B') {
                        minesAround++;
                    }
                    if(board[i -1][j + 1] == 'B') {
                        minesAround++;
                    }
                }else if(j == board.length + controleRandomizacao - 1 && i != 0 && i != board.length - 1){
                    if(board[i + 1][j] == 'B') {
                        minesAround++;
                    }
                    if(board[i + 1][j - 1] == 'B')  {
                        minesAround++;
                    }
                    if(board[i][j - 1] == 'B') {
                        minesAround++;
                    }
                    if(board[i - 1][j - 1] == 'B') {
                        minesAround++;
                    }
                    if(board[i -1][j] == 'B') {
                        minesAround++;
                    }
                }else {
                    if(board[i -1][j -1] == 'B')  {
                        minesAround++;
                    }
                
                    if(board[i -1][j] == 'B') {
                        minesAround++;
                    }
                
                    if(board[i -1][j +1] == 'B')  {
                        minesAround++;
                    }
                
                    if(board[i][j -1] == 'B') {
                        minesAround++;
                    }
                
                    if(board[i][j +1] == 'B') {
                        minesAround++;
                    }
                
                    if(board[i +1][j -1] == 'B')  {
                        minesAround++;
                    }
                
                    if(board[i +1][j] == 'B') {
                        minesAround++;
                    }
                
                    if(board[i +1][j +1] == 'B')  {
                        minesAround++;
                    }
                }
            }
            board[i][j] = minesAround;
        }
    }

    console.table(board);
    console.log(contagem);
}

document.addEventListener('contextmenu', event => event.preventDefault());

function bandeira(posX, posY) {

    var b = window.event;
    var imgTag = document.getElementById(`${posX}${posY}`);

    if(b.button == 2) {

        if(imgTag.classList.contains("flag")) {
                
            imgTag.src = "../img/fechado.jpeg";
            imgTag.classList.remove("flag");
            imgTag.classList.add("notFlag");
            countFlags++
            bandeiraTag.innerHTML = `<p>${countFlags} &#128681</p>`;
            console.log('Já tem bandeira');
            
        }else {
            
            imgTag.src = "../img/bandeira.jpeg";
            imgTag.classList.add("flag");
            countFlags--
            bandeiraTag.innerHTML = `<p>${countFlags} &#128681</p>`;
            console.log("Clicou");

        }

    }
}
var arr0Bombs = []

function verifyBombs(posX, posY) {

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
