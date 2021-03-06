//IMPORT REACT COM COMPONENT
// import React from 'react'
// IMPORT REACT 3.2
import React, {Component} from 'react'
// import React from 'react'

// IMPORT STYLE
import './Contador.css'



/**
 * AULA 37 - CONTADOR #01 [COMPONENTE BASEADO EM CLASSE]
 *
 * Com o advento dos HOOKS, 99% do que precisamos em um COMPONENTE pode ser feito em um COMPONENTE FUNCIONAL. Atigamente não tinhamos ESTADO, atualmente temos, não tinhamos como tratar um METODO DE CICLO DE VIDA, atualmente podemos.
 * 
 * Dentro de um COMPONENTE REACT BASEADO EM CLASSE, nos temos os METODOS DE CICLO DE VIDA
 *      SEARCH ENGINE: REACT LIFE CYCLE METHODS (exemplos antigos)
 *          - constructor()
 *          - static getDerivedStateFromProps()
 *          - render()
 *          - componentDidMount()
 * 
 * 1) Criar uma pasta para o CONTADOR --> /contador
 * 2) Dentro dessa pasta vamos criar nosso componente inicial chamado [contador.jsx]. Inicialmente vamos colocar tudo dentro do contador e depois vamos quebra-lo parra evoluir um pouco mais e irmos estabelecendo as comunicações.
 * 3) vamos criar um expor default mas agora vamos criar uma CLASS onde o nome do COMPONENTE será [Contador] e vamos extender [extends] a partir de React.Component
 * 
 *      3.1)[forma 1]
 *          import React, { Component } from 'react
 *          export default class Contador extends Component{}
 *      3.2)[forma2]
 *          import React from 'react'
 *          export default class Contador extends React.Component{}
 *      3.3)[forma 3] - se não quisermos exportar default, colocamos no final
 *          import React from 'react'
 *          class Contador extends React.Component{}
 *          export default Contador
 *      - Criamos um classe e no final a exportamos
 * 
 * ==========================[VISÃO GERAL DO REACT.COMPONENT]==========================
 * React permite definirmos componentes como classes (class components) ou como funções. Componentes definidos como classes possuem mais funcionalidades que serão detalhadas nesta página. Para definir um class component, a classe precisa estender React.Component:
 *              class Welcome extends React.Component {
                        render() {
                                return <h1>Olá, {this.props.name}</h1>;
                        }
                }
 * O único método que você deve definir em uma subclasse de React.Component é chamado render(). Todos os outros métodos descritos nesta página são opcionais.
 * 
 * -> [CICLO DE VIDA DE UM COMPONENTE]
 * Cada componente possui muitos “métodos do ciclo de vida” que você pode sobrescrever para executar determinado código em momentos particulares do processo. Você pode usar este diagrama do ciclo de vida(https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) para consulta. Na lista abaixo, os métodos do ciclo de vida mais usados estão marcados COM **. O resto deles, existe para o uso em casos relativamente raros.
 *          ** constructor()
 *          static getDerivedStateFromProps()
 *          ** render()
 *          ** componentDidMount()
 * 
 * Nota:Estes métodos são considerados legado e você deve evitá-los em código novo:
            UNSAFE_componentWillMount()
 * (entre outros)
 * 
 * // FORMA 1
 * 
 * -> Vamos criar um 'ola mundo' baseado em CLASSE
 * 
 * 1) Temos que chamar a função [render()], o COMPONENTE chamará essa função para ser renderizado.
 * 2) e dentro da função [render()] podemos retornar uma <div> com um <h2>Contador</h2>
 * 
 * -> Essa é a primeira versão do nosso componente, temos uma [classe -> Contador] que usa a extensão dos componentes. E o que for retornar da função [render()] será o nosso JSX.
 * 3) VAMOS IMPORTAR AGORA PARA O APP.JSX
 * 
 * // FORMA 2 - Como vamos definir o ESTADO dentro do nosso COMPONENTE baseado em CLASSE.
 * 
 * 1) Criamos um [state](uma propriedade) , e essa propriedade ser inicializada com um OBJETO.
 *      - No caso da função podemos usar o useState e atribuir um objeto para para dentro do usestate e ir mechendo nesse objeto
 *      - No caso atual, temos apenas um unico estado [state] acessando ele a partir da classe.
 * 2) dentro do [state] vamos colocar todos os atributos necessarios para o nosso contador.
 *      - Nosso contador terá um numero, começando em 0.
 *      - Vamos querer passar para esse componente um valor inicial, que seria o numero inicial do contador.
 * 3) [App.js] atributo [numeroInicial={10}]
 * 4) Para acessa esse atributo, vamos usar um caminho do props indireto [this.props.numeroInicial], ou seja, as propriedades que pertencem a instancia dessa classe[this -> aponta para a instancia atual] 
 * 
 * FORMA 3
 * 
 * 1) Como inicializar o ESTADO {state} com um valor inicial? (2 FORMAS)
 *      [FORMA 1] -> DIRETAMENTE NO [STATE ={}]
 *      [FORMA 2] -> A PARTIR DO CONSTRUTOR
 * 2) [CONSTRUCTOR] -> VAMOS RECEBER AS PROPRIEDADES NO CONSTRUTOR, CHAMAMOS O SUPER() PARA CHAMAR O CONSTRUTOR DA CLASSE COMPONENT E SE QUISERMOS PODEMOS INICIALIZAR O STATE DENTRO DO CONSTRUCTOR.
 * 3) Como essa sintaxe é um pouco mais avançada, vamos usar a mudança no proprio [STATE()]
 * 
 * FORMA 4 
 * 
 * 1) Vamos querer criar uma função que irá incrementar o valor do CONTADOR.
 * 2) Dentro dessa função vamos querer alterar o [state->numero]
 * 3) Assim como no useState temos uma função que altera o estado, dentro da CLASSE temos o [setState - função que recebemos quando usamos o (extends Components)]
 * 4) Vamos passar ao [setState()] um novo objeto [ ja que o (state) é um objeto] e se ele tiver varios atributos, não importa, podemos passar apenas oi atributo que nos interessa (no caso, numero)
 * 5) Vamos tbm colocar um <button> para fazer a incrementação apos o click.
 * [OBS] -> PERCEBAM QUE COMO ESTAMOS USANDO UM COMPONENTE BASEADO EM CLASSE, ESTAMOS SEMPRE USANDO O [THIS]. Vamos cair em um problema onde o [this] nem sempre vai apontar para a INSTANCIA atual.
 * 6) nessa casso quando o EVENTO [oncCLick] for disparado pelo browser, vai chamar a função [this.increment] o [this] não ira apontar para o objeto atual, de tal forma que não conseguira chamar o [setStage]
 * 
 * FORMA 5 - USANDO CONSTRUCTOR E FAZENDO BIND()
 * 
 *  1) Criamos o construtor e chamamos o [this.increment] e fazendo uma bind com o [this], ou seja, no construtor,o [this] realmente aponta para a instancia atual, estamos substituindo a função de incremento por uma função de incremento que sempre que dentro dessa função for chamado o [this] ele será fixo do construtor do objeto.
 * 
 * FORMA 6 -> PODEMOS TRANSFORMAR EM UMA FUNÇÃO ARROW.
 * 
 * Na função ARROW o [this] é sempre o mesmo.
 * 
 * [OBS] -> Pesquisar pq em JS o [this] dentro de uma função arrow esta relacionado com o CONTEXTO LEXICO (contexto no qual a função foi escrita). Como a função foi escrita dentro de uma CLASSE o [this] sempre irá apontar para uma instancia dessa classe.
 * 1) vamos ter uma função arrow sem nome/anonima que esta sendo aplicada na variavel [increment]
 * 
 * FORMA 7 - FUNÇÃO ARROW NO CLICK
 * 
 * 1) Voltamos a função increment() para a forma normal 
 * 2) Dentro do onClick{Usamos uma função arrow =>{}}
 *      2.1) Recebemos o evento(e) e chamamos o [this.increment()]
 *      2.2) Lembrando que podemos ignorar o evento(e) com [_] pois não iremos utiliza-lo.
 * 
 * FORMA 8 - forma mais simples(utilizada aula)
 * 
 * FORMA 9 - CRIANDO FUNÇÃO DE DECREMENTO.
 * 
 * FORMA 10 - PODEMOS QUERER TBM UMA OUTRA INFORMAÇÃO QUE SERIA A QUANTIDADE QUE QUEREMOS INCREMENTAR/DECREMENTAR (PASSO)
 *      5 EM 5
 *      10 EM 10
 * 
 * 1) Em state vamos colocar uma fellsafe onde caso o valor inicial não seja fornecido, comece em 0
 * 2) Vamos tbm acrescentar outro valor padrão chamado [passo], caso não seja um atributo fornecido (app.jsx), vamos colocar o valor padrão como 5
 * 
 * FORMA 11 - definindo um INPUT PARA ALTERAR O PASSO
 * 
 * 1) Vamos usar uma <label> e um <input> dentro de uma <div> abaixo do <h3>
                <input id="passoInput" type="number" value={this.state.passo} onChange />
 * -> Dentro do onchange, vamos colocar uma função que vamos criar chamada alterarPasso (setPasso).
 * 
 * 2) [setPasso] recebe como parametro o (novoPasso) e vamos construi-la como arrow function para nao termos provlemas com o [this]
 * 
 * // FORMA 12 - usando evento
 * 
 * 1) EM VEZ DE RECEBER (novoPasso), vamos receber o evento e tratar dentro da função.
 *      setPasso = (evento) => {}
 * 2) Ao usamor o [evento.target.value] -> iremos receber em retorno um valor de STRING, se colocarmos um [+] na frente, converte para inteiro.
 *      passo: +e.target.value
 * 3) depois passamos diretamente no [onchange] -> [this.setPasso]
 * 
 * FORMA 13 - APLICANDO ESTILO NO CONTADOR
 * 
 * 1) /contador/contador.css -> fazer impor em contador.jsx
 * 2) <div> principal | className="Contador"
 * 3)fazer alterações no css.
 * 
 * OBS -> AO APAGAR ESTA FICANDO 0 NO INPUT, COMO DEIXAR SOMENTE EM BRANCO?
 * 
 * ===== [ PX AULA] =====
 * 
 * VAMOS NA PROXIMA AULA QUEBRAR ESSE CONTADOR EM VARIOS COMPONENTES PARA NOS AUXILIAR NO REUSO DE COMPONENTES.
 * 
 * O COMPONENTE CONTADOR CONTINUAR SENDO UM COMPONENTE DE CLASSE MAS OS OUTROS COMPONENTES SERÃO FUNCIONAIS.
 * 
 */
