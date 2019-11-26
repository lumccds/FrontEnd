var salMin = prompt("Digite o valor do Salario Minimo");
var qtdKW = prompt("Digita a quantidade de KW");

var valor1KW = salMin / 700;
var valorTotal = valor1KW * qtdKW;
var valorDesc = valorTotal * 0.9;

document.write("Valor de 1KW: R$ "+valor1KW+"<br/>");
document.write("Valor total da conta: R$ "+valorTotal+"<br/>");
document.write("Valor com 10% de desconto: R$ "+valorDesc+"<br/>");

console.log("Valor de 1KW: R$ "+valor1KW);
console.log("Valor total da conta: R$ "+valorTotal);
console.log("Valor com 10% de desconto: R$ "+valorDesc);

alert("Valor de 1KW: R$ "+valor1KW);
alert("Valor total da conta: R$ "+valorTotal);
alert("Valor com 10% de desconto: R$ "+valorDesc);