function realizaContinhas() {
    var salario = document.getElementById("salario").value;
    var imposto = 0;

    if (salario <=1000) {
        imposto=0;
    } else {
        if (salario > 1000 && salario <= 2500){
            imposto=salario*0.125;
        }
        else{
            if(salario > 2500 && salario < 5000){
                imposto=salario*0.25;
            }
            else{
                if(salario >= 5000){
                    imposto=1300;
                }
            }
        }
    }
    return imposto;
}

function calculaSalario(){
    var salario = document.getElementById("salario").value;
    var imp = realizaContinhas();
    var total = salario-imp;
    document.getElementById("resultado").innerHTML = "Seu imposto é: R$" +imp+"</br>Seu salário Total é: R$ "+total;
}