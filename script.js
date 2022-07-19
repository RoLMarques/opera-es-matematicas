const NumberOne = Number (prompt ("Digite o primeiro número abaixo"))
const NumberTwo = Number (prompt ("Digite o segundo número abaixo"))

const soma = NumberOne + NumberTwo
const subtracao = NumberOne - NumberTwo
const multiplicação = NumberOne * NumberTwo
const divisao = NumberOne / NumberTwo
const resto = NumberOne % NumberTwo

{
    if (NumberOne == NumberTwo){
        alert ("Os dois números são iguais.")
    }
    
    else {
        alert ("Os dois números são diferentes.")
    }
    }

alert ("A soma dos dois números é" + "\n" + soma)
{
    if(soma % 2 === 0){
    alert ("A soma dos dois números é par.")
    }
    
    else {
        alert ("A soma dos dois números é impar.")
    }
    }

alert ("A subtracao dos dois números é" + "\n" + subtracao)
alert ("A multiplicacao dos dois números é" + "\n" + multiplicação)
alert ("A divisao dos dois números é" + "\n" + divisao)
alert ("A resto dos dois números é" + "\n" + resto)



