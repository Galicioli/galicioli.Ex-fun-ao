function pegarComanda(){
    console.log('Olá, boa noite');
    console.log('Pegue aqui a sua comanda!');
    console.log('Bom apetite!!');
    console.log('---------------------');
}

pegarComanda();


let numeroDavez = 1;

function calcularQuadrado(numeroDaVez) {
console.log(`O número da vez é o ${numeroDaVez}`);
console.log(
    `O número da vez (${numeroDaVez}) ao quadrado vale ${numeroDaVez ** 2}`
);

}

calcularQuadrado();

//

function resolverBhaskara(a, b, c) {
    const delta = b ** 2 - 4 * a * c;
    const x1 = (-b + calcularRaizQuadrada(delta)) / (2 * a);
    const x2 = (-b - calcularRaizQuadrada(delta)) / (2 * a);

    console.log(
        `Os dois valores do X dos pontos da parábola no eixo X são ${x1} e ${x2}`
    );
}
 
function calcularRaizQuadrada(base) {
    return base ** (1 / 2);
}

resolverBhaskara(2, 3, -2);

     // exercícios

//ex 1

function saudacao(nome){
    return `Olá ${nome} saudação!`;
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
console.log(`${numero} é ${resultadoParOuImpar}`);


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
console.log(`${tempCelsius}°C é igual a ${tempFahrenheit}°F`);


// ex 6

function calculaMedia(num1, num2, num3) {
    const media = (num1 + num2 + num3) / 3;
    return media;
}

const media = calculaMedia(10, 20, 30);
console.log(`A média é ${media}`);


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

//ex 9

//ex 10

function calcularAreaRetangulo(base, altura) {
    return base * altura;
}

console.log(calcularAreaRetangulo(10, 5));

//ex 1 médio

function verificaPalindromo(palavra) {
    const limpaPalavra = palavra.replace(/\s+/g, '').toLowerCase();
   return limpaPalavra === limpaPalavra.split('').reverse().join('');
}
console.log(verificaPalindromo("ovo"));

//ex 2 médio

function fatorial() {

}

console.log()

//ex 3 médio

function filtraPares() {

}

console.log()

//ex 4 médio

function contaVogais() {

}

console.log()

//ex 5 médio

function ordenaStrings() {

}

console.log()
