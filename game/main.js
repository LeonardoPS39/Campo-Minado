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
var countToWin = 0;

var timer;
var counter = 0
var timerTag = document.getElementById('timer')

function startCounter() {

    //Essa função não deve ser avaliada pois foi escrita após o prazo da entrega!
    
    counter = 0
    timer = setInterval(function(){
        counter++
        timerTag.innerHTML = `Tempo: ${counter}`
    }, 1000);
}

function stopCounter() {

    //Essa função não deve ser avaliada pois foi escrita após o prazo da entrega!

    counter = 0
    clearInterval(timer);
}

window.onload = intermediate();

function easy() {
    stopCounter();
    difficulty = 1;
    difficultyX = 8;
    difficultyY = 10;
    minesAmount = 10;
    contagem = 0;
    countFlags = 10;
    controleRandomizacao = 2;
    countToWin = 0;
    generateBoard();
    generateHTMLBoard();
    easyCSS();
    bandeiraTag.innerHTML = `<p>${countFlags} &#128681</p>`;
    counter = 0
    timerTag.innerHTML = `Tempo: ${counter}`
}

function intermediate() {
    stopCounter();
    difficulty = 2;
    difficultyX = 14;
    difficultyY = 18;
    minesAmount = 40;
    countFlags = 40;
    contagem = 0;
    controleRandomizacao = 4;
    countToWin = 0;
    generateBoard();
    generateHTMLBoard();
    intermediateCSS();
    bandeiraTag.innerHTML = `<p>${countFlags} &#128681</p>`;
    counter = 0
    timerTag.innerHTML = `Tempo: ${counter}`
}

