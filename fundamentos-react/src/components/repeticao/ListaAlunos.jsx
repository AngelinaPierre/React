/* eslint-disable import/no-anonymous-default-export */
// import react
import React from 'react'

// import componentes
import alunos from '../../data/alunos.js'

/**
 * AULA 27 - REPETIÇÃO
 * 
 * Vamos criar outra pasta para esse exercicio chamada /repetição e criar um exercicio[listaAlunos.jsx] para mostrarmos uma lista.
 * 
 * FORMA 2 - USANDO UM ARRAY COM INFORMAÇÕES PARA O COMPONENTE
 * 
 * 1) como vamos conseguir transformar esses elementos em um elemento .jsx
 * 2) vamos criar uma constante chamado [li1] (forma bruta)
 * 
 * 
 * FORMA 3 - COMO TRANSFORMA UM ARRAY EM OUTRO ARRAY...
 * 
 * 1) vamos querer um array de <LI>
 * 2) podemos transformar isso usando .map
 * 3) vamos criar uma constante chamada [lis] que ira receber o .map de alunos(pois estamos usando o metodo em cima da lista de alunos.js?), e ira retornar  uma <li1 - tipo a constante> para cada aluno nesse formato.
 * 4) o li1 não eh mais utilizado
 * 
 * Resumo -> Basicamente transformamos uma lista de objetos do tipo ALUNO em trechos de jsx.
 * 
 * 1) Da mesma forma que conseguimos pegar um trecho de .jsx e transformar em uma variavel:
 *          const li1 = (
        <li>
            {alunos[0].id} ) {alunos[0].nome} -> {alunos[0].nota}
        </li>
    )
 *
 *2) Conseguimos pegar um trecho .jsx atraves de uma função .map e transformar esses elementos em TRECHOS .jsx
 *          const lis = alunos.map(aluno => {
        return (
            <li>
                {aluno.id} ) {aluno.nome} -> {aluno.nota}
            </li>
        )
    })
 *
 *
 * FORMA 4 - ATRIBUTO KEY
 * 
 * ==== TERMOS DE PROBLEMAS ====
 * 
 * No colose mostra um erro pois não estamos usando o atributo [KEY]
 * 
 * [key] é importante pois a partir dele o react pode será capaz de detectar as eventuais mudanças que possam acontecer.
 *  -Vamos supor que determinado elemento da lista teve um valor alterado e queremos que isso reflita na interface grafica.
 *  - com a [key] eh mais rapdio do que sem colocar.
 * 
 * Usamos uma propriedade da propria lista como [key] e agora vemos no console que nao da mais nenhum erro.
 * 
 * 1) SE USARMOS O NOME COMO KEY, E TIVERMOS O MESMO NOME DUAS VEZES, TEREMOS UM ERRO POIS TEREMOS DUAS CHAVES DUPLICADAS, E ELA PRECISA SER UNICA.
 * 
 * OBS [>] EM HTML NÃO EH RECONHECIDO LOGO TEMOS QUE USAR SEU CODIGO [&gt;]
 * 
 * 
 * FORMA 5 - USANDO UM STYLE NA UL
 * 
 * 
 * resumo ->>> transformamos um array de objetos [alunos.js] em um array jsx [ListaAlunos.jsx]
 * 
 */

// FORMA 5
export default props => {
    console.log(alunos)
    const alunosLI = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id} ) {aluno.nome} -&gt; {aluno.nota}
            </li>
        )
    })
    return(
        <div>
            <ul style={{ listStyle:"none" }}>
                {alunosLI}
            </ul>
        </div>
    )
}

// FORMA 4
// export default props => {
//     console.log(typeof alunos)
//     const alunosLI = alunos.map(aluno => {
//         return (
//             <li key={aluno.id}>
//                 {aluno.id} ) {aluno.nome} -&gt; {aluno.nota}
//             </li>
//         )
//     })
    
//     return (
//         <div>
//             <ul>
//                 {alunosLI}
//             </ul>
//         </div>
//     )
// }


//FORMA 3
// export default props => {
//     console.log(typeof alunos)
//     const li1 = (
//         <li>
//             {alunos[0].id} ) {alunos[0].nome} -> {alunos[0].nota}
//         </li>
//     )
//     console.log(typeof li1)
//     const lis = alunos.map(aluno => {
//         return (
//             <li>
//                 {aluno.id} ) {aluno.nome} -> {aluno.nota}
//             </li>
//         )
//     })
//     return (
//         <div>
//                 <ul>
//                     {lis}
//                 </ul>
//             </div>
//     )
// }

// FORMA 2
// export default props => {
//     console.log(alunos)
//     const li1 = <li>{alunos[0].id}) {alunos[0].nome} -> {alunos[0].nota}</li>
//     return (
//         <div>
//             <ul>
//                 {li1}
//                 <li>Daniel - 7.7</li>
//                 <li>Carlos - 6.5</li>
//             </ul>
//         </div>
//     )
// }

// FORMA 1
// export default props => {
//     return (
//         <div>
//             <ul>
//                 <li>Ana - 9.7</li>
//                 <li>Daniel - 7.7</li>
//                 <li>Carlos - 6.5</li>
//             </ul>
//         </div>
//     )
// }