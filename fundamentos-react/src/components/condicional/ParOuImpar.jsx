/* eslint-disable import/no-anonymous-default-export */
// import react
import React from 'react'

/**
 * AULA 30 - RENDERIZAÇÃO CONDICIONAL #01
 * 
 * Vamos criar uma nova pasta chamada /condicional e criar um arquivo .jsx chamado ParOuImpar.jsx.
 * O mesmo principio utilizado no .css de condição iremos utilizar aqui.
 *       <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco.toFixed(2).replace('.',',')}</td>
                </tr>
 * 
 * Vamos passar um numero como parametro e queremos que msotre se o numero eh par ou impar de acordo com o valor passado
 * 
 * FORMA 1 - A ideia é,vamos receber um numero a partir as propriedades (props), e queremos saber quando vamos exibir que determinado numero é par ou impar baseado em uma renderização condicional.
 * 1) inserir o componente dentro de app.jsx(import)
 * 2) vamos pegar o componente criado e colocar dentro de um <card> em app.jsx
 * 3) colocar a propriedade numero no formto de numero mesmo kkkkkk
 * 
 * FORMA 2
 * 1) No componente, o que precisamos saber? temos um numero e queremos saber se ele é par ou impar...
 *  1.1) Podemos calcular isso:
        const isPar = props.numero % 2 === 0 
 *      Ou seja com essa variavel ou expressão podemos calcular
    1.2) Com essa variavel ou expressão podemos usar um codigo JS na <div> dentro de {chaves}, criando uma OPERATAÇÃO TERNÁRIA (3 valores), onde caso seja par irá mostrar o trecho jsx <span>Par</span> caso contrario <span>Ímpar</span>
 *
 *
 * Na proxima aula vamos criar uma componente [if?] que será usado para fazer a renderização condicional.
 * 
 */
//FORMA 2.2
export default props => {
    const isPar = props.numero % 2 === 0
    return (
        <div>
        { isPar ?
                <span>Par</span> :
                <span>Ímpar</span>
            }
        </div>
    )
}
//FORMA 2.1
// export default props =>{
//     const isPar = props.numero % 2 === 0
//     return (
//         <div>
//             {
//                 isPar ?
//                 <span>Par</span> :
//                 <span>Ímpar</span>
//             }
//         </div>
//     )
// }
// // FORMA 2
// export default props => {
//     const isPar = props.numero % 2 === 0 
//     return (
//         <div>
//             {isPar ? <span>Par</span> : <span>Ímpar</span>}
//         </div>
//     )
// }

// FORMA 1                
// export default props => {
//     return (
//         <div>
//             <span>Par</span>
//             <span>Ímpar</span>
//         </div>
//     )
    
// }
