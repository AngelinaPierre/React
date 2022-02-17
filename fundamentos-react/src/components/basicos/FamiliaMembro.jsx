/* eslint-disable import/no-anonymous-default-export */

// import react
import React from 'react'

/***
 * AULA 26 - COMPONENTE COM FILHO #02
 * 
 * forma 1 - aula passada
 * 
 * 
 */


// FORMA 1
export default props => {
    return (
        <div>
            {props.nome} <strong>{props.sobrenome}</strong>
        </div>
    )
}

/**
 * AULA 25 - COMPONENTE FILHO #01
 *
 * Vamos Primeiro criar o componente FAMILIA
 *
 * FORMA 1 - Passamos o nome e o sobrenome da pessoa de maneira fixa
 *
 * FORMA 2 - Iremos querer passar esses nomes na forma de {props.}
 *
 *
 */


// FORMA 2 -> usando props para pasasr o valor das propriedades.
// export default props => {
//     return (
//         <div>
//             {props.nome} <strong>{props.sobrenome}</strong>
//         </div>
//     )
// }

// FORMA 1 - passando valores fixos
// export default props => {
//     return (
//         <div>
//             Pedro <strong>Silva</strong>
//         </div>
//     )
// }