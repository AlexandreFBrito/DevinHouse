var n1 = 0;
var n2 = 0;
var resultado = 0;

function somar() {
    if (document.getElementById("n1").value == "" || document.getElementById("n2").value == "") {
        alert('Campo vazio, impossivel realizar a operação');
    } else {
        n1 = eval(document.getElementById("n1").value);
        n2 = eval(document.getElementById("n2").value);
        resultado = n1 + n2;
        //alert('A soma é: '+resultado);
        document.getElementById("resultado").innerHTML = 'Resultado da operação: ' + resultado;
    }

}

function subtrair() {
    if (document.getElementById("n1").value == "" || document.getElementById("n2").value == "") {
        alert('Campo vazio, impossivel realizar a operação');
    } else {
        n1 = eval(document.getElementById("n1").value);
        n2 = eval(document.getElementById("n2").value);
        resultado = n1 - n2;
        //alert('A subtração é: '+resultado);
        document.getElementById("resultado").innerHTML = 'Resultado da operação: ' + resultado;
    }
}

function multiplicar() {
    if (document.getElementById("n1").value == "" || document.getElementById("n2").value == "") {
        alert('Campo vazio, impossivel realizar a operação');
    } else {
        n1 = eval(document.getElementById("n1").value);
        n2 = eval(document.getElementById("n2").value);
        resultado = n1 * n2;
        //alert('A multiplicação é: '+resultado);
        document.getElementById("resultado").innerHTML = 'Resultado da operação: ' + resultado;
    }
}

function dividir() {
    if (document.getElementById("n1").value == "" || document.getElementById("n2").value == "") {
        alert('Campo vazio, impossivel realizar a operação');
    } else {
        n1 = eval(document.getElementById("n1").value);
        n2 = eval(document.getElementById("n2").value);
        resultado = n1 / n2;
        //alert('A divisão é: '+resultado);
        document.getElementById("resultado").innerHTML = 'Resultado da operação: ' + resultado;
    }
}