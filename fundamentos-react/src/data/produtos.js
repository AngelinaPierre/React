/* eslint-disable import/no-anonymous-default-export */

/**
 * AULA 28 - DESAFIO REPETIÇÃO
 * 
 * 1) Dentro da pasta de /data temos que criar um arquivo chamado produtos.js
 * 2) produtos.js tera 3 atributos: id, nome e preço
 * 3) Dentro da pasta /repeticao vamos criar uma arquvo chamado tabelaProdutos.jsx
 * 4) Dentro do tabela produtos temos que criar uma tabela com esses produtos.
 * 
 * 
 */

// FORMA PROFESSOR -> outra maneira
const produtos = [
    {id: 1, nome:'Caneta', preco: 2.99},
    {id: 2, nome:'Lapis', preco: 1.99},
    {id: 3, nome: 'Ipad', preco: 5899.99},
    {id: 4, nome: 'Samsung S20 Ultra', preco: 6499.99},
    {id: 5, nome: 'Notebook', preco: 7659.9923412},
    {id: 6, nome: 'Caderno', preco: 19.99},
    {id: 7, nome: 'Borracha', preco:49.99},
    {id: 8, nome: 'IMpressora', preco: 889.99},
    {id: 9, nome: 'Monitor 27', preco: 1239.99},
    {id: 10, nome: 'Cadeira', preco: 229.99},

]

export default produtos

// MINHA FORMA
// export default [
//     {
//         id: 1,
//         nome: 'CD-ROM',
//         preco: 10.5
//     },
//     {
//         id: 2,
//         nome: 'PLAYSTATION 2',
//         preco: 12.5
//     },
//     {
//         id: 3,
//         nome: 'NITENTO WII',
//         preco: 13.5
//     },
//     {
//         id: 4,
//         nome: 'INTEL NOTEBOOK',
//         preco: 10.5
//     },
// ]