var difficulty;
var difficultyX;
var difficultyY;
var board = [];
var minesAmount;
var contagem = 0;


function easy() {
    difficulty = 1;
    difficultyX = 8;
    difficultyY = 10;
    minesAmount = 10;
    contagem = 0;
    generateBoard();
    generateHTMLBoard();
}

function intermediate() {
    difficulty = 2;
    difficultyX = 14;
    difficultyY = 18;
    minesAmount = 40;
    contagem = 0;
    generateBoard();
    generateHTMLBoard();
}

function advanced() {
    difficulty = 3;
    difficultyX = 20;
    difficultyY = 24;
    minesAmount = 99;
    contagem = 0;
    generateBoard();
    generateHTMLBoard();
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


function generateMines() {

    contagem = 0;
    var numeroSorteados = [];
    while(contagem < minesAmount) {
        var repeteLaco = false;

        let x = Math.floor(Math.random()*board.length);
        let y = Math.floor(Math.random()*board.length);


        for(let j = 0; j < numeroSorteados.length; j = j + 2) { //[10,20,12,3,50,60]
    
            if(x == numeroSorteados[j] && y == numeroSorteados[j + 1]) {
                repeteLaco = true;
                break;;
            }
        }

        if(repeteLaco) {
            continue;
        }
        
        numeroSorteados.push(x);
        numeroSorteados.push(y);
        console.log(`X sorteado: ${x}\t Y sorteado: ${y}`);

        board[x][y] = 'B';
        contagem++;

    }
    
    console.table(board);
    console.log(contagem);


}


function verifyBombs(posX, posY) {
    var minesAround = 0;

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


    return board[posX][posY] = minesAround;

}

var boardLabel

function generateHTMLBoard() {

    boardLabel = document.getElementById('board').innerHTML = null

    for(let i = 0; i < difficultyX; i++) {

        // boardLabel = document.getElementById('board').innerHTML += '<br>'

        for(let j = 0; j < difficultyY; j++) {

            boardLabel = document.getElementById('board').innerHTML += `<img src="../img/fechado.jpeg" onclick="generateMines()">`
        }
    }

}

