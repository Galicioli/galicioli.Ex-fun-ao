// exercícios

//ex 1

function saudacao(nome){
    return ( `ola ${nome} saudação`);
}

const menssagem = saudacao("galicioli");
console.log(menssagem)


//ex 2

function soma(numero1, numero2){
    return numero1 + numero2}


 const resultado = soma(5, 5)
console.log(resultado);


//ex 3

function parOuImpar(numero) {
    return numero % 2 === 0? "Par" : "Impar";
}

const numero = 10;
const resultadoParOuImpar = parOuImpar(numero);
console.log('${numero} é ${resultadoParOuImpar}');


//ex 4

function multiplica(a, b) {
    return a * b 
}


// ex 5

function celsiusParaFahrenheit(celsius) {
    const fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}
 
const tempCelsius = 25;
const tempFahrenheit = celsiusParaFahrenheit(tempCelsius);
console.log('${tempCelsius}°C é igual a ${tempFahrenheit}°F');


// ex 6

function calculaMedia(num1, num2, num3) {
    const media = (num1 + num2 + num3) / 3;
    return media;
}

const media = calculaMedia(10, 20, 30);
console.log('A média é ${media}');


//ex 7

function minutosParaSegundos(minutos) {
    return minutos * 60;
}

console.log(minutosParaSegundos(5));


//ex 8

function ehPositivo(numero) {
    return numero > 0;
}

console.log(ehPositivo(-3));