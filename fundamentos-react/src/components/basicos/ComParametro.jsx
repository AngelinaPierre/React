// PASSANDO PARAMETROS  PARA OS COMPONENTES [INICIO: FORMA 5]

// obs[index.js->div] : Importante deixar na div devidos a alguns erros que podem acontecer.

// IMPORTS
import React from 'react'

/**
 * FORMA 1 - FUNÇÃO NOMEADA (IMPORTAR NO INDEX.JS)
 * 
 * Apos criar no index.js dois parametros (titlo e subtitulo) vamos fazer a função utiliza-los.
 * 
 * FORMA 2
 * 
 * params = passando o parametro (qualquer nome)
 * 
 * console.log(params)---> Vendo o que esta dentro dos parametros. Mostra que é um objeto{} com titulo e subtitulo.
 * 
 * Se temos um objeto podemos usar a forma:
 *      <h2>params.tituilo</h2>
 *      <h3>params.subtitulo</h3>
 * Precisamos tbm colocar um par de chaves{} para que esse valor seja interpretado como algo sendo do javascript.
 * 
 * Ao salvar vemos que os valores passados para titulo e subtitulo no index.js estão sendo mostrados.
 * 
 * Atraves da interpolação passamos os valores das propriedades criadas no index.js para a função.
 * 
 * A ideia do componente eh podermos utiliza-lo de varias maneiras possiveis.
 * 
 * Podemos criar e/ou calcular novos dados baseado nos parametros -> forma 6.
 * 
 * ERRO COMUM -> ACHAR QUE CONSEGUIMOS ALTERAR OS VALORES DAS PROPRIEADADES. [forma 7]
 * 
 * Para fazer um processsamento em cima desses parametros criamos uma nova variavel e fazemos as alterações nela.
 * 
 * 
 * 
*/

// FORMA 8 - fazendo processamento antes de renderizar o componente, mas não conseguimos alterar as propriedades.
export default function ComParametro(props) {
    console.log(props)
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    const notaInt = Math.ceil(props.nota) // arredonda o valor para inteiro sempre para mais
    return (
        <div>
            <h2> {props.titulo} </h2>
            <p>
                <strong> {props.aluno} </strong>
                tem nota
                <strong> {notaInt} </strong>
                e está
                <strong> {status} </strong>
            </p>
        </div>
    )
}

// FORMA 7 - NÃO DA PARA ALTERAR OS VALORES (erro)
// export default function ComParametro(props){
//     console.log(props)
//     const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
//     props.nota = Math.ceil(props.nota) //
//     return (
//         <div>
//             <h2>{ props.titulo }</h2>
//             <p>
//                 <strong>{ props.aluno }</strong>
//                 tem nota
//                 <strong> { props.nota }</strong>
//                 e esta
//                 <strong> { status }</strong>!
//             </p>
//         </div>
//     )
// }


//FORMA 6 - NOME VARIAVEL PADRÃO PARA PARAMETROS (PROPS)
// export default function ComParametro(props){
//     console.log(props)
//     const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
//     return (
//         <div>
//             <h2>{props.titulo}</h2>
//             <p>
//                 <strong> {props.aluno} </strong>
//                 tem nota
//                 <strong> {props.nota} </strong>
//                 e foi
//                 <strong> {status}</strong>!
//             </p>
//         </div>
//     )
// }


//FORMA 5 - NOME VARIAVEL PADRÃO PARA PARAMETROS (PROPS)
// export default function ComParametro(props){
//     console.log(props)
//     return (
//         <div>
//             <h2>{props.titulo}</h2>
//             <p>
//                 <strong>{props.aluno}</strong>
//                 tem nota
//                 <strong>{props.nota}</strong>
//             </p>
//         </div>
//     )
// }


//FORMA 4 - NOME VARIAVEL PADRÃO PARA PARAMETROS (PROPS)
// export default function ComParametro(props){
//     console.log(props)
//     const sub = props.subtitulo
//     return (
//         <div>
//             <h2>{props.titulo}</h2>
//             <p>{sub}</p>
//         </div>
//     )
// }

//FORMA 3 - NOME VARIAVEL PADRÃO PARA PARAMETROS (PROPS)
// export default function ComParametro(props){
//     console.log(props)
//     return (
//         <div>
//             <h2>{ props.titulo }</h2>
//             <p>{ props.subtitulo }</p>
//         </div>
//     )
// }


// FORMA 2 - USANDO PARAMETROS
// export default function ComParametro(params){
//     console.log(params)
//     return (
//         <div>
//             <h2>{ params.titulo }</h2>
//             <h3>{ params.subtitulo }</h3>
//         </div>
//     )
// }


// FORMA 1 - FUNÇÃO NOMEADA (IMPORTAR NO INDEX.JS)
// export default function ComParametro(){
//     return (
//         <div>
//             <h2>Titulo</h2>
//             <h3>Subtitulo</h3>
//         </div>
//     )
// }

