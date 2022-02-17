/*eslint-disable import/no-anonymous-default-export */
//IMPORT REACT
import React from 'react'
//IMPORT COMPONENTES
import If, {Else} from './If'

/**
 * AULA 32 - RENDERIZAÇÃO CONDICIONAL #03
 * 
 * Vamos fazer a renderização com [if|else]
 * 
 * Para funcionar precisaremos fazer algumas alterações:
 *  1) if.js > vamos exportar uma constante [else] com um componente funcional que ira retornar um props.children, ira passar propriedades que foram passadas para o componente...
 *  2) Como fazemos para importar um compoente que so possui um export....
 *      - Estavamos fazendo o export default
 *      - No import do If, iremos colocar tbm o import do componente...
                import If, {Else} from './If'
 *  3) PERCEBA QUE ESTA APARECENDO AS DUAS CONDIÇÕES, TEREMOS QUE MECHER NO NOSSO IF PARA CONFIGURAR NESSE SENTIDO.
 * 
 * FORMA 1
 * 
 * Nosso componente <IF> possui um componente filho <Else>, para termos acesso a esse componente criamos uma variavel [elseChild] que fara uma filtragem dos filhos desse componente....
    const elseChild = props.children.filter(child)
 *      Child => será uma função onde colocaremos a condição.
        se child.type.name for igual a 'Else' teremos o componente [elseChild] que ira retornar um array, mas queremos pegar somente o primeiro [Else] -> para isso  [0]
        const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
        })[0]
        
        Caso o primeiro elemento do array nao exista irá retornar um undefined.
 * 
 * 1) vimos no console que o elemento[Else] existe como um objeto, caso não encontre o elemento será tratado como undefined.
 * 
 * // FORMA 2
 * 
 * Não queremos mostrar o Else caso não seja condição dele, para isso temos que criar um if para comprar com o primeiro valor da constante para elseChild que criamos
 * 
 *  1) Agora nesse caso em vez de retornar o props.children vamos retornar o ifCHildren apenas...
 * --- Agora vemos que criamos uma estrutura condicional com if/else
 *
 * FORMA 3 - MOSTRANDO SOMENTE O ELSE CASO SEJA VERDADEIRO....
 * 
 */

// FORMA 1
export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem-vinda(o) <strong>{usuario.nome}</strong>!
                <Else>
                    Seja bem-vinda(o) <strong>Anonimo</strong>!
                </Else>
            </If>
        </div>

    )
}



/***
 * AULA 31 - RENDERIZAÇÃO CONDICIONAL #02
 * 
 * Vamos fazer um COMPONENTE para nos ajudar na renderização condicional
 * 
 * Aula passada fizemos uma renderização condicional usando um OPERADOR TERNARIO. Agora iremos criar um componente e a partir dele conseguirmos renderizar um trecho .jsx ou não.
 * 
 * Vamos criar um arquivo em /condicional>If.js ou js tanto faz
 * 
 * FORMA 1 
 * 
 * Inicialmente vamos criar um componente funcional simples.
 * 
 * A ideia é criar um componente com uma propriedade chamada teste, e nessa proprriedade teramos uma expressão que pode ser verdadeira ou falsa.
 * [Verdadeira] -> Conteudo de <span> será exibido.
 * [Falsa] -> Nada será renderizado
 *      <If test={expressão}> ============componente
 *          <span>...</span>  ============filhos do componente
 *          <span>...</span>
 *          <span>...</span>
 *      </If>
 *      <If test={aluno.nota >= 7}> ============componente
 *          <span>...</span>  ============filhos do componente
 *          <span>...</span>
 *          <span>...</span>
 *      </If>
 * 
 * [props.children] -> Selecionar os elementos que foram passados no corpo de um componente.
 *  Retorno do if(props.test)
 *      <span>...</span>
 *      <span>...</span>
 *      <span>...</span> 
 * 
 * Vamos criar outro componente chamado UsuarioInfo.js para testar nosso compoennte if...
 * 
 * FORMA 1
 * 
 * Caso nao tenha usuario vamos mostrar outra coisa
 * 
 * 1) Importa componente dentro de [App.jsx]
 * 2) Vamos apssa a propriedade usuario, lebrando que o primeiro par de {} é para termos um trecho que será interpretado em JS, e o segundo é oara indicar que queremos criar um objeto que representa um usuario.
 * 3) apos modificação, em usuarioInfo.jsx vamos colocar o {props}para acessar.... 
 * 
 * FORMA 2
 * 
 * [OBS] -> Podemos nos precaver caso tentem acessar um objeto que nao existe ou caso nao digitem nada.
 *      No lugar das {} podemos tbm colocar um valor padrão para impedir o acesso...
 * 
 * FORMA 3 - importando o componente <If>
 * 
 * 1) importar o componente e envolver na resposta aplicando o teste
 * 2) [teste] recebe se usuario estiver setado e usuario.nome for valido;
 *      test={usuario && usuario.nome}
 *  2.1) usuario.nome != de NULL ou VAZIO {}
 * 
 * 3) vamos em App.js criar um novo usuario com email emv ez de nome
 * 
 * FORMA 4
 * 1) Para caso a propriedade usuario não exista, escolhemos o que será exibido em tela.
 * 
 * FORMA 5 - USANDO O ELSE (proxima aula 32)
 * 
 */
// FORMA 5 - proxima aula
// export default props => {
//     const usuario = props.usuario || {}
//     return (
//         <div>
//             <If test={usuario && usuario.nome}>
//                 Seja bem-vinda(o) <strong>{usuario.nome}</strong>!
//                 <Else>
//                     Seja bem-vinda(o) <strong>Anonimo</strong>!
//                 </Else>
//             </If>
//         </div>
//     )
// }
//FORMA 4
// export default props => {
//     const usuario = props.usuario || {}
//     return (
//         <div>
//             <If test={usuario && usuario.nome}>
//                 Seja bem-vinda(o) <strong>{usuario.nome}</strong>!
//             </If>
//             <If test={!usuario || !usuario.nome}>
//                 Seja bem-vinda(o) <strong>Anonimo</strong>!
//             </If>
//         </div>
//     )
// }

//FORMA 3
// export default props => {
//     const usuario = props.usuario || {}
//     return (
//         <div>
//             <If test={usuario && usuario.nome}>
//                 Seja bem-vinda(o) <strong>{usuario.nome}</strong>!
//             </If>
//         </div>
//     )
// }

//FORMA 2
// export default props => {
//     const usuario = props.usuario || {}
//     return (
//         <div>
//             Seja bem-vinda(o) <strong>{usuario.nome}</strong>!
//         </div>
//     )
// }
//FORMA 1
// export default props => {
//     return (
//         <div>
//             Seja bem vindo <strong>{props.usuario.nome}</strong>!
//         </div>
//     )
// }