class Contador extends Component {
    state = {
        num: this.props.numeroInicial || 0,
        pass: this.props.passoInicial || 5
    }
    inc = () => {
        this.setState({
            num: this.state.num + this.state.pass
        })
    }
    dec = () => {
        this.setState({
            num: this.state.num - this.state.pass
        })
    }
    setPass = (evento) => {
        this.setState({
            pass: +evento.target.value
        })
    }
    render(){
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <h3>{this.state.num}</h3>
                <div>
                     <label htmlFor="passoInicial">Passo: </label>
                     <input 
                         id="passoInput"
                         type="number"
                         value={this.state.pass}
                         onChange={this.setPass}
                     />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }


// FORMA 12
// class Contador extends Component {
//     state = {
//         num: this.props.numeroInicial || 0,
//         pass: this.props.passoInicial || 5,
//     }
//     inc = () => {
//         this.setState({
//             num: this.state.num + this.state.pass
//         })
//     }
//     dec = () => {
//         this.setState({
//             num: this.state.num - this.state.pass
//         })
//     }
//     setPass = (evento) => {
//         this.setState({
//             pass: +evento.target.value
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h2>Contador</h2>
//                 <h3>{this.state.num}</h3>
//                 <div>
//                     <label htmlFor="passoInicial">Passo: </label>
//                     <input 
//                         id="passoInput"
//                         type="number"
//                         value={this.state.pass}
//                         onChange={this.setPass}
//                     />
//                 </div>
//                 <button onClick={this.inc}>| + |</button>
//                 <button onClick={this.dec}>| - |</button>
//             </div>
//         )
//     }

// FORMA 11
// class Contador extends Component {
//     state = {
//         numero: this.props.numeroInicial || 0,
//         passo: this.props.passoInicial || 5,
//     }
//     // inc()
//     inc = () => {
//         this.setState({
//             numero: this.state.numero + this.state.passo,
//         })
//     }
//     // dec()
//     dec = () => {
//         this.setState({
//             numero: this.state.numero - this.state.passo,
//         })
//     }
//     setPasso = (novoPasso) => {
//         this.setState({
//             passo: novoPasso,
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h2>Contador</h2>
//                 <h3>{this.state.numero}</h3>
//                 {/* CRIANDO LABEL COM INPUT */}
//                 <div>
//                     <label htmlFor="passoInput">Passo: </label>
//                     <input id="passoInput" type="number" value={this.state.passo} onChange />
//                 </div>
//                 <button onClick={this.inc}> | + |</button>
//                 <button onClick={this.dec}> | - |</button>
//             </div>
//         )
//     }

// FORMA 10
// class Contador extends Component {
//     state = {// casso não seja fornecido o valor inicial.
//         numero: this.props.numeroInicial || 0,
//         passo: this.props.passoInicial || 5,
//     }
//     increment = () => {
//         this.setState({
//             numero: this.state.numero + this.state.passo
//         })
//     }
//     decrement = () => {
//         this.setState({
//             numero: this.state.numero - this.state.passo
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <h2>Contador</h2>
//                 <h3>{this.state.numero}</h3>
//                 <button onClick={this.increment}>| + |</button>
//                 <button onClick={this.decrement}>| - |</button>
//             </div>
//         )
//     }

// FORMA 9 - incremento + decremento
// class Contador extends Component {
//     // def ini state
//     state = {
//         numero: this.props.numeroInicial
//     }
//     // def increment func
//     increment = () => {
//         this.setState({ 
//             // setState => função de mudança vinda do extend Component
//             numero: this.state.numero + 1
//         })
//     }
//     decrement = () => {
//         this.setState({
//             // setState: func change
//             numero: this.state.numero - 1
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <h2>Contador</h2>
//                 <h3>{this.state.numero}</h3>
//                 <button onClick={this.increment}>| + |</button>
//                 <button onClick={this.decrement}>| - |</button>
//             </div>
//         )
//     }

// FORMA 8 - incremento
// class Contador extends Component {
//     // criando estado
//     state ={
//         numero: this.props.numeroInicial
//     }
//     // criando função de incremento (maneira simples)
//     increment = () => {
//         this.setState({
//             numero: this.state.numero + 1
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <h2>Contador</h2>
//                 <h3>{this.state.numero}</h3>
//                 <button onClick={this.increment}>+</button>
//             </div>
//         )
//     }

// FORMA 7.1
// class Contador extends Component {
//     // criando estado inicial
//     state={
//         numero: this.props.numeroInicial
//     }
//     // criando função de incremento
//     increment(){
//         this.setState({
//             numero: this.state.numero + 1
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <h2>Contador</h2>
//                 <h3>{this.state.numero}</h3>
//                 <button onClick={_ => this.increment()}>+</button>
//             </div>
//         )
//     }

}
// FORMA 7
// class Contador extends Component {
//     state = {
//         numero: this.props.numeroInicial
//     }
//     // função para incrementar ao numeroInicial
//     increment() {
//         this.setState({
//             numero: this.state.numero + 1
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <h2>Contador</h2>
//                 {/* mostrando o estado atual do contador/numero. */}
//                 <h3>{this.state.numero}</h3>
//                 <button onClick={e => this.increment()}>+</button>
//             </div>
//         )
//     }
// }
//FORMA 6
// class Contador extends Component {
//     state = {
//         numero: this.props.numeroInicial
//     }
//     increment = () => {
//         this.setState({
//             numero: this.state.numero + 1
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <h2>Contador</h2>
//                 <h3>{this.state.numero}</h3>
//                 <button onClick={this.increment}>+</button>
//             </div>
//         )
//     }
// }
// FORMA 5
// class Contador extends Component {
//     state ={
//         numero: this.props.numeroInicial
//     }
//     constructor(props){
//         super(props)
//         this.increment = this.increment.bind(this)
//     }
//     increment(){
//         this.setState({
//             numero: this.state.numero + 1
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <h2>Contador</h2>
//                 <h3>{this.state.numero}</h3>
//                 <button onClick={this.increment}>+</button>
//             </div>
//         )
//     }
// }
// FORMA 4 - COM PROBLEMA
// class Contador extends Component {
//     state = {
//         numero: this.props.numeroInicial
//     }
//     increment(){
//         this.setState({
//             numero: this.state.numero + 1
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <h2>Contador</h2>
//                 <h3>{this.state.numero}</h3>
//                 <button onClick={this.increment}>+</button>
//             </div>
//         )
//     }
// }
// FORMA 3.2 - A partir de um CONSTRUCTOR
// class Contador extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             numero: props.numeroInicial
//         }
//     }
//     render(){
//         return (
//             <div>
//                 <h2> Contador </h2>
//                 <p>{this.state.numero}</p>
//             </div>
//         )
//     }
// }
// FORMA 3.1 - diretamente no state
// class Contador extends Component {
//     state = {
//         numero: this.props.numeroInicial
//     }
//     render(){
//         return (
//             <div>
//                 <h2>Contador</h2>
//                 <p>{this.state.numero}</p>
//             </div>
//         )
//     }
// }
// FORMA 2
// class Contador extends Component {
//     state = {
//         numero: 0
//     }
//     render() {
//         return (
//             <div>
//                 <h2>Contador</h2>
//                 <p>Valor Inicial : {this.props.numeroInicial}</p>
//             </div>
//         )
//     }
// }
// FORMA 1
// class Contador extends Component {
//     render(){
//         return(
//             <div>
//                 <h2>Contador</h2>
//             </div>
//         )
//     }
// }

export default Contador