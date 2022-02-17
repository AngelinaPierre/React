/* eslint-disable import/no-anonymous-default-export */
// import react
import React from 'react'

// import dos produtos.
import produtos from '../../data/produtos'

// import do style
import './TabelaProdutos.css'

/**
 * AULA 28 - DESAFIO REPETIÇÃO
 * 
 * 1) Dentro da pasta de /data temos que criar um arquivo chamado produtos.js
 * 2) produtos.js tera 3 atributos: id, nome e preço
 * 3) Dentro da pasta /repeticao vamos criar uma arquvo chamado tabelaProdutos.jsx
 * 4) Dentro do tabela produtos temos que criar uma tabela com esses produtos.
 * 
 * FORMA PROFESSOR 2
 * 
 * 1) outra forma de fazer eh criando uma função fazendo uma interpolação depois.. função dentro de função.
 *          function getLinhas(){
        return produtos.map(produto => {
            return (
                <tr>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        })
    }
 * 2) Podemos tbm fazer alterações nos valores, exemplo quantidade de casas decimais... 
//                     <td>R$ {produto.preco.toFixed(2)}</td> 
 *          
 * FORMA PROFESSOR 3
 * 1) substituindo virgula por ponto.
 * 
 * STYLE -  forma 4 - aplicando classe de forma condicional
 * 1) Criar arquivo css chamado TabelaProdutos.css
 * 2) importa ele no TabelaProdutos.jsx
 * 3) criamos um propriedade no TabelaProdutos.css chamda .Par vamos aplica-la de forma condicional...
 * 4) agora temos uma class que faz com que so coloque estilo em locais pares na tabela.
 * 
 * FORMA 5 IMPAR 
 * 
 * OBS => PODEMOS USAR O INDICE[I] QUE GEROL A LISTA COMO [KEY]
 * 
 *  OBS2 => Comparação restrita, quando não so queremos comparar o valor como o tipo.
 *      console:
 *          >>> '2' == 2 -> true
 *          >>> '2' == 2 -> false
 * 
 */
// FORMA 5 IMPAR E PAR
export default props =>{
    function getLinhas() {
        return produtos.map((produto,i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco.toFixed(2).replace('.',',')}</td>
                </tr>
            )
        })
    }
    return(
        <div className="TabelaProdutos">
            <p>Tabela Produtos</p>
            <table border="2">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>PRODUTO</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}

// FORMA PROFESSOR 4
// export default props =>{
//     function getLinhas() {
//         return produtos.map((produto,i) => {
//             return (
//                 <tr key={produto.id} className={i % 2 == 0 ? 'Par' : ''}>
//                     <td>{produto.id}</td>
//                     <td>{produto.nome}</td>
//                     <td>{produto.preco.toFixed(2).replace('.',',')}</td>
//                 </tr>
//             )
//         })
//     }
//     return(
//         <div className="TabelaProdutos">
//             <p>Tabela Produtos</p>
//             <table border="2">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>NOME</th>
//                         <th>PRODUTO</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {getLinhas()}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// FORMA PROFESSOR 3
// export default props => {
//     function getLinhas(){
//         return produtos.map(produto => {
//             return (
//                 <tr key={produto.id}>
//                     <td>{produto.id}</td>
//                     <td>{produto.nome}</td>
//                     <td>{produto.preco.toFixed(2).replace('.',',')}</td>
//                 </tr>
//             )
//         })
//     }
//     return(
//         <div className="TabelaProdutos">
//             <p>Tabela de Produtos</p>
//             <table border="2">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>NOME</th>
//                         <th>PREÇO</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {getLinhas()}
//                 </tbody>
//             </table>
//         </div>
//     )
// }


// FORMA PROFESSOR 2
// export default props => {
//     function getLinhas() { // criando função 
//         return produtos.map(produto => { // transformando ela e criando outra função
//             return (
//                 <tr key={produto.id}>
//                     <td>{produto.id}</td>
//                     <td>{produto.nome}</td>
//                     {/* Configurando casas decimais */}
//                     <td>R$ {produto.preco.toFixed(2)}</td> 
//                 </tr>
//             )
//         })
//     }
//     return (
//         <div>
//             <p>Tabela de Produtos</p>
//             <table border="2">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>NOME</th>
//                         <th>PREÇO</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                         {getLinhas()}
//                     </tbody>
//             </table>
//         </div>
//     )
// }

// FORMA PROFESSOR 1
// export default props => {
//     function getLinhas() {
//         return produtos.map(produto => {
//             return (
//                 <tr>
//                     <td>{produto.id}</td>
//                     <td>{produto.nome}</td>
//                     <td>R$ {produto.preco}</td>
//                 </tr>
//             )
//         })
//     }
//     return (
//         <div>
//             Tabela Produtos
//             <table border="2">
//                 <tr>
//                     <thead>
//                         <th>ID</th>
//                         <th>NOME</th>
//                         <th>PREÇO</th>
//                     </thead>
//                     <tbody>
//                         {getLinhas()}
//                     </tbody>
//                 </tr>
//             </table>
//         </div>
//     )
// }


// MINHA FORMA
// export default props => {
//     console.log(produtos)
//     const produtosTABLE = produtos.map(produto => {
//         return (
//             <tr>
//                     <td> {produto.id} </td>
//                     <td> {produto.nome} </td>
//                     <td> {produto.preco} </td>
//             </tr>
//         )
//     })
//     return (
//         <div>
//             <table>{produtosTABLE}</table>
//         </div>
//     )
// }