//////////////////Baixa Complexidade/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////ex:1

let meuNome = 'galicioli ';
console.log(meuNome);

///ex:2

let operador = 19;
let operador2 = 19;

if (operador == operador2) { console.log('São iguais');
}
else{ console.log('não são iguais');
}


///ex:3 


let numero = 2; 

if (numero > 10) {
    console.log("O número é maior que 10.");}
 else {
    console.log("O número não é maior que 10.");}


///ex:4


let idade = 14; 

if (idade >= 18) {
    console.log("Parabéns!");
} else {
    console.log("Idade abaixo de 18.");
}

///ex:5



let idade1 = 14;

if (idade1 >= 16) {
    console.log("Já pode votar");
} else {
    console.log("idade menor de 16")}

 ///ex:6

 let numero1 = 58; 

if (numero >= 50 && numero1 <= 100) {
    console.log("O número está entre 50 e 100.");
} else {
    console.log("O número não está entre 50 e 100.");
}


////////////Média Complexidade////////////////////////////////////////////////////////////////////////////////////////////////////

///ex:1


let nome = ("Qual é o seu nome?");
let idade2 = ("Qual é a sua idade?");

if (idade2 >= 18) {
    console.log(nome + ", você é maior de idade.");
} else {
    console.log(nome + ", você não é maior de idade.");
}

///ex:2

let numero2 = 95;
let numero3 = 20; 

if (numero2 > numero3) {
    console.log("A maior é: " + numero2);
} else if (numero3 > numero2) {
    console.log("A maior é: " + numero3);
} else {
    console.log("Os números são iguais.");
}



///ex:3

let texto = "ola ";
if (texto.length > 5) {
    console.log("O texto contém mais de 5 caracteres.");
} else {
    console.log("O texto contém menos  de 5 caracteres .");
}

///ex:4  


let number = 8
let number0 = 6

if ( number % 2 === 0 && number0 % 2 === 1){
    console.log (` só ${number} é par`)
}

else if ( number % 2 === 0 && number0 % 2 === 0){
    console.log ( 'os dois numeros são pares')
}

else if ( number % 2 === 1 && number0 % 2 === 1){
    console.log (' os dois são números impares')
}

else (
    console.log (` só o ${number0} é par`)
)



///ex:5 Figma


let frase = 'JavaScript'

if (frase.includes('JavaScript')) {
    console.log('Essa frase tem JavaScript');
}
else {
    console.log('Essa frase não tem JavaScript');
}



///ex: 6 

let salario = 1500

if (salario < 2000) {
    console.log('O salário está abaixo de 2000')
}
else if (salario === 2000) {
    console.log('O  salário é de 2000')
}
else {
    console.log('O salário é maior que 2000')
}
