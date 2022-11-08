/*
const estudante = {
    nome: "Taya",
    sobrenome: "Alves",
    numeroMatricula: 1515,
    notasSemestre: [8, 10]
}

estudante.modulo = "JavaScript"
console.log(estudante)
console.log(estudante.nome)
console.log(estudante.notasSemestre[1])
console.log(estudante.modulo)

const estudante2 = {
    ...estudante,
    nome: "Astrodev",
    notasSemestre: [...estudante.notasSemestre, 9],
    modulo: "HTML"
}

console.log(estudante2)

const estudantesLabenu = [estudante, estudante2]
console.log(estudantesLabenu[0])
console.log(estudantesLabenu[0].nome)

const meuObjeto = {
    nome:"Anderson",
    idade: 20,
    carros: [
        {marca: "fiat", modelo:"uno"}, 
        {marca:"bmw", modelo:"x1"}, 
        {marca:"bmw", modelo:"x6"}
    ]
}

console.log(meuObjeto.carros[1].modelo) 

*/

// Exercício de fixação

const carrinho = {
    nome: "Taya",
    formaPagamento: "Cartão de crédito",
    endereço: "Rua Aquidaban, nº 202",
    compras: [{
        nomeProduto: "Vestido",
        preçoProduto: 70.00.toFixed(2),
        quantidade: 1
},
{
    nomeProduto: "Sandália",
    preçoProduto: 220.00.toFixed(2),
    quantidade: 1
},
{
    nomeProduto: "Celular",
    preçoProduto: 2250.00.toFixed(2),
    quantidade: 1

}]
}

console.log(carrinho.compras.length)
console.log(carrinho.compras)

const carrinhoPresente = {
    ...carrinho,
    nome: "Tilápia",
    formaPagamento: "Cartão presente"
}

console.log(carrinhoPresente)