"use strict";
// string
let nome = 'Joao'; // nome passa a ser do tipo string de forma implicita
console.log(nome);
// Numbers
let idade = 27.5;
// idade = 'Ana' // ERRO
console.log(idade);
// boolean
let possuiHobbies = false;
// possuiHobbies = 1 // ERRO
console.log(possuiHobbies);
// Tipos explicitos
let minhaIdade;
minhaIdade = 27; // tipo dinamico
console.log(typeof minhaIdade);
// minhaIdade = 'Idader é 27'
// console.log(typeof minhaIdade)
// Array
let hobbies = ['Cozinhar', 'Esporte'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
// Turplas - array de uma quantidade pré definida de tipos
let endereco = ['Av Principal', 206, ''];
console.log(endereco);
// endereco = ['Rua 2', 100, 'Bloco A']
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja);
// any
let carro = 'BMW';
console.log(carro);
carro = {
    marca: 'BMW',
    ano: 2019
};
console.log(carro);
