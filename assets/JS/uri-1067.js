var qtd = prompt("Digite a quantidade de numeros: ")
var htmlgerado = "";

for (i=0; i<= qtd; i++){
    
    if (i %2 != 0){
        htmlgerado += "<div class='row'>";
        htmlgerado += "<div class='col-md-12'>"+i+"</div>";
        htmlgerado += "</div>";   
    }
    if (i == 1 /*|| i-1 == ".linha3"*/){
        htmlgerado+= " 'linhaum'>";
    }
}
document.getElementById("impares").innerHTML = htmlgerado;