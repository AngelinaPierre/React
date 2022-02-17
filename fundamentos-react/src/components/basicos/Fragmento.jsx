import React from 'react'


/**
 * AULA 18
 * 
 * FRAGMENTO -> ERRO que recebemos se não envolvermos objetos jsx ().
 * 
 * FORMA 3
 * Se não quisermos usar uma <div> para envolver esses elementos (h2 & p) e quisermos retornar diretamente podemos usar o [react.fragment()]
 * 
 * 
 * FORMA 4
 * Outra forma de sintaxe mais curta para os fragments eh usar <> ... </>
 *         - Se quisermos usar um atributo nao poderá, tera que escrever o <React.Fragment atrivuto="valor">
 * 
 * Não temos como devolver dois elementos adjacentes sem estarem envolvidos em uma tag.
 * 
 */

// FORMA 4
export default function Framento(props) {
    return (
        // não da para usar PROPRIEDADES na tag usando essa sintaxe
        <>
            <h2 className="frag">Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </>
    )
}

//FORMA 3
// export default function Fragmento(props){
//     return (
//         <react.Fragment key='123'>
//             <h2>Fragmento</h2>
//             <p>Cuidado com esse erro!</p>
//         </react.Fragment>
//     )
// }

// forma 2 - erro
// export default function Fragmento(props){
//     return (
//         <h2> Fragmento </h2>
//         <p>Cuidado com esse erro!</p>
//     )
// }

// forma 1
// export default function Fragmento(props){
//     return (
//         <div>
//             <h2>Fragmento</h2>
//             <p>Cuidado com esse erro!</p>
//         </div>
//     )
// }