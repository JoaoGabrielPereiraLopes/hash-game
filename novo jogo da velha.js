//var tabuleiro is a variable that defines the hash board initial state and it's values. 
var tabuleiro = [['', '', ''],
                 ['', '', ''],
                 ['', '', '']];
//this variable is the round  count
var rodada = 0;
var pontos_x = 0;
var pontos_O = 0;
//this variables is the animacions verify
var animacao=false
var animacao_jogada=false
//var registrado is a variable that defines if either the current player registered an username or not.

var registrado=[false,false]


//function registraX is a function that inserts the X player current point value to the site ,and active the respective animation.

function registraX() {
    document.getElementById("pontosX").innerText = String(pontos_x)
    if (pontos_x>0){
        document.getElementById("vitoriax").innerHTML=`${document.getElementById("nomeX").innerText} venceu`
        document.getElementById("vitoriax").style.animationName='vitoria'
    }
}

//function registraO is a function that inserts the O player current point value to the site, and active the respective animation.

function registraO() {
    document.getElementById("pontosO").innerText = String(pontos_O)
    if (pontos_O>0){
        document.getElementById("vitoriaO").innerHTML=`${document.getElementById("nomeO").innerText} venceu`
        document.getElementById("vitoriaO").style.animationName='vitoria'
    }
}

