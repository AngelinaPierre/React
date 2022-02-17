/* eslint-disable import/no-anonymous-default-export */

// import react
// import react from 'react'
import React, { cloneElement } from 'react'

// importando componente familia
// import FamiliaMembro from './FamiliaMembro'

/***
 * AULA 26 - COMPONENTE COM FILHO #02
 * 
 * FORMA 1 -> AULA PASSADA
 * 
 * vamos tornar as coisas um pouco mais complicados no que diz respeito a conseguirmos passar as propriedades do elemento PAI para os FILHOS
 * 
 * Na aula passada criamos o componente familia. Temos um relação direta, onde a propria familia tem a relação/referencia direta para os membros da familia, e conseguimos passar os atributos diretamente do pai para o filho usando props (spreding)-> {...props}
 * 
 * Vamos agora referenciar de uma maneira diferente passando {props.children}
 * 
 * FORMA 2 - REFERENCIANDO COM {PROPS.CHILDREN}
 *
 *      1) retira o import de FamiliaMembro
 *      2) dentro do app.jsx vamos passar os membros no corpo da <Familia> e importar o componente FamiliaMembro.jsx
 * 3) Se salvarmos como esta agora, teremos um problema, pois nao temos {props} em nenhum local. Não estamos recebendo {props} e dessa forma nao temos como pegar as informações do componente pai parA o filho.
 * 
 * FORMA 3 - tirando o props
 * 
 * 1) apos retirarmos o props vemos que nosso componente será renderizado.
 * 2) para colocarmos o sobrenome que colocamos no componente familia para o componente familiaMembro vamos ter que fazer um trabalho no componente familia.jsx 
 * 3) Conseguimos acessar metodos, inclusive os do react. Vamos ter que comentar os membros da familia colocados no app.jsx pois no caso que vamos fazer agora, so funciona com um unico elemento.
 * 4) METODO -> {React.cloneElement(props.chiuldren)}
 * 
 * FORMA 4 e 5 - SIMPLIFICANDO O CLONE ELEMENT
 * 
 * 1) temos que alterar o import:
        import React, { cloneElement } from 'react'
 * 2) Podemos passar como segundo parametro(primeiro eh o elemento) as props como parametros opcional. Então se pegarmos as propriedades do pai e passar como parametro, normalmente criamos um clone do objeto e usamos o operador spread para clonar a propriedade de forma que o filho terá acesso ao sobrenome.
 * 3) passamos as propriedades do pai para o filho depois de clonar o elemento.
 * 
 * FORMA 6/7 - Como passar mais de 1 elemento...
 * 
 * 1) Podemos usar o React.Children , nela possui uma função chamada MAP, que recebe os props.children e uma função que recebe o proprio elemento
 * 2) nessa função vamos retornar um cloneElement pegando o elemento atual criado (el) e passando no segundo parametro as propriedades do pai.
 * 3)[.map] serve para mapear um determinado array em outro array.
 * 4) essa forma que temos que fazer quando nao temos acesso direto ao filho.
 * 
 * FORMA 8 - USANDO O CONSOLE.LOG PARA VER O TIPO DE PROPS
 * 
 * FORMA 9 -  COMO O PROS.CHILDREN POSSUI O METODO .MAP, PODEMOS COLOCAR ELE DIRETO EM VEZ DE COLOCAR O REACT.CHILDREN
 * 1) RECEBEMOS UM ERRO:
 *      react-jsx-dev-runtime.development.js:117 Warning: Each child in a list should have a unique "key" prop.
 * 2) MESMO ASSIM ELE RODA
 * 
 * FORMA 10 - COMO NO .MAP TBM RECEBEMOS O INDICE (I) PODEMOS CRIAR UM OBJETO PARA CLONAR AS PROPRIEDADES DO PAI E AI IRA PEDIR PARA PASSAR UM ATRIBUTO CHAMADO [KEY], VAMOS PASSAR O ATRIBUTO, MAS NA PROXIMA AULA VAMOS APRENDER A TRABALHAR COM LISTAS E ENTEDNER A O ATRIBUTO [KEY]
 * 1) ESSE ATRIBUTO NO CASO ATUAL IRA APONTAR PAR AO VALOR DE [I] INDICE
 * 2) vemos agora pelo console que não temos mais o erro anterior da [key]
 * 3) se formos no app.jsx e mudar o sobrenome veremos que todos os lementos vao mudar tbm.
 */

// FORMA 10
export default props => {
    console.log(typeof props.children)
    console.log(typeof props.children.map)
    return (
        <div>
            {
                props.children.map((child, i) =>{
                    return cloneElement( child, {...props, key: i})
                })
            }
        </div>
    )
}

