var vez = 1;

function joga(idDiv){
    var textoInt = document.getElementById(idDiv).innerHTML;
    if(textoInt == ""){
        if (textoInt != "X" && textoInt != "O"){
            document.getElementById(idDiv).innerHTML="X";
            vez = 2;
        }
        else{
            document.getElementById(idDiv).innerHTML="O";
            vez = 1;
        }
    }
    mostraVez();
}
function mostraVez(){
    document.getElementById("rodape").innerHTML = "<h2> Vez do Jogador"+vez+"</h2>"
}