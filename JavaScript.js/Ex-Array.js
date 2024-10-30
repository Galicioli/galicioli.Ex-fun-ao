/////////////////////////////////////////////Nível Fácil/////////////////////////////////////////////////////////////////////////////////////////////////////////


///ex:1 

let numeros = [0, 100, 2]
console.log(numeros[1])




//ex:2

const array = ["Águia", "Burro", "Cabra", "Urso", "macaco"];
console.log(array[0]); 




//ex:3

const array2 = [10, 20, 30, 40, 50]; 
array2[3] = 100; 
console.log(array2[3]); 




///ex:4

const array1 = ["amora", "Açaí", "pera", "uva", "melancia", "melao" , "Acerola" ,"cacau"];
console.log(array1.length)




//ex:5

let numeross = [1, 1, 1, 50, 1]; 

let soma = 0;

for (let i = 0; i < numeross.length; i++) {
    soma += numeross[i]; 
}

console.log(soma);




///ex:6

let meuArray = [1, 2, 3, 4, 5];
meuArray.pop(0);
console.log(meuArray);



///ex:7

let frutas = ['florido', 'flores', 'flor'];


frutas.unshift('Buquê');


console.log(frutas);
