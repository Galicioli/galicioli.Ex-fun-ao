function calcularTamanhoTotalCasaEmM2(
    tamanhoSala,
    tamanhoCozinha,
    tamanhoBanheiro,
    tamanhoQuarto,
) {
    const tamanhoTotal = 
      tamanhoSala + tamanhoQuarto + tamanhoCozinha + tamanhoBanheiro;
    console.log('O tamanho da casa é de ${tamanhoTotal}m2');
    return tamanhoTotal;
}
let casa = {
    cor: 'white',
    sala: 15,
    cozinha: 10,
    banheiro: 8,
    quarto: 20,
    calcularTamanhoTotalCasaEmM2: function () {
        const tamanhoTotal = this.sala + this.cozinha + this.banheiro + this.quarto;
        console.log('O tamanho da casa é de ${tamanhoTotal}m2');
        return tamanhoTotal;
    },
};
calcularTamanhoTotalCasaEmM2(
    casa.sala,
    casa.cozinha,
    casa.banheiro,
    casa.quarto
);



let a = 2;
a.toExponential;




let A =2.000001;
 console. log (A);
 console.log(a.toFixed());

 let  l = 2.000001
 console.log( l )
 console.log (a.toFixed(3));
 console.log(a.toFixed());


 let b =" texto de hoje é isso ";
 console.log(b.charAt(2));



 let B = 'texto de aula ';
 console.log(b.concat('que eu ja dominei totalmente'));


 let j ='texto da aula';

 console.log (b.slice('da'));


 let k = ' texto da aula de hoje ';

 console.log (b.slice(''));



 let c = '';
 console.log (Number.parseInt(c));