function advanced() {
    stopCounter();
    difficulty = 3;
    difficultyX = 20;
    difficultyY = 24;
    minesAmount = 99;
    countFlags = 99;
    contagem = 0;
    controleRandomizacao = 4;
    countToWin = 0;
    generateBoard();
    generateHTMLBoard();
    advancedCSS();
    bandeiraTag.innerHTML = `<p>${countFlags} &#128681</p>`;
    counter = 0
    timerTag.innerHTML = `Tempo: ${counter}`
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

function noNumber(cliqueX, cliqueY) {
    if(cliqueX == 0) {
        if(cliqueX == 0 && cliqueY == 0) {
            
            numeroSorteados.push(cliqueX);
            numeroSorteados.push(cliqueY + 1);
        
            numeroSorteados.push(cliqueX + 1);
            numeroSorteados.push(cliqueY + 1);
        
            numeroSorteados.push(cliqueX + 1);
            numeroSorteados.push(cliqueY);
        }
        if(cliqueX == 0 && cliqueY == board.length + controleRandomizacao - 1) {
            
            numeroSorteados.push(cliqueX + 1);
            numeroSorteados.push(cliqueY);
        
            numeroSorteados.push(cliqueX + 1);
            numeroSorteados.push(cliqueY - 1);
        
            numeroSorteados.push(cliqueX);
            numeroSorteados.push(cliqueY - 1);
    
        }
        
        if(cliqueX == 0 && cliqueY != 0 && cliqueY != board.length + controleRandomizacao - 1) {
    
            numeroSorteados.push(cliqueX);
            numeroSorteados.push(cliqueY + 1);
    
    
            numeroSorteados.push(cliqueX + 1);
            numeroSorteados.push(cliqueY + 1);
    
    
            numeroSorteados.push(cliqueX + 1);
            numeroSorteados.push(cliqueY);
    
    
            numeroSorteados.push(cliqueX + 1);
            numeroSorteados.push(cliqueY - 1);
    
    
            numeroSorteados.push(cliqueX);
            numeroSorteados.push(cliqueY - 1);
    
        }
    }else if(cliqueX == board.length - 1) {
        if(cliqueX == board.length - 1 && cliqueY == 0) {
    
            numeroSorteados.push(cliqueX - 1);
            numeroSorteados.push(cliqueY);
    
    
            numeroSorteados.push(cliqueX - 1);
            numeroSorteados.push(cliqueY + 1);
    
    
            numeroSorteados.push(cliqueX);
            numeroSorteados.push(cliqueY + 1);
    
        }
        if(cliqueX == board.length - 1 && cliqueY == board.length + controleRandomizacao - 1) {
    
            numeroSorteados.push(cliqueX - 1);
            numeroSorteados.push(cliqueY);
    
    
            numeroSorteados.push(cliqueX -1);
            numeroSorteados.push(cliqueY - 1);
    
    
            numeroSorteados.push(cliqueX);
            numeroSorteados.push(cliqueY - 1);
    
    
        }
        if(cliqueX == board.length - 1 && cliqueY != 0 && cliqueY != board.length + controleRandomizacao - 1) {
    
            numeroSorteados.push(cliqueX - 1);
            numeroSorteados.push(cliqueY);
    
    
            numeroSorteados.push(cliqueX - 1);
            numeroSorteados.push(cliqueY + 1);
    
    
            numeroSorteados.push(cliqueX);
            numeroSorteados.push(cliqueY + 1);
    
    
            numeroSorteados.push(cliqueX);
            numeroSorteados.push(cliqueY - 1);
    
    
            numeroSorteados.push(cliqueX - 1);
            numeroSorteados.push(cliqueY - 1);
    
        }
    }else if(cliqueY == 0 && cliqueX != 0 && cliqueX != board.length - 1){
    
            numeroSorteados.push(cliqueX);
            numeroSorteados.push(cliqueY + 1);
    
    
            numeroSorteados.push(cliqueX + 1);
            numeroSorteados.push(cliqueY + 1);
    
    
            numeroSorteados.push(cliqueX + 1);
            numeroSorteados.push(cliqueY);
    
    
            numeroSorteados.push(cliqueX -1);
            numeroSorteados.push(cliqueY);
    
    
            numeroSorteados.push(cliqueX -1);
            numeroSorteados.push(cliqueY + 1);
    
    }else if(cliqueY == board.length + controleRandomizacao - 1 && cliqueX != 0 && cliqueX != board.length - 1){
    
            numeroSorteados.push(cliqueX + 1);
            numeroSorteados.push(cliqueY);
    
    
            numeroSorteados.push(cliqueX + 1);
            numeroSorteados.push(cliqueY - 1);
    
    
            numeroSorteados.push(cliqueX);
            numeroSorteados.push(cliqueY - 1);
    
    
            numeroSorteados.push(cliqueX - 1);
            numeroSorteados.push(cliqueY - 1);
    
    
            numeroSorteados.push(cliqueX -1);
            numeroSorteados.push(cliqueY);
    
    }else {
    
            numeroSorteados.push(cliqueX -1);
            numeroSorteados.push(cliqueY -1);
    
    
    
            numeroSorteados.push(cliqueX -1);
            numeroSorteados.push(cliqueY);
    
    
    
            numeroSorteados.push(cliqueX -1);
            numeroSorteados.push(cliqueY +1);
    
    
    
            numeroSorteados.push(cliqueX);
            numeroSorteados.push(cliqueY -1);
    
    
    
            numeroSorteados.push(cliqueX);
            numeroSorteados.push(cliqueY +1);
    
    
    
            numeroSorteados.push(cliqueX +1);
            numeroSorteados.push(cliqueY -1);
    
    
    
            numeroSorteados.push(cliqueX +1);
            numeroSorteados.push(cliqueY);
    
    
    
            numeroSorteados.push(cliqueX +1);
            numeroSorteados.push(cliqueY +1);
    
    }
}

var numeroSorteados = [];
function generateMines(cliqueX, cliqueY) {

    countFlags = minesAmount;
    bandeiraTag.innerHTML = `<p>${minesAmount} &#128681</p>`;
    contagem = 0;
    numeroSorteados = [];
    

    numeroSorteados.push(cliqueX);
    numeroSorteados.push(cliqueY);
    noNumber(cliqueX,cliqueY);

    while(contagem < minesAmount) {
        var repeteLaco = false;

        
        let x = Math.floor(Math.random()*board.length);
        let y = Math.floor(Math.random()*(board.length + controleRandomizacao));
        
        
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

    generateGamingHTMLBoard();
    generateGamingHTMLBoardWithNumbers(cliqueX, cliqueY);
    startCounter();
}



document.addEventListener('contextmenu', event => event.preventDefault());

function bandeira(posX, posY) {

    var b = window.event;
    var imgTag = document.getElementById(`${posX},${posY}`);

    if(b.button == 2) {

        if(imgTag.classList.contains("flag")) {
                
            imgTag.src = "../img/fechado.jpeg";
            imgTag.classList.remove("flag");
            imgTag.classList.add("notFlag");
            countFlags++
            bandeiraTag.innerHTML = `<p>${countFlags} &#128681</p>`;
            
        }else {
            
            imgTag.src = "../img/bandeira.jpeg";
            imgTag.classList.remove("blocked");
            imgTag.classList.remove("notFlag");
            imgTag.classList.add("flag");
            countFlags--
            bandeiraTag.innerHTML = `<p>${countFlags} &#128681</p>`;

        }

    }
}

var boardLabel;

function generateHTMLBoard() {

    boardLabel = document.getElementById('board').innerHTML = null;

    for(var i = 0; i < difficultyX; i++) {

        for(var j = 0; j < difficultyY; j++) {

            boardLabel = document.getElementById('board').innerHTML += `<img src="../img/fechado.jpeg" class="blocked" onmousedown="bandeira(${i},${j})" onclick="generateMines(${i},${j})" id="${i},${j}">`;
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
            
            boardLabel = document.getElementById('board').innerHTML += `<img src="../img/fechado.jpeg" class="blocked" onmousedown="bandeira(${i},${j})" onclick="generateGamingHTMLBoardWithNumbers(${i},${j})" id="${i},${j}">`;
        }
    }
}

var arrPos0 = [];
var changeAround;

function generateGamingHTMLBoardWithNumbers(posX, posY) {

    arrPos0 = [];
    var changeImg = document.getElementById(`${posX},${posY}`);
    arrPos0.push(posX);
    arrPos0.push(posY);

    if(board[posX][posY] == 'B') {
        for(var i = 0; i < board.length; i++) {
            
            for(var j = 0; j < board.length + controleRandomizacao; j++) {
                
                if(board[i][j] == 'B'){
                    
                    changeImg = document.getElementById(`${i},${j}`).src = "../img/bomba_0.jpeg";
                    changeImg = document.getElementById(`${i},${j}`).onmousedown = "";
                    changeImg = document.getElementById(`${i},${j}`).onclick = "";
                    
                }

                changeImg = document.getElementById(`${i},${j}`).onmousedown = "";
                changeImg = document.getElementById(`${i},${j}`).onclick = "";
                changeImg = document.getElementById(`${i},${j}`).id = "";

            }
        }
        alert('Game Over!\nClique em uma dificuldade para recomeçar.')
        stopCounter();
    }else if(board[posX][posY] != 0) {

        switch (board[posX][posY]) {
            case 1:
                changeImg = document.getElementById(`${posX},${posY}`).src = "../img/aberto_1.jpeg";
                changeImg = document.getElementById(`${posX},${posY}`).onmousedown = "";
                changeImg = document.getElementById(`${posX},${posY}`).onclick = "";
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('blocked');
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('flag');
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('notFlag');
                changeImg = document.getElementById(`${posX},${posY}`).classList.add('open');
                winCondition();
                break;
        
            case 2:
                changeImg = document.getElementById(`${posX},${posY}`).src = "../img/aberto_2.jpeg";
                changeImg = document.getElementById(`${posX},${posY}`).onmousedown = "";
                changeImg = document.getElementById(`${posX},${posY}`).onclick = "";
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('flag');
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('notFlag');
                changeImg = document.getElementById(`${posX},${posY}`).classList.add('open');
                winCondition();
                break;

            case 3:
                changeImg = document.getElementById(`${posX},${posY}`).src = "../img/aberto_3.jpeg";
                changeImg = document.getElementById(`${posX},${posY}`).onmousedown = "";
                changeImg = document.getElementById(`${posX},${posY}`).onclick = "";
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('flag');
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('notFlag');
                changeImg = document.getElementById(`${posX},${posY}`).classList.add('open');
                winCondition();
                break;

            case 4:
                changeImg = document.getElementById(`${posX},${posY}`).src = "../img/aberto_4.jpeg";
                changeImg = document.getElementById(`${posX},${posY}`).onmousedown = "";
                changeImg = document.getElementById(`${posX},${posY}`).onclick = "";
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('flag');
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('notFlag');
                changeImg = document.getElementById(`${posX},${posY}`).classList.add('open');
                winCondition();
                break;

            case 5:
                changeImg = document.getElementById(`${posX},${posY}`).src = "../img/aberto_5.jpeg";
                changeImg = document.getElementById(`${posX},${posY}`).onmousedown = "";
                changeImg = document.getElementById(`${posX},${posY}`).onclick = "";
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('flag');
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('notFlag');
                changeImg = document.getElementById(`${posX},${posY}`).classList.add('open');
                winCondition();
                break;

            case 6:
                changeImg = document.getElementById(`${posX},${posY}`).src = "../img/aberto_6.jpeg";
                changeImg = document.getElementById(`${posX},${posY}`).onmousedown = "";
                changeImg = document.getElementById(`${posX},${posY}`).onclick = "";
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('flag');
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('notFlag');
                changeImg = document.getElementById(`${posX},${posY}`).classList.add('open');
                winCondition();
                break;

            case 7:
                changeImg = document.getElementById(`${posX},${posY}`).src = "../img/aberto_7.jpeg";
                changeImg = document.getElementById(`${posX},${posY}`).onmousedown = "";
                changeImg = document.getElementById(`${posX},${posY}`).onclick = "";
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('flag');
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('notFlag');
                changeImg = document.getElementById(`${posX},${posY}`).classList.add('open');
                winCondition();
                break;

            case 8:
                changeImg = document.getElementById(`${posX},${posY}`).src = "../img/aberto_8.jpeg";
                changeImg = document.getElementById(`${posX},${posY}`).onmousedown = "";
                changeImg = document.getElementById(`${posX},${posY}`).onclick = "";
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('flag');
                changeImg = document.getElementById(`${posX},${posY}`).classList.remove('notFlag');
                changeImg = document.getElementById(`${posX},${posY}`).classList.add('open');
                winCondition();
                break;
        }
    }else{

        openBoard(posX, posY);

    }

    return;
}


function openBoard(posX, posY) {
    var changeAtributes;
    for (var i = posX - 1; i <= posX + 1; i++) {
        for (var j = posY - 1; j <= posY + 1; j++) {
            if (i >= 0 && i < difficultyX && j >= 0 && j < difficultyY) {
                var square = document.getElementById(`${i},${j}`);
                if (square.className !== "open") {
                    switch (board[i][j]) {
                        case "B":
                            break;
                        case 0:
                            square.src = '../img/aberto_0.jpeg'
                            square = document.getElementById(`${i},${j}`).className = "open";
                            changeAtributes = document.getElementById(`${i},${j}`).onmousedown = '';
                            changeAtributes = document.getElementById(`${i},${j}`).onclick = '';
                            
                            openBoard(i, j);
                            break;
                        default:
                        switch(board[i][j]) {
                            case 1:
                                square.src = "../img/aberto_1.jpeg";
                                square = document.getElementById(`${i},${j}`).className = "open";
                                changeAtributes = document.getElementById(`${i},${j}`).onmousedown = '';
                                changeAtributes = document.getElementById(`${i},${j}`).onclick = '';
                                

                                break;
                        
                            case 2:
                                square.src = "../img/aberto_2.jpeg";
                                square = document.getElementById(`${i},${j}`).className = "open";
                                changeAtributes = document.getElementById(`${i},${j}`).onmousedown = '';
                                changeAtributes = document.getElementById(`${i},${j}`).onclick = '';
                                

                                break;

                            case 3:
                                square.src = "../img/aberto_3.jpeg";
                                square = document.getElementById(`${i},${j}`).className = "open";
                                changeAtributes = document.getElementById(`${i},${j}`).onmousedown = '';
                                changeAtributes = document.getElementById(`${i},${j}`).onclick = '';
                                

                                break;

                            case 4:
                                square.src = "../img/aberto_4.jpeg";
                                square = document.getElementById(`${i},${j}`).className = "open";
                                changeAtributes = document.getElementById(`${i},${j}`).onmousedown = '';
                                changeAtributes = document.getElementById(`${i},${j}`).onclick = '';
                                

                                break;

                            case 5:
                                square.src = "../img/aberto_5.jpeg";
                                square = document.getElementById(`${i},${j}`).className = "open";
                                changeAtributes = document.getElementById(`${i},${j}`).onmousedown = '';
                                changeAtributes = document.getElementById(`${i},${j}`).onclick = '';
                                

                                break;

                            case 6:
                                square.src = "../img/aberto_6.jpeg";
                                square = document.getElementById(`${i},${j}`).className = "open";
                                changeAtributes = document.getElementById(`${i},${j}`).onmousedown = '';
                                changeAtributes = document.getElementById(`${i},${j}`).onclick = '';
                                

                                break;

                            case 7:
                                square.src = "../img/aberto_7.jpeg";
                                square = document.getElementById(`${i},${j}`).className = "open";
                                changeAtributes = document.getElementById(`${i},${j}`).onmousedown = '';
                                changeAtributes = document.getElementById(`${i},${j}`).onclick = '';
                                

                                break;

                            case 8:
                                square.src = "../img/aberto_8.jpeg";
                                square = document.getElementById(`${i},${j}`).className = "open";
                                changeAtributes = document.getElementById(`${i},${j}`).onmousedown = '';
                                changeAtributes = document.getElementById(`${i},${j}`).onclick = '';
                                

                                break;
                        }
                        square = document.getElementById(`${i},${j}`).className = "open";
                    }
                }
            }
        }
    }

    winCondition();
}

function winCondition() {
    
    //Essa função não deve ser avaliada pois foi escrita após o prazo da entrega!

    var amountToWin = difficultyX * difficultyY - minesAmount;
    countToWin = 0;

    for(var i = 0; i < board.length; i++) {

        for(var j = 0; j < board.length + controleRandomizacao; j++) {

            if(document.getElementById(`${i},${j}`).classList.contains('open') || document.getElementById(`${i},${j}`).classList.contains('blocked open')) {
                countToWin++;
            }

        }
    }


    if(countToWin == amountToWin) {

        for(var i = 0; i < board.length; i++) {
                
            for(var j = 0; j < board.length + controleRandomizacao; j++) {
                
                if(board[i][j] == 'B'){
                    
                    changeImg = document.getElementById(`${i},${j}`).src = "../img/bomba_1.jpeg";
                    changeImg = document.getElementById(`${i},${j}`).onmousedown = "";
                    changeImg = document.getElementById(`${i},${j}`).onclick = "";
                    
                }
    
                changeImg = document.getElementById(`${i},${j}`).onmousedown = "";
                changeImg = document.getElementById(`${i},${j}`).onclick = "";
                changeImg = document.getElementById(`${i},${j}`).id = "";
                stopCounter();
    
            }
        }
    }
}