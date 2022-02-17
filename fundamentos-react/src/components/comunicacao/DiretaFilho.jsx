/* eslint-disable import/no-anonymous-default-export */
//IMPORT REACT
import React from 'react'

/**
 * AULA 33 - COMUNICAÇÃO DIRETA
 * 
 * A nossa aplicação é uma arvore de componentes, temos o componente [app] que ira representar o conteudo da aplicação dentro desse componente de conteudo vamos ter um titulo, alem do titulo podemos ter uma tabela, e ddentro dessa tabela uma thead.
 * 
 * Voce pode quebrar sua aplicação em multiplos componentes sempre visando o re-uso e a organização;
 * 
 * Se temos um componente que precisa ser re-usado, voce coloca ele num trecho e re-usa ele.
 * 
 * Se voce tem um componente que nao precisa ser re-usadoi mas ele eh muito grande, podemos quebrar ele em partes para manter assim a organização.
 * 
 * Dentro dessa arvore de componentes é muito comum termo a COMUNICAÇÃO DIRETA e a COMUNICAÇÃO INDIRETA.
 * 
 * // FORMA 1 -> COMUNICAÇÃO DIRETA
 * 
 * Vamos mostrar que a comunicação direta é feita atraves das props...
 * 
 * Vamos criar um novo componente para isso.. /comunicacao/DiretaPai.jsx
 *                                           /comunicacao/DiretaFilho.jsx
 * 1) Dentro do filho vamos supor que queremos receber algumas informações...
 *      - Vamos ter uma PROPRIEDADE TEXTUAL
 *      - Vamos ter uma PROPRIEDADE NUMERICA
 *      - Vamos ter uma PROPRIEDADE BOOLEANA.
 * 2) A comunicação de um componente pai para um filho é feita passando via [props]/ propriedades o que quremos passar do pai pro filho..
 * 3) À uma relação direta pois dentro do pai temos uma referencia para o componente filho.
 *      - DiretaPai.jsx > import DiretaFilho from './'
 * 4) Agora temos de forma literal uma definição de um componente <DiretaFilho> de tal forma que conseguimos agora passar um texto, um numero, e um valor booleano.
 * 5) O valor booleano no filho pode ser transformado em texto, [VERDADEIRO|FALSO]
 * 6) Dessa forma podemos ir agora no App.jsx e criar um novo card para a comunicação direta.
 * 
 * FORMA 2
 * 1) Em vez de termos um <div> vamos trocar por <span>
 * 2) Podemos no [DiretaPai.jsx] definir novos filhos...
 * 
 * FORMA 3 - COLOCANDO NOMES MAIS SIGNIFICATIVOS [DiretaPai.jsx e DiretaFilho.jsx]
 * 
 * 
 * Quando falamos comunicação estamos dizendo, nos referindo a  troca de informações, ou seja, estamos passando informações do componente pai para o filho via propriedades [props.]
 * 
 * Vimos a comunicação direta quandoc riamos o componente <Familia> onde passavamos as prorpeidades de sobrenome e no <FamiliaMembro> passamos o nome dos familiares.
 *      Nesse caso usamos a função map para passar as propriedades de <familia> para <FamiliaMembro>
 *      {
                props.children.map((child, i) =>{
                    return cloneElement( child, {...props, key: i})
                })
            }
 * 
 * 
 * 
 * 
 */
// FORMA 3 -NOMES MAIS SIGNIFICATIVOS...
export default props => {
    return (
        <div>
            <span>{props.nome} </span>
            <span><strong>{props.idade}</strong> </span>
            <span>{props.nerd ? 'Verdadeiro' : 'Falso'}! </span>
        </div>
    )
}
//FORMA 2
// export default props => {
//     return(
//         <div>
//             <span>{props.texto} </span>
//             <span><strong>{props.numero} </strong> </span>
//             <span>{props.bool ? 'Verdadeiro' : 'Falso' } !</span>

//         </div>
//     )
// }
// FORMA 1
// export default props => {
//     return (
//         <div>
//             <div>
//                 {props.texto}
//             </div>
//             <div>
//                 {props.numero}
//             </div>
//             <div>
//                 {props.bool ? 
//                 'VERDADEIRO' : 
//                 'FALSO'} ! 
//             </div>
//         </div>
//     )
// }