/* eslint-disable import/no-anonymous-default-export */
//IMPORT REACT
import React from 'react'

/**
 * AULA 35 - COMPONENTES COM ESTADO
 * 
 * Até a versão 16.8 do React não era possivel ter um componente funcional com ESTADO, so podiamos ter ESTADO em um componente baseado em CLASSE.
 *      - para ver a ver~so do react -> package.json -> 
            "react": "^17.0.2",
 * 
 * FORMA 1
 * 
 * A partir dessa versão conseguimos usar ESTADO dentro do componente funcional.
 * 
 * 1) Primeiro vamos importar dentro do React o HOOK [useState] a partir dele conseguimos criar ESTADO dseentro do componente.
 *      1.1) Em vez de simplesmente criar uma variavel vamos cria-la passando o useState
 *      1.2) A função useState irá nos retornar um ARRAY com duas posições (valor , função para alterar o valor)
 *          ex:
 *              const [a,b] = [1,2] | direita = array | esquerda = destructuring
 *      1.3) usando esse principio:
 *          ex:
 *              const [nome, setNome] = useState('?')
 *      1.4) setNome é a função que iremos utilizar para alterar o nome..(não import o nome dado - setNome ´é um padrão conhecido.)
 * 
 * Agora sempre que os dados forem alterador a renderização ira acorrrer;;;
 * 
 *  Agora conseguimos refletir as alterações do componente filho no pai quando geramos uma mudança de estado.
 * 
 * FORMA 2 - GERANDO IDADE NO COMPONENTE FILHO DE FORMA ALEATORIO.
 * 
 * FORMA 3 - FAZENDO O NERD GERAR DE FORMA ALEATORIA.
 * 
 */
// FORMA 3
export default props => {
    const callBack = props.quandoClicar
    const min = 50
    const max = 70
    const gerarIdadeRand = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerdRand = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick = { _ => callBack('Angelina',gerarIdadeRand,gerarNerdRand())}>
                <p>Fornecer Informações.</p>
            </button>
        </div>
    )
}

// FORMA 2
// export default props => {
//     const callBack = props.quandoClicar
//     const min = 50
//     const max = 70
//     const gerarIdadeRand = () => parseInt(Math.random() * (max - min)) + min
//     return (
//         <div>
//             <div>Filho</div>
//             <button onClick = { _ => callBack('Angelina', gerarIdadeRand(), true)}>
//                 <p>Fornecer Informações</p>
//             </button>
//         </div>
//     )
// }

// FORMA 1
// export default props => {
//     const callBack = props.quandoClicar
//     return (
//         <div>
//             <div>Filho</div>
//             <button onClick = { _ => callBack('Angelina', 26, true)}>
//                 <p>Fornecer Informações</p>
//             </button>
//         </div>
//     )
// }


