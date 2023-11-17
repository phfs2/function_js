
function printResultado(){
    return 'O resultado é = ';
}

function soma(num1, num2){
    return num1 + num2;
}

const subtracao = (num1, num2) => num1 - num2;

var sair = false;

do{
    var num1 = parseInt(prompt('Informe o primeiro numero: '));
    var num2 = parseInt(prompt('Informe o segundo numero: '));
    
    var operador = prompt('Informe a operação: ');

    switch(operador){
        case '+':
            var soma = soma(num1, num2);

            alert(printResultado() + soma );
        break;

        case '-':
            var sub = subtracao(num1, num2);

            alert(printResultado() + sub);
        break;

        case '/':
            var div = num1 / num2;
            var resto = num1 % num2;
           if( resto != 0){
               alert(printResultado() + div);
               alert('O resto da divisão é ' + resto)
           }
           else{
                alert('O resultado da divisão é ' + div);
           }
        break;

        case '*':
            var mult = num1 * num2;

            alert(printResultado() + mult);

        break;

        default:
            alert("Operação inválida, tente novamente!");
    }

    var numEscape = parseInt(prompt('Digite: \n1- Operar novamente\n2-Sair'));

    if(numEscape == 2){
        sair = true;
    }


}while(sair == false);