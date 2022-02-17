/* eslint-disable import/no-anonymous-default-export */
/**
 *      AULA 20 - DESAFIO NUMERO ALEATORIO
 * 
 * Criar um novo componente dentro de components/basicos, e chama-lo de [aleatorio.jsx].
 * 
 * Esse componentes ira pegar um valor maximo e um valor minimo que iremos passar como parametro via propriedades, e sortear um numero entre esse maximo e minimo de forma aleatoria
 * 
 * Pesquisar numero aleatorio javascript entre dois valores
 * 
 * math.randon() -> pesquisar.
 * 
 * FORMA 1 -> Este exemplo retorna um número entre dois valores definidos. O valor retornado será maior ou igual a min, e menor que max.
 * 
 * FORMA 2 ->Este exemplo retorna um número inteiro entre dois valores definidos. O valor não poderá ser menor que min (ou do próximo inteiro maior que min, caso min não seja inteiro), e será menor (mas não igual) a max.
 * 
 * FORMA 3 -> A função [getRandomInt()] acima tem intervalo com o valor mínimo incluído e o máximo excluído. Mas se você precisar que a função inclua, tanto o mínimo quanto o máximo, em seus resultados? A função [getRandomIntInclusive()] abaixo faz isso.
 * 
 * 
 * FORMA 4 - PROFESSOR
 * 
 * Existe uma tecnica chamada DESTRUCTIring  que significa ler atributos dentro de um objeto (props = objeto)
 * 
 * parInt = transforma o valor em inteiro
 * 
 * FORMA 5 -> USANDO O DESTRUCTORING
 * 
 * criar uma constante com um par de {chaves} a direita da expressão equivale a um objeto.
 * 
 * destructoring em cima de arrays
 *          const [a, b] = [1, 2] -> arrays []
 *          const {c, d, x} = {c:12 , d:45, x='teste'}  -> objeto {}
 */

// imports
import React from 'react'

// FORMA 5
export default props => {
    const {min , max} = props
    const ale = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Valor Aleatorio</h2>
            <p>
                <strong> Valor Minimo: </strong> {min}
            </p>
            <p>
                <strong>Valor Maximo: </strong> {max}
            </p>
            <p>
                <strong>Valor Escolhido: </strong>{ale}
            </p>
        </div>
    )
}


// FORMA 4
// export default props => {
//     const min = props.min
//     const max = props.max
//     // formula do valor aleatorio entre dois numeros inteiros
//     const ale = parseInt(Math.random() * (max - min)) + min
//     return (
//         <div>
//             <h2>Valor Aleatorio</h2>
//             <p>
//                 <strong> Valor Minimo: </strong> {min}
//             </p>
//             <p>
//                 <strong>Valor Maximo: </strong> {max}
//             </p>
//             <p>
//                 <strong>Valor Escolhido: </strong>{ale}
//             </p>
//         </div>
//     )
// }


// FORMA 3
// export default function GetRandom(min, max) {
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// FORMA 2
// export default function GetRandom(min, max) {
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max - min)) + min
// }

// FORMA 1
// export default function GetRandom (min, max) {
//     return Math.random() * (max - min) + min
// }