/**
 * AULA 34 - COMUNICAÇÃO INDIRETA
 * 
 * Quando precisamos passar informações do componente filho para o componente pai.
 * 
 * O componente filho não possui uma referencia direta para o componente pai, logo não temos como via propriedade instanciar um componente pai, pq assim o pai passaria a ser o filho e o filho passaria a ser o pai.
 * 
 * Vamos demonstrar isso com 2 exemplos, um pelo console e na px aula, vamos criar um compoente com estado.
 * 
 * Ja que não vamos trabalhar com prorpriedade vamos trabalhar com o estado do componente
 * 
 * Vamos criar 2 arquivos /comunicacao/IndiretaPai.jsx /comunicacao/IndiretaFilho.jsx
 * 
 * FORMA 1
 * 
 * Vamos supor que dentro do IndiretaPai.jsx queremo colocar algumas informações[nome/idade/nerd] -> so quem ira informar/dar valor a essas infomrações é o filho..
 * 
 * VAmos fazer um componente contador onde teremos que quebrar ele depois,...
 * 
 * 1) criamso um card em aap.jsx para o IndiretaPai.
 * 2) Em IndiretaFilho.jsx vamos colocar o nome [filho] dentro de uma <div> e logo abaixo vamos criar um <bottom> para fornecer informações. OU seja, dentro do componente filho quando clicarmos no botão o componente filho ira fornecer informações para o componente pai.
 * 
 * 
 * //FORMA 2
 * Então como é feita a comunicação do componente filho para o pai? Ja que o componente filho não possui comunicação direta com o pai. (pai t em com o filho)
 * 
 *      - Passamos uma função via props... ou seja, passamos uma função do pai pro filho, e quando acontecer algum tipo de evento no filho as informações são passadas para o pai.
 *      - Passamos essa função para o IndiretaFilho.jsx via props no IndiretaPai.jsx.
            <IndiretaFilho quandoClicar={fonecerInformacoes}></IndiretaFilho>
 *      - O que significa que dentro de IndiretaFilho.jsx vamos ter dentro de props o atributo [quandoclicar](pode ser qualquer nome).
 *
 * 1) O fato é que agora dentro de props do IndiretaFilho.jsx teremos o atributo quandoClicar que encaminha para a função [fornecerInformações] dentro do indiretaPai.jsx
 * 2)Essa função pode ser chamada por exemplo para informar alguma coisa para InderetaPai.jsx...
 *      - Em <button> colocamos um evento [onClick] e nele recebemos um função anonima que recebe um evento, e dentro dessa função anonima podemos ignorar ou chamar a função props.quandoClicar... E nessa função [quandoCLicar] passarmos o parametro para o IndiretaPai.jsx...
 *          <button onClick={
                function (e) {
                    props.quandoClicar('Angelina', 53, true)
                }
            }>
 * 3) podemos acessar essas informações a partir do metodo [quandoClicar] que foi passado via propriedade [props.quandoClicar.]
 *      - Esse é o principio da COMUNICAÇÃO INDIRETA o pai passa para o filho uma função e essa função sendo passada podemos enviar informações para o pai.
 * 
 * RESULTADO -> É MOSTRADO NO CONSOLE
 *      - Foi pedido la no InderetaPai.jsx que mostre no consle as informações que o InderetaFilho.jsx enviou a partir da chamada da função. 
 *      - Ou seja, conseguimos pegar informações que estavam dentro do InderetaFilho.jsx e passamos para o componente pai.
 *      - O InderetaPai.jsx que possui uma comunicação direta com o filho, via props, passa uma função. Essa função chamda de CALLBACK (será chamada de volta em algum momento), ou seja, quando acontecer um evento no InderetaFilho.jsx (click do botao de informações) chamamos a função passada via props, e passamos as informações que queriamos do componente filho para o pai.
 * 
 * FORMA 3 -deixando mais simples( chamando a função com arrow function)
 * 
 * FORMA 4 - PODEMOS ATE COLOCAR UMA CONSTANTE PARA RECEBER O PROPS.QYUANDOCLICAR PARA DEIXAR MENOR AINDA..
 * 
 * FORMA 5 - COMO NÃO ESTAMOS USANDO O [E] DA FUNÇÃO PODEMOS COLOCAR O UNDERLINE PARA DIZER QUE NÃO NOS INTERESSA RECEBER O EVENTO DO CLICK
 * 
 * FORMA 6[proxima aula] - Como podemos pegar essas informações que o InderetaFilho.jsx forneceu e mostrar dentro do componente pai.
 *  - mesmo que criemos variaveis e as alteremos na função do InderetaPai.jsx, essas alterações não serão refletidas.
 *  - Precisamos criar um ESTADO do componente para isso
 * 
 */

// FORMA 5
// export default props => {
//     const callBack = props.quandoClicar
//     return (
//         <div>
//             <div>Filho</div>
//             <button onClick={ _ => callBack('Angelina', 26, true)}>
//                 <p>Fornecer Informações</p>
//             </button>
//         </div>
//     )
// }
// FORMA 4
// export default props => {
//     const callBack = props.quandoClicar
//     return (
//         <div>
//             <div>Filho</div>
//             <button onClick={ e =>callBack('Angelina', 26, true)}>
//                 <p>Fornecer Informações</p>
//             </button>
//         </div>
//     )
// }
// FORMA 3
// export default props => {
//     return (
//         <div>
//             <div>Filho</div>
//             <button onClick={e => props.quandoClicar('Angelina', 26, true)}>
//                 <p>Fornecer Informações</p>
//             </button>
//         </div>
//     )
// }
// FORMA 2
// export default props => {
//     return (
//         <div>
//             <div>Filho</div>
//             <button onClick={
//                 function (e) {
//                     props.quandoClicar('Angelina', 53, true)
//                 }
//             }>
//                 Fornecer Informações
//             </button>
//         </div>
//     )
// }
// FORMA 1
// export default props => {
//     return (
//         <div>
//             <div>Filho</div>
//             <button>Fornecer Informações</button>
//         </div>
//     )
// }