// FORMA 9
// export default props => {
//     console.log(typeof props.children)
//     console.log(typeof props.children.map)
//     return (
//         <div>
//             {
//                 props.children.map((child) =>{
//                     return cloneElement(child, props)
//                 })
//             }
//         </div>
//     )
// }


// FORMA 8
// export default props => {
//     console.log(typeof props.children)
//     console.log(typeof props.children.map)

//     return (
//         <div>
//             {
//                 react.Children.map(props.children, child => {
//                     return cloneElement(child, props)
//                 })
//             }
//         </div>
//     )
// }


//forma 7
// export default props => {
//     return (
//         <div>
//             {
//                 React.Children.map(props.children, child => {
//                     return cloneElement(child, props)
//                 })
//             }
//         </div>
//     )
// }

// FORMA 6
// export default props => {
//     return (
//         <div>
//             {
//                 React.Children.map(props.children, (el) =>{
//                     return cloneElement(el,props)
//                 })
//             }
//         </div>
//     )
// }

// FORMA 5
// export default props => {
//     return (
//         <div>
//             {cloneElement(props.children, props)}
//         </div>
//     )
// }

//FORMA 4
// export default props => {
//     return (
//         <div>
//             {cloneElement(props.children, {...props})}
//         </div>
//     )
// }

// FORMA 3
// export default props => {
//     return (
//         <div>
//             {React.cloneElement(props.children)}
//             {/* {Array(10).fill(7)}
//             {30*10} */}
//             {props.children}
//         </div>
//     )
// }


// FORMA 2
// export default props => {
//     return (
//         <div>
//             {props.children}
//         </div>
//     )
// }

// FORMA 1
// export default props => {
//     return (
//         <div>
//             <FamiliaMembro nome="Angelina" sobrenome={props.sobrenome} />
//             <FamiliaMembro nome="Santa" {...props} />
//             <FamiliaMembro nome="Bruno" sobrenome="Silva" />
//         </div>
//     )
// }



/**
 * AULA 25 - COMPONENTE FILHO #01
 *
 * Vamos Primeiro criar o componente FAMILIA
 *
 * FORMA 1
 *
 * Temos que importar o FamiliaMembro.jsx para dentro de familia.jsx
 *
 * Colocamos 3 componentes de FamiliaMembro.jsx dentro de Familia.jsx
 *
 * No App.jsx vamos Adicionar esse compoente.
 *
 * FORMA 1 - PASSANDO NOMES DE MANEIRA FIXA
 *
 * FORMA 2 - PASSANDO NOMES POR PROPS (PROPRIEDADES)
 *
 * FORMA 3 - SOBRENOMES IGUAIS
 *
 * Vamos simular que o sobrenome dos membros da familia sejam iguais, vamos passa esse parametro de outra maneira:
 *  - Em App.jsx onde criamos o componente familia dentro do card, vamos querer passar o sobrenome dessa familia:
 * Passamos o sobrenome para o componente <Familia /> agora iremos querer ler os nomes nos membros da familia.
 * - Queremos passar a propriedade [sobrenome="Pierre"] do componente <Familia/> para o componente <FamiliaMembro />
 *
 * Se retirarmos o parametro de sobrenome nesse arquivo veremos que a propriedade de sobrenome do familia não foi passada... isso acontece pq parametros de componentes pais e filhos não são passados automaticamente.;
 *
 * Outra forma de fazer eh utilizando um operador chamado SPREDING -> {...props}
 *  - props sendo um objeto conseguimos espalhar para determinada tag
 *
 * Passar propriedades não eh automatico, tem quer ser de forma explicita.
 *
 */

// FORMA 3
// export default props => {
//     return (
//         <div>
//             <FamiliaMembro nome="Angelina" sobrenome={props.sobrenome} />
//             <FamiliaMembro nome="Santa" {...props} />
//             <FamiliaMembro nome="Bruno" sobrenome="Silva" />
//         </div>
//     )
// }

// FORMA 2
// export default props => {
//     return (
//         <div>
//             <FamiliaMembro nome="Angelina" sobrenome="Pierre" />
//             <FamiliaMembro nome="Santa" sobrenome="Kaya" />
//             <FamiliaMembro nome="Bruno" sobrenome="Luis" />
//         </div>
//     )
// }

// FORMA 1
// export default props => {
//     return (
//         <div>
//             <FamiliaMembro />
//             <FamiliaMembro />
//             <FamiliaMembro />
//         </div>
//     )
// }