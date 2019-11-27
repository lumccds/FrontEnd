var N = prompt("Digite o valor de N: ");
var htmlgerado;

for (i = 1; i <= N; i++){
    if (i % 2 == 0) {
        i+"^ 2 = "+(i*i)+"</br>";
    }
}

htmlgerado += "<div class='row'>";
htmlgerado += "<div class='col-md-12'>"+i+"</div>";
htmlgerado += "</div>";

document.getElementById("potencias").innerHTML = htmlgerado;