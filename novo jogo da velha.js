//var tabuleiro is a variable that defines the hash board initial state and it's values. 
var tabuleiro = [['', '', ''],
                 ['', '', ''],
                 ['', '', '']];

var rodada = 0;
var pontos_x = 0;
var pontos_O = 0;

//var registrado is a variable that defines if either the current player registered an username or not.

var registrado=[false,false]


//function registraX is a function that inserts the X player current point value to the site.

function registraX() {
    document.getElementById("pontosX").innerText = String(pontos_x)
}

//function registraO is a function that inserts the O player current point value to the site.

function registraO() {
    document.getElementById("pontosO").innerText = String(pontos_O)
}

//function limpa is a function that clears/restarts the board visually after the current match ends.

function limpa(){
    for (let x = 0; x < 3; x++){
        for (let y = 0; y < 3; y++){
            document.getElementById(String(x)+String(y)).innerHTML='';
            document.getElementById(String(x)+String(y)).style.backgroundColor='';
        }
    }    
}

//function vitoria is a function that delimitates the winning requirements, and check if they are fulfilled, 
//It also makes the board(the variable "tabuleiro") be cleared for the code, after the match ends, 
//And also increases the point variable of the winning player and calls the respective "registra" function to insert it visually unto the site.

function vitoria() {
    for (let linha = 0; linha < 3; linha++) {
        if (tabuleiro[linha][0] === 'O' && tabuleiro[linha][1] === 'O' && tabuleiro[linha][2] === 'O') {
            tabuleiro = [['', '', ''], ['', '', ''], ['', '', '']];
            pontos_O++;
            registraO()
            limpa()
        } else if (tabuleiro[linha][0] === 'X' && tabuleiro[linha][1] === 'X' && tabuleiro[linha][2] === 'X') {
            tabuleiro = [['', '', ''], ['', '', ''], ['', '', '']];
            pontos_x++;
            registraX()
            limpa()
        }

        var vertical = ['', '', ''];
        for (let horizontal = 0; horizontal <= 2; horizontal++) {
            if (tabuleiro[horizontal][linha] === 'O') {
                vertical[horizontal] = 'O';
            } 
            else if (tabuleiro[horizontal][linha] === 'X') {
                vertical[horizontal] = 'X';
            }
        }

        if (vertical[0] === 'O' && vertical[1] === 'O' && vertical[2] === 'O') {
            tabuleiro = [['', '', ''], ['', '', ''], ['', '', '']];
            pontos_O++;
            registraO()
            limpa()
        } else if (vertical[0] === 'X' && vertical[1] === 'X' && vertical[2] === 'X') {
            tabuleiro = [['', '', ''], ['', '', ''], ['', '', '']];
            pontos_x++;
            registraX()
            limpa()
        }
    }

    if (tabuleiro[0][0] === 'O' && tabuleiro[1][1] === 'O' && tabuleiro[2][2] === 'O') {
        tabuleiro = [['', '', ''], ['', '', ''], ['', '', '']];
        pontos_O++;
        registraO()
        limpa()
    } else if (tabuleiro[0][0] === 'X' && tabuleiro[1][1] === 'X' && tabuleiro[2][2] === 'X') {
        tabuleiro = [['', '', ''], ['', '', ''], ['', '', '']];
        pontos_x++;
        registraX()
        limpa()
    }
    if (tabuleiro[2][0] === 'O' && tabuleiro[1][1] === 'O' && tabuleiro[0][2] === 'O') {
        tabuleiro = [['', '', ''], ['', '', ''], ['', '', '']];
        pontos_O++;
        registraO()
        limpa()
    } else if (tabuleiro[2][0] === 'X' && tabuleiro[1][1] === 'X' && tabuleiro[0][2] === 'X') {
        tabuleiro = [['', '', ''], ['', '', ''], ['', '', '']];
        pontos_x++;
        registraX()
        limpa()
    }
}

//function velha is a function made to check if the current match ended in a hash/draw.

function velha(){
    if(tabuleiro[0][0] != '' && tabuleiro[0][1] != '' && tabuleiro[0][2] != ''
    &&tabuleiro[1][0] != '' && tabuleiro[1][1] != '' && tabuleiro[1][2] != ''&&
    tabuleiro[2][0] != '' && tabuleiro[2][1] != '' && tabuleiro[2][2] != ''){
        limpa()
        tabuleiro = [['', '', ''], ['', '', ''], ['', '', '']];
    }
}

//function jogada is a function made to determinate which player is the current turn player, using odd and even numbers as a mean to determinate it,
//And where the current play was made in the board using the function values "x" and "y" as coordinates in an cartesian plane.

function jogada(x,y){
    if (document.getElementById(String(x)+String(y)).innerHTML=="" && registrado[0] && registrado[1]){
        if (rodada%2==0){
            document.getElementById(String(x)+String(y)).innerHTML='<img src="sprite do acertou mizerave.png" class="imagem">';
            document.getElementById(String(x)+String(y)).style.background='red';
            tabuleiro[y][x]='X';
            rodada++;
            azul()
        }
        else{
            document.getElementById(String(x)+String(y)).innerHTML='<img src="Tabuada-do-2.png" class="imagem">';
            document.getElementById(String(x)+String(y)).style.background='blue';
            tabuleiro[y][x]='O';
            rodada++;
            vermelho()
        }
        vitoria()
        velha()
    }
}

//function nome_do_jogador_X is a function made to get the username inserted by the X Player and put it into the specific HTML element,
//And turns the variable "registrado" into true.   

function nome_do_jogador_X(){
    document.getElementById("visor-do-x").innerHTML="<div class='row text-center'><h2 class='h5 col-sm-12'>"+
    document.getElementById("nome-do-jogador-X").value+
    "</h2> <h2 class='h5 col-sm-12'>Pontos</h2> <h2 class='h5 col-sm-12' id='pontosX'>0</h2></div>"
    registrado[0] = true
    if (rodada % 2 == 0 && registrado[0] && registrado[1]) {
        vermelho()
    }
} 

//function nome_do_jogador_X is a function made to get the username inserted by the O Player and put it into the specific HTML element,
//And turns the variable "registrado" into true. 

function nome_do_jogador_O() {
    document.getElementById("visor-do-O").innerHTML = "<div class='row text-center'><h2 class='h5 col-sm-12'>" +
        document.getElementById("nome-do-jogador-O").value +
        "</h2> <h2 class='h5 col-sm-12'>Pontos</h2> <h2 class='h5 col-sm-12' id='pontosO'>0</h2></div>"
    registrado[1] = true
    if (rodada % 2 == 0 && registrado[0] && registrado[1]) {
        vermelho()
    }
}
function vermelho(){
    document.getElementById('site').style.background='rgba(255, 0, 0, 0.241)';
}
function azul(){
    document.getElementById('site').style.background='rgba(0, 13, 255, 0.241)';
}