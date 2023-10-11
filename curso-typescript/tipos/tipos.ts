// string
let nome = 'Joao' // nome passa a ser do tipo string de forma implicita
console.log(nome)

// Numbers
let idade: number = 27.5
// idade = 'Ana' // ERRO
console.log(idade)

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1 // ERRO
console.log(possuiHobbies)

// Tipos explicitos

let minhaIdade: number
minhaIdade = 27 // tipo dinamico
console.log(typeof minhaIdade)
// minhaIdade = 'Idader é 27'
// console.log(typeof minhaIdade)

// Array
let hobbies: any[] = ['Cozinhar', 'Esporte']
console.log(hobbies[0])
console.log(typeof hobbies)
hobbies = [100]
console.log(hobbies)

// Turplas - array de uma quantidade pré definida de tipos
let endereco: [string, number, string] = ['Av Principal', 206, '']
console.log(endereco)
// endereco = ['Rua 2', 100, 'Bloco A']


// Enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 1
    Azul = 2, // 2
    Laranja,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { 
    marca: 'BMW',
    ano: 2019 
}
console.log(carro)