import {somar, subtrair, dividir, multiplicar} from './calculos.js';

document.querySelector('#somar').addEventListener('click', () =>{
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    document.getElementById('total').innerHTML = 'Total: '+somar(parseFloat(num1), parseFloat(num2))
});

document.querySelector('#subtrair').addEventListener('click', () =>{
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    document.getElementById('total').innerHTML = 'Total: '+subtrair(parseFloat(num1), parseFloat(num2))
});

document.querySelector('#dividir').addEventListener('click', () =>{
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    document.getElementById('total').innerHTML = 'Total: '+dividir(parseFloat(num1), parseFloat(num2))
});

document.querySelector('#mult').addEventListener('click', () =>{
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    document.getElementById('total').innerHTML = 'Total: '+multiplicar(parseFloat(num1), parseFloat(num2))
    
});