//function limpa is a function that clears/restarts the board visually after the current match ends.
function vazio(x,y){
    document.getElementById(String(x)+String(y)).innerHTML='';
    document.getElementById(String(x)+String(y)).style.backgroundColor='',1000
    document.getElementById(String(x)+String(y)).style.animationName = '';
    animacao=false
}
function limpa(){
    animacao=true
    for (let x = 0; x < 3; x++){
        for (let y = 0; y < 3; y++){
            document.getElementById(String(x)+String(y)).style.animationName = 'sumindo';
            setTimeout(()=>vazio(x,y),2000)}
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
//this variable clear the animacion in the board cases X
function limpa_animacao_vermelho(x,y){
    document.getElementById(String(x)+String(y)).style.animationName = '';
    document.getElementById(String(x)+String(y)).style.animationDuration ='2s'
    document.getElementById(String(x)+String(y)).style.background='red';
    animacao_jogada=false
    azul()
}

//this variable clear the animacion in the board cases O
function limpa_animacao_azul(x,y){        
    document.getElementById(String(x)+String(y)).style.animationName = '';
    document.getElementById(String(x)+String(y)).style.animationDuration ='2s'
    document.getElementById(String(x)+String(y)).style.background='blue';
    animacao_jogada=false
    vermelho()
}

//function jogada is a function made to determinate which player is the current turn player, using odd and even numbers as a mean to determinate it,
//, where the current play was made in the board using the function values "x" and "y" as coordinates in an cartesian plane.
//and active the animation of victory text
function jogada(x,y){
    if (document.getElementById(String(x)+String(y)).innerHTML=="" && registrado[0] && registrado[1] && !animacao && !animacao_jogada){
        
        if (rodada%2==0){
            document.getElementById(String(x)+String(y)).innerHTML='X';
            document.getElementById(String(x)+String(y)).style.animationName = 'aparecendo_vermelho';
            document.getElementById(String(x)+String(y)).style.animationDuration ='1s';
            animacao_jogada=true
            tabuleiro[y][x]='X';0
            setTimeout(()=>limpa_animacao_vermelho(x,y),600)
            rodada++;
            if(document.getElementById("vitoriax").innerText===`${document.getElementById("nomeX").innerText} venceu`){
                document.getElementById("vitoriax").style.animationName='limpa_vitoria'
                setTimeout(()=>document.getElementById("vitoriax").style.animationName='',450)
                setTimeout(()=>document.getElementById("vitoriax").innerHTML='',450)
            }
            else if(document.getElementById("vitoriaO").innerText===`${document.getElementById("nomeO").innerText} venceu`){
                document.getElementById("vitoriaO").style.animationName='limpa_vitoria'
                setTimeout(()=>document.getElementById("vitoriaO").style.animationName='',450)
                setTimeout(()=>document.getElementById("vitoriaO").innerHTML='',450)
            }
        }
        else{
            document.getElementById(String(x)+String(y)).innerHTML='O';
            document.getElementById(String(x)+String(y)).style.background='blue';
            document.getElementById(String(x)+String(y)).style.animationName = 'aparecendo_azul';
            document.getElementById(String(x)+String(y)).style.animationDuration ='1s';
            animacao_jogada=true
            tabuleiro[y][x]='O';
            setTimeout(()=>limpa_animacao_azul(x,y),600)
            rodada++;
            if(document.getElementById("vitoriaO").innerText===`${document.getElementById("nomeO").innerText} venceu`){
                document.getElementById("vitoriaO").style.animationName='limpa_vitoria'
                setTimeout(()=>document.getElementById("vitoriaO").style.animationName='',450)
                setTimeout(()=>document.getElementById("vitoriaO").innerHTML='',450)
            }
            else if(document.getElementById("vitoriax").innerText===`${document.getElementById("nomeX").innerText} venceu`){
                document.getElementById("vitoriax").style.animationName='limpa_vitoria'
                setTimeout(()=>document.getElementById("vitoriax").style.animationName='',500)
                setTimeout(()=>document.getElementById("vitoriax").innerHTML='',500)
            }
        }
        setTimeout(()=>vitoria(),820)
        setTimeout(()=>velha(),840)
        
    }
}

//function nome_do_jogador_X is a function made to get the username inserted by the X Player and put it into the specific HTML element,
//And turns the variable "registrado" into true.   

function nome_do_jogador_X(){
    document.getElementById("visor-do-x").innerHTML="<div class='row text-center'><h2 class='h5 col-sm-12 'id='nomeX'>"+
    document.getElementById("nome-do-jogador-X").value+
    "</h2> <h2 class='h5 col-sm-12'>Pontos</h2> <h2 class='h5 col-sm-12' id='pontosX'>0</h2> <h1 id='vitoriax'><h1></div>"
    registrado[0] = true
    if (rodada % 2 == 0 && registrado[0] && registrado[1]) {
        vermelho()
    }
} 

//function nome_do_jogador_X is a function made to get the username inserted by the O Player and put it into the specific HTML element,
//And turns the variable "registrado" into true. 

function nome_do_jogador_O() {
    document.getElementById("visor-do-O").innerHTML = "<div class='row text-center'><h2 class='h5 col-sm-12' id='nomeO'>" +
        document.getElementById("nome-do-jogador-O").value +
        "</h2> <h2 class='h5 col-sm-12'>Pontos</h2> <h2 class='h5 col-sm-12' id='pontosO'>0</h2> <h1 class='h3' id='vitoriaO'><h1> </div>"
    registrado[1] = true;
    if (rodada % 2 == 0 && registrado[0] && registrado[1]) {
        vermelho()
    }
}

//this function active the animation to the change the background to red in the X round
function rodada_vermelha(){
    document.getElementById('site').style.animationName='rodada_vermelho';
    animacao=true;
}

//this function active the animation to the change the background to blue in the O round
function rodada_azul(){
    document.getElementById('site').style.animationName='rodada_azul';
    animacao=true;
}

//this function finaly the animation to the change the background
function limpa_rodada(){
    document.getElementById('site').style.animationName='';
    animacao=false;
}

//this function call the rodada_vermelha and change definitily background to red
function vermelho(){
    rodada_vermelha()
    setTimeout(()=>limpa_rodada(),700)
    setTimeout(()=>document.getElementById('site').style.background='rgb(77, 2, 2,0.9)',700)
}

//this function call the rodada_vermelha and change definitily background to blue
function azul(){
    rodada_azul()   
    setTimeout(()=>limpa_rodada(),700)
    setTimeout(()=>document.getElementById('site').style.background='rgba(22, 2, 77, 0.9)',700)
}