/* eslint-disable import/no-anonymous-default-export */


// import react
import React from 'react'

// import layout
import './App.css'

// import compomnentes
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Count from './components/count/Count'
import Mega from './components/mega/Mega'

/**
 * PROXIMA SEÇÃO 02
 * 
 * Vamos começar o projeto da CALCULADORA
 * 
 * 1) Pare outros projetos do REACT pois iremos criar um outro projeto que irá utlizar a mesma PORTA.
 * 2) Vamos criar outro projeto com o comando
 *      npm i -g create-react-app calculadora
 * 3) caso tenha o node_modules so precisamos usar o comando 
 *      create-react-app calculadora
 * 4) Enquanto instala o react, vamos usar uma fonte no projeto chamada ROBOTO MONO,e podemos baixa-la atraves do google font e salvar a robotoMONO-Thin.tiff dentro da pasta do projeto.
 * 5) Dentro do projeto CALCULADORA/SRC vamos criar uma nova pasta [/fonts] e vamos colocar a fonte do ROBOTO MONO THIN nessa pasta
 * 6) e startar a aplicação com npm start
 * 
 */

/**
 * AULA 40 - DESAFIO MEGASENA #2
 * 
 * O que fizemos na aula passada foi criar uma função em javascript, aora vamos criar um componente em react para usar esse metodo.
 * 
 * 1) /mega/mega.jsx
 * 2) 
 * 
 */
export default _ =>
    <div className="App">
        <h1>Fundamentos React 33</h1>
        <div className="Cards">
            <Card titulo="#13 - MEGASENA" color="#B900CE">
                <Mega qtde={8} />
            </Card>
            <Card titulo="#12.1 - CONTADOR (MULTI COMPONENTS) " color="#424242">
                <Count numIni={21} />
            </Card>
            <Card titulo="#12 - CONTADOR (COMPONENTE COM CLASSE)" color="#424242">
                <Contador numeroInicial={10} />
            </Card>
            <Card titulo="#11 - COMPONENTE CONTROLADO (Input)" color="#E45F56">
                <Input></Input>
            </Card>
            <Card titulo="#10 - COMUNICAÇÃO INDIRETA" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#09 - COMUNICAÇÃO DIRETA" color="#59323C">
                <DiretaPai />
            </Card>
            <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P2" color="#982365">
                <UsuarioInfo usuario = {{
                    nome: 'Angelina'
                }}/>
                <UsuarioInfo usuario={{ email: 'Angelina@hotmail.com' }} />
                <UsuarioInfo usuario={{}} />
                <UsuarioInfo />
            </Card>
            <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P1" color="#982395">
                <ParOuImpar numero={20}></ParOuImpar>
            </Card>
            <Card titulo="#07 - DESAFIO DE REPETIÇÃO" color="#3A9AD9">
                <TabelaProdutos />
            </Card>
            <Card titulo="#06 - REPETIÇÃO" color="#FF4C65">
                <ListaAlunos />
            </Card>
            <Card titulo="#05 - COMPONENTES COM FILHO " color="#00C8F8">
                <Familia sobrenome="Pierre">
                <FamiliaMembro nome="Angelina" />
                <FamiliaMembro nome="Bruno" />
                <FamiliaMembro nome="Santa" />
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
                <Aleatorio min={1} max={60} />
                <Aleatorio min={100} max={200} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parametros" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    nome="Angelina Pierre"
                    nota={9.3}
                />
                <ComParametro
                    titulo="Situação do Aluno"
                    nome="Santa Kaya"
                    nota={0.3}
                /> 
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro />
            </Card>
        </div>
    </div>

/**
 * AULA 39 - DESAFIO MEGASENA
 * 
 * 1) CRIAR /MEGA/MEGA.JSX
 * 
 * 2) vamos criar uma função apra gerar os numeros aleatorios
 * ex:
 * function gerarNumeros(qtde){
 *      return [3,13,43,51,53,59]
 * }
 * console.log(gerarNumeros(7))
 * ===FUNÇÃO RECURSIVA===
 * 3) vamos tbm criar uma função chamada [gerarNumeroNaoContido()], com a ideia de que, passemos a ela um array e vamos querer gerar um numero que não esteja contido nesse array.
 * function gerarNumeroNaoContido(min, max, array) {
 *      const aleatorio = parseInt(Math.random() * (max - min)) + min
 * }
 * 3.1) não queremos que os numeros que gerarmos estejam contidos dentro do numeros da megacena. Logo iremos retornar caso o array inclua o numero gerado (aleatorio) vamos pedir para ele gerar novamente o numero, vamos usar um operador ternario.
 * function gerarNumeroNaoContido(min, max, array) {
 *      const aleatorio = parseInt(Math.random() * (max - min)) + min
 *      return array.includes(aleatorio) ? gerarNumeroNaoContido(min,max,array) : aleatorio
 * }
 * console.log(gerarNumeroNaoContido(1,5,[2,3]))
 * 3.2) ele esta gerando somente o 1 e o 4, se quisermos que gere o 5 tbm na assinatura do metodo:
 *      - Podemos acrescentar 1 no max (max + 1 - min)
 *      - ou colocar 61 no caso da megasena
 * function gerarNumeroNaoContido(min, max, array) {
 *      const aleatorio = parseInt(Math.random() * (max - min)) + min
 *      return array.includes(aleatorio) ? gerarNumeroNaoContido(min,max,array) : aleatorio
 * }
 * console.log(gerarNumeroNaoContido(1,5,[2,3,4]))
 * 4) no caso da megasena
 * function gerarNumeroNaoContido(min, max, array) {
 *      const aleatorio = parseInt(Math.random() * (max - min)) + min
 *      return array.includes(aleatorio) ? gerarNumeroNaoContido(min,max,array) : aleatorio
 * }
 * console.log(gerarNumeroNaoContido(1,60,[0,0,0,0,0,0]))
 * 
 * 5) Na primeira vez que formos executar, ele vai gerar um numero que será substituido no array. ex: 15 -> [15,0,0,0,0,0]
 * 
 * 6) Geramos o primeiro METODO para nosso logica da MEGASENA
 * 7) Agora vamos criar o array em [gerarNUmeros()] com a quantidade que foi passada pelo gerarNumeros(qtde) e vamos preencher com 0; e fazer um return em numeros
 *      function gerarNumeros(qtde){
    const numeros = Array(qtde).fill(0)
    return numeros
}
 * 8) Agora vamos querer gerar um outro array, baseado no [.reduce] que ira receber o valor atual, que eh cada um dos elementos [fill(0)], e o acumulador(acc - eh o novo array com os numeros).
 * 8.1) No acumulador vamos criar uma função com um novoNumero, que ira receber os numeros aleatorios da função [gerarNumerosNaoContidos()] vamos passar [1, 60](min,max) e passar o array de numeros(nums) que acabamos de receber.
 * 8.2) Vamos retornar um novo array com todos os elementos do array anterior [vamos usar o spread [...nums]] mais o novoNumero. 
 * 8.3) No reduce vamos passar tbm um array vazio inicial [] para ele começar a operar em cima do [reduce].
 * function gerarNumeros(qtde){
    const numeros = Array(qtde)
    .fill(0)
    .reduce((nums)=>{
        const novoNumero = gerarNumeroNaoContido(1,60,nums)
        console.log([...nums, novoNumero])
        return [...nums, novoNumero]
    },[])
    return numeros
}
 * [REDUCE()]
        - Basicamente a criação de array chamado numeros que possui a quantidade de acordo com o parâmetro que foi passado pra função (qtde)

        - Depois o Léo preenche esse array com 0 (usando a função fill()), ficando assim 7 posições com valor 0

        Agora o reduce em si:

        - No reduce o Léo passa somente o acumulador (que é o nums), o acumulador é como se fosse a "variável de controle" desse reduce

        - Esse nums é um array que vai ser criado através do próprio reduce

        - A cada iteração (laço do reduce) é chamada a função gerarNumeroContido passando o valor minimo (1), o valor máximo (60) e o array que ele vai inserir os valores (nums)

        - Ele retorna um array com uma cópia de todos os valores do nums (utilizando o spread), juntamente com o valor gerado na função gerarNumeroContido

        - Importante ver que o valor inicial que o Léo passa é um array vazio ( [] )

        - Por fim quando o reduce acaba todos os valores são preenchidos dentro da constante numeros criada no comecinho da função

        - Por isso que quando o Léo da um console.log no final de cada iteração você consegue ver número a número que foi adicionada
 * 
 * 9) Agora so falta ordenar os numeros para a vizualização ficar mais facil.[.sort((n1,n2)=>n1-n2)] vamos receber 2 numeros e subtrair um do outro.
 *      [sort]-> 0 = iguais
 *      [sort]-> -1 = menor
 *      [sort]-> +1 = maior
    .sort((n1.n2)=> n1 - n2) -> ordem crescente
    .sort((n1.n2)=> n2 - n1) -> ordem descrecente.
    
 * 
 * 10) Fizemos a logica da função que ira gerar os numeros da megasena, agora iremos colocar essa logica dentro do componente para gerar os numeros da megasena usando componentes.
 * 
 */
// export default _ =>
//     <div className="App">
//         <h1>Fundamentos React 33</h1>
//         <div className="Cards">
//             <Card titulo="#12.1 - CONTADOR (MULTI COMPONENTS) " color="#424242">
//                 <Count numIni={21} />
//             </Card>
//             <Card titulo="#12 - CONTADOR (COMPONENTE COM CLASSE)" color="#424242">
//                 <Contador numeroInicial={10} />
//             </Card>
//             <Card titulo="#11 - COMPONENTE CONTROLADO (Input)" color="#E45F56">
//                 <Input></Input>
//             </Card>
//             <Card titulo="#10 - COMUNICAÇÃO INDIRETA" color="#8BAD39">
//                 <IndiretaPai></IndiretaPai>
//             </Card>
//             <Card titulo="#09 - COMUNICAÇÃO DIRETA" color="#59323C">
//                 <DiretaPai />
//             </Card>
//             <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P2" color="#982365">
//                 <UsuarioInfo usuario = {{
//                     nome: 'Angelina'
//                 }}/>
//                 <UsuarioInfo usuario={{ email: 'Angelina@hotmail.com' }} />
//                 <UsuarioInfo usuario={{}} />
//                 <UsuarioInfo />
//             </Card>
//             <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P1" color="#982395">
//                 <ParOuImpar numero={20}></ParOuImpar>
//             </Card>
//             <Card titulo="#07 - DESAFIO DE REPETIÇÃO" color="#3A9AD9">
//                 <TabelaProdutos />
//             </Card>
//             <Card titulo="#06 - REPETIÇÃO" color="#FF4C65">
//                 <ListaAlunos />
//             </Card>
//             <Card titulo="#05 - COMPONENTES COM FILHO " color="#00C8F8">
//                 <Familia sobrenome="Pierre">
//                 <FamiliaMembro nome="Angelina" />
//                 <FamiliaMembro nome="Bruno" />
//                 <FamiliaMembro nome="Santa" />
//                 </Familia>
//             </Card>
//             <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//                 <Aleatorio min={1} max={60} />
//                 <Aleatorio min={100} max={200} />
//             </Card>
//             <Card titulo="#03 - Fragmento" color="#E94C6F">
//                 <Fragmento />
//             </Card>
//             <Card titulo="#02 - Com Parametros" color="#E8B71A">
//                 <ComParametro
//                  titulo="Situação do Aluno"
//                  nome="Angelina Pierre"
//                  nota={9.3}
//                 />
//                 <ComParametro
//                  titulo="Situação do Aluno"
//                  nome="Santa Kaya"
//                  nota={0.3}
//                 /> 
//              </Card>
//              <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                  <Primeiro />
//              </Card>
//         </div>
//     </div>

/**
 * AULA 38 - CONTADOR #02 [DIVIDINDO EM VARIOS COMPONENTES]
 * 
 * [COMPOENTES]
 *      1) DISPLAY -> ONDE ESTA MOSTRANDO O VALOR
 *      2) FORMULARIO -> ONDE INC/DEC O PASSO
 *      3) BOTÕES
 * 
 * CONTINUAREMOS MANTENDO O ESTADO DO COMPONENTE DENTRO DO CONTADOR, QUE SERÁ O COMPONENTE PAI.
 * 
 * 1) Criar /count/display.jsx [componente funcional]
 * 1.1) Em count.jsx vamos importar o display.jsx, e no lugar onde tinhamos o <h3> colocamos <Display numero={this.state.numero}
 * 2) Buttons.jsx
 * 2.1) Nos botões vamos receber a partir de props [props.incrementar] e [props.decrementar] são os nomes das propriedades que iremos passar no count.jsx.
 * 
 * FORMA 1 [BUTTONS] -> Na forma que esta em count.jsx (sem parametros) se clicarmos nos botões nada irá acontencer. Logo temos que passar as funções de incrementar e decrementar no Count.jsx
 * 3) /count/PassForm.jsx
 * 3.1) no onChange, se deixarmos [props.setPasso] será passado o EVENTO, mas queremos que o novo numero seja passado logo, entao criamos um elemento para receber o evento (e) e chamamos o setPasso() convertendo para numerico com (+).
 * 3.3) se nao colocar o onchange não altera o valor.
 * 3.4) passo={this.state.passo} são informações passadas de pai para filho
 * 3.5) setPasso={this.setPass} estamos passando ma função para o filho de tal forma que quando o evento acontece o componente filho manda de volta a informação do novoPasso que precisa ser alterado no ESTADO. 
 * 
 */
// FORMA 1
// export default _ =>
//     <div className="App">
//         <h1>Fundamentos React 33</h1>
//         <div className="Cards">
//             <Card titulo="#12.1 - CONTADOR (MULTI COMPONENTS) " color="#424242">
//                 <Count numIni={21} />
//             </Card>
//             <Card titulo="#12 - CONTADOR (COMPONENTE COM CLASSE)" color="#424242">
//                 <Contador numeroInicial={10} />
//             </Card>
//             <Card titulo="#11 - COMPONENTE CONTROLADO (Input)" color="#E45F56">
//                 <Input></Input>
//             </Card>
//             <Card titulo="#10 - COMUNICAÇÃO INDIRETA" color="#8BAD39">
//                 <IndiretaPai></IndiretaPai>
//             </Card>
//             <Card titulo="#09 - COMUNICAÇÃO DIRETA" color="#59323C">
//                 <DiretaPai />
//             </Card>
//             <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P2" color="#982365">
//                 <UsuarioInfo usuario = {{
//                     nome: 'Angelina'
//                 }}/>
//                 <UsuarioInfo usuario={{ email: 'Angelina@hotmail.com' }} />
//                 <UsuarioInfo usuario={{}} />
//                 <UsuarioInfo />
//             </Card>
//             <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P1" color="#982395">
//                 <ParOuImpar numero={20}></ParOuImpar>
//             </Card>
//             <Card titulo="#07 - DESAFIO DE REPETIÇÃO" color="#3A9AD9">
//                 <TabelaProdutos />
//             </Card>
//             <Card titulo="#06 - REPETIÇÃO" color="#FF4C65">
//                 <ListaAlunos />
//             </Card>
//             <Card titulo="#05 - COMPONENTES COM FILHO " color="#00C8F8">
//                 <Familia sobrenome="Pierre">
//                 <FamiliaMembro nome="Angelina" />
//                 <FamiliaMembro nome="Bruno" />
//                 <FamiliaMembro nome="Santa" />
//                 </Familia>
//             </Card>
//             <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//                 <Aleatorio min={1} max={60} />
//                 <Aleatorio min={100} max={200} />
//             </Card>
//             <Card titulo="#03 - Fragmento" color="#E94C6F">
//                 <Fragmento />
//             </Card>
//             <Card titulo="#02 - Com Parametros" color="#E8B71A">
//                 <ComParametro
//                  titulo="Situação do Aluno"
//                  nome="Angelina Pierre"
//                  nota={9.3}
//                 />
//                 <ComParametro
//                  titulo="Situação do Aluno"
//                  nome="Santa Kaya"
//                  nota={0.3}
//                 /> 
//              </Card>
//              <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                  <Primeiro />
//              </Card>
//         </div>
//     </div>

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
 * O COMPONENTE CONTADOR CONTINUAR SENDO UM COMPOENTE DE CLASSE MAS OS OUTROS COMPONENTES SERÃO FUNCIONAIS.
 * 
 */
// FORMA 1
// export default _ =>
//     <div className="App">
//         <h1>Fundamentos React 33</h1>
//         <div className="Cards">
//             <Card titulo="#12 - CONTADOR (COMPONENTE COM CLASSE)" color="#424242">
//                 <Contador numeroInicial={10} />
//             </Card>
//             <Card titulo="#11 - COMPONENTE CONTROLADO (Input)" color="#E45F56">
//                 <Input></Input>
//             </Card>
//             <Card titulo="#10 - COMUNICAÇÃO INDIRETA" color="#8BAD39">
//                 <IndiretaPai></IndiretaPai>
//             </Card>
//             <Card titulo="#09 - COMUNICAÇÃO DIRETA" color="#59323C">
//                 <DiretaPai />
//             </Card>
//             <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P2" color="#982365">
//                 <UsuarioInfo usuario = {{
//                     nome: 'Angelina'
//                 }}/>
//                 <UsuarioInfo usuario={{ email: 'Angelina@hotmail.com' }} />
//                 <UsuarioInfo usuario={{}} />
//                 <UsuarioInfo />
//             </Card>
//             <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P1" color="#982395">
//                 <ParOuImpar numero={20}></ParOuImpar>
//             </Card>
//             <Card titulo="#07 - DESAFIO DE REPETIÇÃO" color="#3A9AD9">
//                 <TabelaProdutos />
//             </Card>
//             <Card titulo="#06 - REPETIÇÃO" color="#FF4C65">
//                 <ListaAlunos />
//             </Card>
//             <Card titulo="#05 - COMPONENTES COM FILHO " color="#00C8F8">
//                 <Familia sobrenome="Pierre">
//                 <FamiliaMembro nome="Angelina" />
//                 <FamiliaMembro nome="Bruno" />
//                 <FamiliaMembro nome="Santa" />
//                 </Familia>
//             </Card>
//             <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//                 <Aleatorio min={1} max={60} />
//                 <Aleatorio min={100} max={200} />
//             </Card>
//             <Card titulo="#03 - Fragmento" color="#E94C6F">
//                 <Fragmento />
//             </Card>
//             <Card titulo="#02 - Com Parametros" color="#E8B71A">
//                 <ComParametro
//                  titulo="Situação do Aluno"
//                  nome="Angelina Pierre"
//                  nota={9.3}
//                 />
//                 <ComParametro
//                  titulo="Situação do Aluno"
//                  nome="Santa Kaya"
//                  nota={0.3}
//                 /> 
//              </Card>
//              <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                  <Primeiro />
//              </Card>
//         </div>
//     </div>

/**
 * AULA 36 - COMPONENTE CONTROLADO
 * 
 * Vamos criar mais um exercicio para vermos um exemplo de input e vermos o conceito de COMPONENTE CONTROLADO.
 *      /FORMULARIO/input.jsx
 * 
 * Ir no site https://pt-br.reactjs.org/docs/forms.html -> para ver a documentação sobre COMPONENTES CONTROLADOS.
 * Vamos ver que esses componentes possuem ligação com <input>|<textarea> |<select>
 * 
 * FORMA 1
 * 
 * 1) Criamos o componente <Input>
 * 2) Vamos importar ele agora dentro de App.jsx e criar um <card>.
 * 3) Vamos criar um estado [nome, função_mudança] -> ini = [inicial]
 * 4) No <input> vamos colocar um atributo chamado [value] que irá receber uma expressão {}, a que criamos acima...
 *          <input value={valor} />
 *          - Isso nos mostra a renderização do nosso componente com o valor inicial = 'Inicial'
 * 5) Vamos criar um Input.css para fazer algumas alterações no estilo e ver melhor os resultados.
 *          <div className = "Input">
 * 
 * FORMA 2
 * 
 * No momento atual, esperamos que se colocarmos o cursos em cima da caixa de <input> e digitarmos algo, ele mude para o que digitarmos, o que não irá acontecer.
 * 
 * Porque? Ele é um COMPONENTE CONTROLADO, e o que ele chama de VERDADE ABSOLUTA são os DADOS.
 * 
 * Seu DADO, ou seja, o ESTADO DO COMPONENTE, não mudou, não chamados nenhuma função de alteração [setvalor] para alterar o estado inicial 'type' para o que foi digitado no teclado.
 * 
 * Ou seja, não conseguimos mudar o ESTADO de um componente diretamente a partir da INTERFACE, temos que mudar o ESTADO do componente para quando o ESTADO mudar, a mudança ser refletida na interface grafica.
 * 
 * O 'caminho' é UNIDIRECIONAL o ESTADO muda, altera a INTERFACE GRAFICA, e não a INTERFACE muda e altera o ESTADO.
 * 
 * Isso acontece indiretamente a partir dos EVENTOS
 * 
 * 1) Conseguimos mudar o estado desse input pegando, por exemplo, o evento [onChange - será chamado sempre que digitarmos], e atribuir a esse evento[onChange] uma função que receberá como parametro outro EVENTO.
 * 2) Na forma atual, toda vez que clicarmos no [type..] será mostrado um evento no CONSOLE.
 * 
 * FORMA 3
 * 
 * 1) Se quisermos acessar mais especificamente usamos o [target.value] no evento, será mostrado no CONSOLE o valor novo que foi gerado...
 * 2) Ele não esta evoluindo o estado, esta mostrando o texto inical + a tecla unitaria que estamos apertando no teclado.
 * 
 * FORAM 4 - ALTERANDO O ESTADO
 * 
 * 1)Para mudar o estado, chamamos a função de mudança [setValor] e atribuimos a ela o que passamos na FORMA 3 com o console.log.
 * 2)Agora sim o conteudo do <input> é alterado pois estamos tbm alterando o estado ao atribuir o [setValor(evento.target.value)]
 * 
 * FORMA 5 - exibindo na tela as alterações com <h2> {valor} </h2>
 * 
 * FORMA 6 - COMPONENTE com [readonly]
 * 
 * OBS => SE TEMOS UM <INPUT> ONDE SO TEMOS O [VALUE] E NÃO O [ONCHANGE], ELE IRA MOSTRAR UMA MENSAGEM DE ERRO NO CONSOLE NOS FALANDO QUE DEVEMOS TRANSFORMAR ESSE COMPONENTE EM SOMENTE LEITURA, FALA QUE NÃO ESTAMOS MANIPULANDO AS MUDANÇAS DESSE COMPONENTE. SE QUISERMOS QUE ESSE ERRO PARE BASTA COLOCAR O ATRIBUTO [readOnly]
 * 
 * FORMA 7 - COMPONENTE NÃO CONTROLADO
 * 
 * COlocando o valor no input como [undefined] nos permite digitar o que quisermos, ou seja, esse componente não esta mais sendo controlado por nenhm estado.
 * 
 * FORMA 7 - COMPONENTE NÃO CONTROLADO [null]
 * 
 * Podemos tbm em vez de passar o [undefined] o valor [null], mas será gerado uma advertencia...
 */
// FORMA 1
// export default _ =>
//     <div className="App">
//         <h1>Fundamentos React 33</h1>
//         <div className="Cards">
//             <Card titulo="#11 - COMPONENTE CONTROLADO (Input)" color="#E45F56">
//                 <Input></Input>
//             </Card>
//             <Card titulo="#10 - COMUNICAÇÃO INDIRETA" color="#8BAD39">
//                 <IndiretaPai></IndiretaPai>
//             </Card>
//             <Card titulo="#09 - COMUNICAÇÃO DIRETA" color="#59323C">
//                 <DiretaPai />
//             </Card>
//             <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P2" color="#982365">
//                 <UsuarioInfo usuario = {{
//                     nome: 'Angelina'
//                 }}/>
//                 <UsuarioInfo usuario={{ email: 'Angelina@hotmail.com' }} />
//                 <UsuarioInfo usuario={{}} />
//                 <UsuarioInfo />
//             </Card>
//             <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P1" color="#982395">
//                 <ParOuImpar numero={20}></ParOuImpar>
//             </Card>
//             <Card titulo="#07 - DESAFIO DE REPETIÇÃO" color="#3A9AD9">
//                 <TabelaProdutos />
//             </Card>
//             <Card titulo="#06 - REPETIÇÃO" color="#FF4C65">
//                 <ListaAlunos />
//             </Card>
//             <Card titulo="#05 - COMPONENTES COM FILHO " color="#00C8F8">
//                 <Familia sobrenome="Pierre">
//                 <FamiliaMembro nome="Angelina" />
//                 <FamiliaMembro nome="Bruno" />
//                 <FamiliaMembro nome="Santa" />
//                 </Familia>
//             </Card>
//             <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//                 <Aleatorio min={1} max={60} />
//                 <Aleatorio min={100} max={200} />
//             </Card>
//             <Card titulo="#03 - Fragmento" color="#E94C6F">
//                 <Fragmento />
//             </Card>
//             <Card titulo="#02 - Com Parametros" color="#E8B71A">
//                 <ComParametro
//                  titulo="Situação do Aluno"
//                  nome="Angelina Pierre"
//                  nota={9.3}
//                 />
//                 <ComParametro
//                  titulo="Situação do Aluno"
//                  nome="Santa Kaya"
//                  nota={0.3}
//                 /> 
//              </Card>
//              <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                  <Primeiro />
//              </Card>
//      </div>
//  </div>

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
// FORMA 1
// export default _ => 
// <div className="App">
//     <h1>Fundamentos React 33</h1>
//     <div className="Cards">
//         <Card titulo="#10 - COMUNICAÇÃO INDIRETA" color="#8BAD39">
//             <IndiretaPai></IndiretaPai>
//         </Card>
//         <Card titulo="#09 - COMUNICAÇÃO DIRETA" color="#59323C">
//             <DiretaPai />
//         </Card>
//         <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P2" color="#982365">
//             <UsuarioInfo usuario = {{
//                 nome: 'Angelina'
//             }}/>
//             <UsuarioInfo usuario={{ email: 'Angelina@hotmail.com' }} />
//             <UsuarioInfo usuario={{}} />
//             <UsuarioInfo />
//         </Card>
//         <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P1" color="#982395">
//             <ParOuImpar numero={20}></ParOuImpar>
//         </Card>
//         <Card titulo="#07 - DESAFIO DE REPETIÇÃO" color="#3A9AD9">
//             <TabelaProdutos />
//         </Card>
//         <Card titulo="#06 - REPETIÇÃO" color="#FF4C65">
//             <ListaAlunos />
//         </Card>
//         <Card titulo="#05 - COMPONENTES COM FILHO " color="#00C8F8">
//             <Familia sobrenome="Pierre">
//                 <FamiliaMembro nome="Angelina" />
//                 <FamiliaMembro nome="Bruno" />
//                 <FamiliaMembro nome="Santa" />
//             </Familia>
//         </Card>
//         <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//             <Aleatorio min={1} max={60} />
//             <Aleatorio min={100} max={200} />
//         </Card>
//         <Card titulo="#03 - Fragmento" color="#E94C6F">
//             <Fragmento />
//         </Card>
//         <Card titulo="#02 - Com Parametros" color="#E8B71A">
//             <ComParametro
//                 titulo="Situação do Aluno"
//                 nome="Angelina Pierre"
//                 nota={9.3}
//             />
//             <ComParametro
//                 titulo="Situação do Aluno"
//                 nome="Santa Kaya"
//                 nota={0.3}
//             />
//             </Card>
//             <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                 <Primeiro />
//             </Card>
//     </div>
// </div>
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
// FORMA 1
// export default _ => 
//  <div className="App">
//      <h1>Fundamentos React 33</h1>
//      <div className="Cards">
//          <Card titulo="#10 - COMUNICAÇÃO INDIRETA" color="#8BAD39">
//              <IndiretaPai></IndiretaPai>
//          </Card>
//          <Card titulo="#09 - COMUNICAÇÃO DIRETA" color="#59323C">
//              <DiretaPai />
//          </Card>
//          <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P2" color="#982365">
//              <UsuarioInfo usuario = {{
//                  nome: 'Angelina'
//              }}/>
//              <UsuarioInfo usuario={{ email: 'Angelina@hotmail.com' }} />
//              <UsuarioInfo usuario={{}} />
//              <UsuarioInfo />
//          </Card>
//          <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P1" color="#982395">
//              <ParOuImpar numero={20}></ParOuImpar>
//          </Card>
//          <Card titulo="#07 - DESAFIO DE REPETIÇÃO" color="#3A9AD9">
//              <TabelaProdutos />
//          </Card>
//          <Card titulo="#06 - REPETIÇÃO" color="#FF4C65">
//              <ListaAlunos />
//          </Card>
//          <Card titulo="#05 - COMPONENTES COM FILHO " color="#00C8F8">
//              <Familia sobrenome="Pierre">
//                  <FamiliaMembro nome="Angelina" />
//                  <FamiliaMembro nome="Bruno" />
//                  <FamiliaMembro nome="Santa" />
//              </Familia>
//          </Card>
//          <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//              <Aleatorio min={1} max={60} />
//              <Aleatorio min={100} max={200} />
//          </Card>
//          <Card titulo="#03 - Fragmento" color="#E94C6F">
//              <Fragmento />
//          </Card>
//          <Card titulo="#02 - Com Parametros" color="#E8B71A">
//              <ComParametro
//                  titulo="Situação do Aluno"
//                  nome="Angelina Pierre"
//                  nota={9.3}
//              />
//              <ComParametro
//                  titulo="Situação do Aluno"
//                  nome="Santa Kaya"
//                  nota={0.3}
//              />
//              </Card>
//              <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                  <Primeiro />
//              </Card>
//      </div>
//  </div>

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
 */
// export default _ => 
//     <div className="App">
//         <h1>Fundamentos React 33</h1>
//         <div className="Cards">
//             <Card titulo="#09 - COMUNICAÇÃO DIRETA" color="#59323C">
//                 <DiretaPai />
//             </Card>
//             <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P2" color="#982365">
//                 <UsuarioInfo usuario = {{
//                     nome: 'Angelina'
//                 }}/>
//                 <UsuarioInfo usuario={{ email: 'Angelina@hotmail.com' }} />
//                 <UsuarioInfo usuario={{}} />
//                 <UsuarioInfo />
//             </Card>
//             <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P1" color="#982395">
//                 <ParOuImpar numero={20}></ParOuImpar>
//             </Card>
//             <Card titulo="#07 - DESAFIO DE REPETIÇÃO" color="#3A9AD9">
//                 <TabelaProdutos />
//             </Card>
//             <Card titulo="#06 - REPETIÇÃO" color="#FF4C65">
//                 <ListaAlunos />
//             </Card>
//             <Card titulo="#05 - COMPONENTES COM FILHO " color="#00C8F8">
//                 <Familia sobrenome="Pierre">
//                     <FamiliaMembro nome="Angelina" />
//                     <FamiliaMembro nome="Bruno" />
//                     <FamiliaMembro nome="Santa" />
//                 </Familia>
//             </Card>
//             <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//                 <Aleatorio min={1} max={60} />
//                 <Aleatorio min={100} max={200} />
//             </Card>
//             <Card titulo="#03 - Fragmento" color="#E94C6F">
//                 <Fragmento />
//             </Card>
//             <Card titulo="#02 - Com Parametros" color="#E8B71A">
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Angelina Pierre"
//                     nota={9.3}
//                 />
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Santa Kaya"
//                     nota={0.3}
//                 />
//                 </Card>
//                 <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                     <Primeiro />
//                 </Card>
//         </div>
//     </div>


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
//  export default _ =>
//  <div className="App">
//      <h1>Fundamentos React 31</h1>
//      <div className="Cards">
//          <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P2" color ="#982365">
//              <UsuarioInfo usuario={{ nome: 'Angelina' }} />
//              <UsuarioInfo usuario={{ email: 'Angelina@hotmail.com' }} />
//              <UsuarioInfo usuario={{}} />
//              <UsuarioInfo />
//          </Card>
//          <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P1" color="#982395">
//              <ParOuImpar numero={20}></ParOuImpar>
//          </Card>
//          <Card titulo="#07 - DESAFIO DE REPETIÇÃO" color="#3A9AD9">
//              <TabelaProdutos />
//          </Card>
//          <Card titulo="#06 - REPETIÇÃO" color="#FF4C65">
//              <ListaAlunos />
//          </Card>
//          <Card titulo="#05 - COMPONENTES COM FILHO " color="#00C8F8">
//              <Familia sobrenome="Pierre">
//                  <FamiliaMembro nome="Angelina" />
//                  <FamiliaMembro nome="Bruno" />
//                  <FamiliaMembro nome="Santa" />
//              </Familia>
//          </Card>
//          <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//              <Aleatorio min={1} max={60} />
//              <Aleatorio min={100} max={200} />
//          </Card>
//          <Card titulo="#03 - Fragmento" color="#E94C6F">
//              <Fragmento />
//          </Card>
//          <Card titulo="#02 - Com Parametros" color="#E8B71A">
//              <ComParametro
//                  titulo="Situação do Aluno"
//                  nome="Angelina Pierre"
//                  nota={9.3}
//              />
//              <ComParametro
//                  titulo="Situação do Aluno"
//                  nome="Santa Kaya"
//                  nota={0.3}
//              />
//              </Card>
//              <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                  <Primeiro />
//              </Card>
//      </div>
//  </div>


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
 * FORMA 1
 * 
 * [OBS] -> Podemos nos precaver caso tentem acessar um objeto que nao existe ou caso nao digitem nada.
 *      No lugar das {} podemos tbm colocar um valor padrão para impedir o acesso...
 * 
 * FORMA 2 - importando o componente <If>
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
 */
//FORMA 2
// export default _ =>
//     <div className="App">
//         <h1>Fundamentos React 31</h1>
//         <div className="Cards">
//             <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P2" color ="#982365">
//                 <UsuarioInfo usuario={{ nome: 'Angelina' }} />
//                 <UsuarioInfo usuario={{ email: 'Angelina@hotmail.com' }} />
//                 <UsuarioInfo usuario={{}} />
//                 <UsuarioInfo />
//             </Card>
//             <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P1" color="#982395">
//                 <ParOuImpar numero={20}></ParOuImpar>
//             </Card>
//             <Card titulo="#07 - DESAFIO DE REPETIÇÃO" color="#3A9AD9">
//                 <TabelaProdutos />
//             </Card>
//             <Card titulo="#06 - REPETIÇÃO" color="#FF4C65">
//                 <ListaAlunos />
//             </Card>
//             <Card titulo="#05 - COMPONENTES COM FILHO " color="#00C8F8">
//                 <Familia sobrenome="Pierre">
//                     <FamiliaMembro nome="Angelina" />
//                     <FamiliaMembro nome="Bruno" />
//                     <FamiliaMembro nome="Santa" />
//                 </Familia>
//             </Card>
//             <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//                 <Aleatorio min={1} max={60} />
//                 <Aleatorio min={100} max={200} />
//             </Card>
//             <Card titulo="#03 - Fragmento" color="#E94C6F">
//                 <Fragmento />
//             </Card>
//             <Card titulo="#02 - Com Parametros" color="#E8B71A">
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Angelina Pierre"
//                     nota={9.3}
//                 />
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Santa Kaya"
//                     nota={0.3}
//                 />
//                 </Card>
//                 <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                     <Primeiro />
//                 </Card>
//         </div>
//     </div>

// //FORMA 1
// export default _ =>
//     <div className="App">
//         <h1>Fundamentos React 31</h1>
//         <div className="Cards">
//             <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P2" color ="#982365">
//                 <UsuarioInfo usuario={{ nome: 'Angelina' }} />
//             </Card>
//             <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P1" color="#982395">
//                 <ParOuImpar numero={20}></ParOuImpar>
//             </Card>
//             <Card titulo="#07 - DESAFIO DE REPETIÇÃO" color="#3A9AD9">
//                 <TabelaProdutos />
//             </Card>
//             <Card titulo="#06 - REPETIÇÃO" color="#FF4C65">
//                 <ListaAlunos />
//             </Card>
//             <Card titulo="#05 - COMPONENTES COM FILHO " color="#00C8F8">
//                 <Familia sobrenome="Pierre">
//                     <FamiliaMembro nome="Angelina" />
//                     <FamiliaMembro nome="Bruno" />
//                     <FamiliaMembro nome="Santa" />
//                 </Familia>
//             </Card>
//             <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//                 <Aleatorio min={1} max={60} />
//                 <Aleatorio min={100} max={200} />
//             </Card>
//             <Card titulo="#03 - Fragmento" color="#E94C6F">
//                 <Fragmento />
//             </Card>
//             <Card titulo="#02 - Com Parametros" color="#E8B71A">
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Angelina Pierre"
//                     nota={9.3}
//                 />
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Santa Kaya"
//                     nota={0.3}
//                 />
//                 </Card>
//                 <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                     <Primeiro />
//                 </Card>
//         </div>
//     </div>

/**
 * AULA 30 - RENDERIZAÇÃO CONDICIONAL #01
 * 
 * Vamos criar uma nova pasta chamada /condicional e criar um arquivo .jsx chamado ParOuImpar.jsx.
 * O mesmo principio utilizado no .css de condição iremos utilizar aqui.
 *       <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco.toFixed(2).replace('.',',')}</td>
                </tr>
 * 
 * Vamos passar um numero como parametro e queremos que msotre se o numero eh par ou impar de acordo com o valor passado
 * 
 * FORMA 1 - A ideia é,vamos receber um numero a partir as propriedades (props), e queremos saber quando vamos exibir que determinado numero é par ou impar baseado em uma renderização condicional.
 * 1) inserir o componente dentro de app.jsx(import)
 * 2) vamos pegar o componente criado e colocar dentro de um <card> em app.jsx
 * 3) colocar a propriedade numero no formato de numero mesmo kkkkkk
                <ParOuImpar numero={20}></ParOuImpar>
 * 
 * FORMA 2
 * 1) No componente, o que precisamos saber? temos um numero e queremos saber se ele é par ou impar...
 *  1.1) Podemos calcular isso:
        const isPar = props.numero % 2 === 0 
 *      Ou seja com essa variavel ou expressão podemos calcular
    1.2) Com essa variavel ou expressão podemos usar um codigo JS na <div> dentro de {chaves}, criando uma OPERATAÇÃO TERNÁRIA (3 valores), onde caso seja par irá mostrar o trecho jsx <span>Par</span> caso contrario <span>Ímpar</span>
 *
 *
 * Na proxima aula vamos criar uma componente [if?] que será usado para fazer a renderização condicional.
 * 
 * 
 */

// FORMA 1
// export default _ =>
//     <div className="App">
//         <h1>Fundamentos React 28</h1>
//         <div className="Cards">
//             <Card titulo="#08 - RENDERIZAÇÃO CONDICIONAL P1" color="#982395">
//                 <ParOuImpar numero={20}></ParOuImpar>
//             </Card>
//             <Card titulo="#07 - DESAFIO DE REPETIÇÃO" color="#3A9AD9">
//                 <TabelaProdutos />
//             </Card>
//             <Card titulo="#06 - Repetição" color="#FF4C65">
//                 <ListaAlunos />
//             </Card>
//             <Card titulo="#05 - Componentes com Filho" color="#00C8F8">
//                 <Familia sobrenome="Pierre">
//                     <FamiliaMembro nome="Angelina" />
//                     <FamiliaMembro nome="Santa" />
//                     <FamiliaMembro nome="Bruno" />
//                 </Familia>
//             </Card>
//             <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//                 <Aleatorio min={1} max={60} />
//                 <Aleatorio min={100} max={200} />
//             </Card>
//             <Card titulo="#03 - Fragmento" color="#E94C6F">
//                 <Fragmento />
//             </Card>
//             <Card titulo="#02 - Com Parametros" color="#E8B71A">
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Angelina Pierre"
//                     nota={9.3}
//                 />
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Santa Kaya"
//                     nota={0.3}
//                 />
//                 </Card>
//                 <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                     <Primeiro />
//                 </Card>
//         </div>
//     </div>




/**
 * AULA 28 e 29 - DESAFIO REPETIÇÃO (resposta professor)
 * 
 * 1) Dentro da pasta de /data temos que criar um arquivo chamado produtos.js
 * 2) produtos.js tera 3 atributos: id, nome e preço
 * 3) Dentro da pasta /repeticao vamos criar uma arquvo chamado tabelaProdutos.jsx
 * 4) Dentro do tabela produtos temos que criar uma tabela com esses produtos.
 * 
 * 
 */

// FORMA 1
// export default _ =>
//     <div className="App">
//         <h1>Fundamentos React 28</h1>
//         <div className="Cards">
//             <Card titulo="#07 - DESAFIO DE REPETIÇÃO" color="#3A9AD9">
//                 <TabelaProdutos />
//             </Card>
//             <Card titulo="#06 - Repetição" color="#FF4C65">
//                 <ListaAlunos />
//             </Card>
//             <Card titulo="#05 - Componentes com Filho" color="#00C8F8">
//                 <Familia sobrenome="Pierre">
//                     <FamiliaMembro nome="Angelina" />
//                     <FamiliaMembro nome="Santa" />
//                     <FamiliaMembro nome="Bruno" />
//                 </Familia>
//             </Card>
//             <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//                 <Aleatorio min={1} max={60} />
//                 <Aleatorio min={100} max={200} />
//             </Card>
//             <Card titulo="#03 - Fragmento" color="#E94C6F">
//                 <Fragmento />
//             </Card>
//             <Card titulo="#02 - Com Parametros" color="#E8B71A">
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Angelina Pierre"
//                     nota={9.3}
//                 />
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Santa Kaya"
//                     nota={0.3}
//                 />
//                 </Card>
//                 <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                     <Primeiro />
//                 </Card>
//         </div>
//     </div>


/**
 * AULA 27 - REPETIÇÃO
 * 
 * Vamos criar outra pasta para esse exercicio chamada /repetição e criar um exercicio[listaAlunos.jsx] para mostrarmos uma lista.
 * 
 * 1) Apos a criação do compoente ListaAlunos.jsx vamos importa-lo para ca
 * 
 * 2) para tornar o exemplo um pouco mais realista, vamos cria ruma pasta fora de componentes chamada /data e dentro vamos criar um arquivo chamado alunos.js
 * 3) Será um arquivo java script puro, nele vamos exportar um array com varios objetos dentro.
 */

// FORMA 1
// export default _ =>
//     <div className="App">
//         <h1>Fundamentos React 27</h1>
//         <div className="Cards">
//             <Card titulo="#06 - Repetição" color="#FF4C65">
//                 <ListaAlunos />
//             </Card>
//             <Card titulo="#05 - Componentes com Filho" color="#00C8F8">
//                 <Familia sobrenome="Pierre">
//                     <FamiliaMembro nome="Angelina" />
//                     <FamiliaMembro nome="Santa" />
//                     <FamiliaMembro nome="Bruno" />
//                 </Familia>
//             </Card>
//             <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//                 <Aleatorio min={1} max={60} />
//                 <Aleatorio min={100} max={200} />
//             </Card>
//             <Card titulo="#03 - Fragmento" color="#E94C6F">
//                 <Fragmento />
//             </Card>
//             <Card titulo="#02 - Com Parametros" color="#E8B71A">
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Angelina Pierre"
//                     nota={9.3}
//                 />
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Santa Kaya"
//                     nota={0.3}
//                 />
//             </Card>
//             <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                 <Primeiro />
//             </Card>
//         </div>
//     </div>




/***
 * AULA 26 - COMPONENTE COM FILHO #02
 * 
 * FORMA 1 -> AULA PASSADA
 * 
 * vamos tornar as coisas um pouco mais complicados no que diz respeito a conseguirmos passar as propriedades do elemento PAI para os FILHOS
 * 
 * Na aula passada criamos o componente familia. Temos um relação direta, onde a propria familia tem a relação/referencia direta para os membros da familia, e conseguimos passar os atributos diretamente do pai para o filho usando props (spreding)-> {...props}
 *
 * FORMA 2 - REFERENCIANDO COM {PROPS.CHILDREN}
 *
 * 1) retira o import de FamiliaMembro no familia.jsx
 * 2) dentro do app.jsx vamos passar os membros no corpo da <Familia> e importar o componente FamiliaMembro.jsx
 * 3) Se salvarmos como esta agora, teremos um problema, pois nao temos {props} em nenhum local. Não estamos recebendo {props} e dessa forma nao temos como pegar as informações do componente pai para ao filho.
 * 
 * FORMA 3 - tirando o props
 * 
 * 1) apos retirarmos o props vemos que nosso componente será renderizado.
 * 2) para colocarmos o sobrenome que colocamos no componente familia para o componente familiaMembro vamos ter que fazer um trabalho no componente familia.jsx 
 * 3) Conseguimos acessar metodos, inclusive os do react. Vamos ter que comentar os membros da familia colocados no app.jsx pois no caso que vamos fazer agora, so funciona com um unico elemento.
 * 4) METODO -> {React.cloneElement(props.chiuldren)}
 * 
 */

// FORMA 3 - RETIRANDO O PROPS E ESPECIFICANDO DENTRO DO COMPONENTE FAMILIA
// export default _ =>
//     <div className="App">
//         <h1>Fundamentos react 26</h1>
//         <div className="Cards">
//             <Card titulo="#05 - Compoente com Filhos" color="#00C8F8">
//                 <Familia sobrenome="Pierre">
//                     <FamiliaMembro nome="Angelina" />
//                     <FamiliaMembro nome="santa" />
//                     <FamiliaMembro nome="Kaya" />
//                 </Familia>
//             </Card>
//             <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//                 <Aleatorio min={1} max={60} />
//                 <Aleatorio min={100} max={200} />
//             </Card>
//             <Card titulo="#03 - Fragmento" color="#E94C6F">
//                 <Fragmento />
//             </Card>
//             <Card titulo="#02 - Com Paramentro" color="#E8B71A">
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Angelina Pierre"
//                     nota={9.3}
//                 />
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Santa Kaya"
//                     nota={0.3}
//                 />
//             </Card>
//             <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                 <Primeiro />
//             </Card>
//         </div>
//     </div>

// FORMA 2 - IRÁ DAR UM ERRO POIS NÃO DEFINIMOS O PROPS.
// export default _ =>
//     <div className="App">
//         <h1>Fundamentos React 26</h1>
//         <div className="Cards">
//             <Card titulo="#05 - Componente com filhos" color="#00C8F8">
//                 <familiaMembro nome="Angelina" sobrenome={props.sobrenome}/>
//                 <familiaMembro nome="Santa" {...props} />
//                 <familiaMembro nome="Bruno" sobrenome="Pereira" />
//             </Card>
//             <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//                 <Aleatorio min={1} max={60} />
//                 <Aleatorio min={100} max={200} />
//             </Card>
//             <Card titulo="#03 - Fragmento" color="#E94C6F">
//                 <Fragmento />
//             </Card>
//             <Card titulo="#02 - Com parametro" color="#E8B71A">
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Angelina Pierre"
//                     nota={9.3}
//                 />
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Santa Kaya"
//                     nota={0.3}
//                 />
//             </Card>
//             <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                 <Primeiro />
//             </Card>
//         </div>
//     </div>

// FORMA 1
// export default _ =>
//     <div className="App">
//         <h1>Fundamentos React 26</h1>
//         <div className="Cards">
//             <Card titulo="#05 - Componente com filhos" color="#00C8F8">
//                 <Familia sobrenome="Pierre" />
//             </Card>
//             <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//                 <Aleatorio min={1} max={60} />
//                 <Aleatorio min={1} max={60} />
//             </Card>
//             <Card titulo="#03 - Fragmento" color="#E94C6F">
//                 <Fragmento />
//             </Card>
//             <Card titulo="#02 - Com Parametro" color="#E8B71A">
//                 <ComParametro titulo="Situação do Aluno" nome="Angelina Pierre" nota={9.3} />
//                 <ComParametro titulo="Situação do Aluno" nome="Santa Kaya" nota={0.4} />
//             </Card>
//             <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                 <Primeiro />
//             </Card>
//         </div>
//     </div>

/**
 * AULA 25 - COMPOMENTE COM FILHO #01
 * 
 * Vamos criar 2 componente dentro de /basico
 * 
 * Apos criar Familia.jsx e FamiliaMembro.jsx vamos adicionar esses componentes em cards..
 * 
 * Vamos importar o componente Familia, não precisamos importar por quanto o FamiliaMembro.jsx pois ele ja foi importado dentro de familia.jsx
 * 
 * FORMA 1/2 -> Componente criado e passado os valores de maneira fixa, vamos passa usando o props.
 * 
 * FORMA 3 -> Passamos o sobrenome para o componente <Familia /> agora iremos querer ler os nomes nos membros da familia.
 * - Queremos passar a propriedade [sobrenome="Pierre"] do componente <Familia/> para o componente <FamiliaMembro />
 * 
 */

// FORMA 2
// export default _ =>
//     <div className="App">
//         <h1>Fundamentos React 25</h1>
//         <div className="Cards">
//             <Card titulo="#05 - Componente com filhos [#01]" color="#00C8F8">
//                 <Familia sobrenome="Pierre" />
//             </Card>
//             <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//                 <Aleatorio min={1} max={60} />
//                 <Aleatorio min={1} max={60} />
//             </Card>
//             <Card titulo="#03 - Framento" color="#E94C6F">
//                 <Fragmento />
//             </Card>
//             <Card titulo="#02 - Com Parametro" color="#E8B71A">
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Angelina Pierre"
//                     nota={9.3}
//                 />
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Santa Kaya"
//                     nota={0.3}
//                 />
//             </Card>
//             <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                 <Primeiro />
//             </Card>
//         </div>
//     </div>

// FORMA 1
// export default _ =>
    // <div className="App">
    //     <h1>Fundamentos React 25</h1>
    //     <div className="Cards">
    //         <Card titulo="#05 - Componente com filhos #01" color="#00C8F8">
    //             <Familia />
    //         </Card>
    //         <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
    //             <Aleatorio min={1} max={60} />
    //             <Aleatorio min={1} max={60} />
    //         </Card>
    //         <Card titulo="#03 - Fragmento" color="#E94C6F">
    //             <Fragmento />
    //         </Card>
    //         <Card titulo="#02 - Com Parametro" color="#E8B71A">
    //             <ComParametro 
    //                 titulo="Situação do Aluno"
    //                 nome="Angelina Pierre"
    //                 nota={9.3}
    //             />
    //             <ComParametro 
    //                 titulo="Situação do Aluno"
    //                 nome="Santa Kaya"
    //                 nota={0.3}
    //             />
    //         </Card>
    //         <Card titulo="#01 - Primeiro Componente" color="#588C73">
    //             <Primeiro />
    //         </Card>

    //     </div>
    // </div>
    

/**
 * AULA 24  COMPONENTE CARD #3
 * 
 * Vamos agora passar a cor como parametro. VAmos aplicar no background do do titulo e na borda do componente a cor
 * 
 * Vamos poder tirar o background do css
 * 
 */
// export default _ =>
//     <div className="App">
//         <h1>Fundamentos React 24</h1>
//         <div className="Cards">
//             <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
//                 <Aleatorio min={1} max={60} />
//                 <Aleatorio min={1} max={60} />
//             </Card>
//             <Card titulo="#03 - Fragmento" color="#E94C6F">
//                 <Fragmento />
//             </Card>
//             <Card titulo="#02 - Com Parametro" color="#E8B71A">
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Angelina Pierre"
//                     nota={9.3}
//                 />
//                 <ComParametro
//                     titulo="Situação do aluno"
//                     nome="Santa Kaya"
//                     nota="0.4"
//                 />
//             </Card>
//             <Card titulo="#01 - Primeiro Componente" color="#588C73">
//                 <Primeiro></Primeiro>
//             </Card>
//         </div>
//     </div>

/**
 * AULA 23 - COMPONENTE CARD #2
 * 
 * Vamos envolver todos os nosso componentes <Card> dentro de uma <div className="Cards">
 * 
 * Vamos tbm criar um arquivo css para o app.jsx
 * 
 */

// FORMA 1
// export default _ =>
//     <div className="App">
//         <h1>Fundamentos React 23</h1>
//         <div className="Cards">
//             <Card titulo="#04 - Desafio Aleatorio">
//                 <Aleatorio min={1} max={60} />
//                 <Aleatorio min={1} max={60} />
//             </Card>
//             <Card titulo="#03 - Fragmento">
//                 <Fragmento />
//             </Card>
//             <Card titulo="#02 - Com Parametro">
//                 <ComParametro
//                     titulo="Situação do Aluno"
//                     nome="Angelina Pierre"
//                     nota={9.3}
//                 />
//                 <ComParametro
//                     titulo="Situação do aluno"
//                     nome="Santa Kaya"
//                     nota="0.4"
//                 />
//             </Card>
//             <Card titulo="#01 - Primeiro Componente">
//                 <Primeiro></Primeiro>
//             </Card>
//         </div>
//     </div>


/**
 *      AULA 22 - COMPONENETE CARD #1
 *
 *  FORMA 2 - Perceba que esta mostrando a palavra conteudo e nao o valor da tag <aleatorio>
 *      **EXPLICAÇÃO EM Card.jsx
 *
 */

// FORMA 2
// export default _ =>
//     <div id="app">
//         <h1>Fundamentos React 22</h1>
//         <Card titulo="#04 - Desafio Aleatorio">
//             <Aleatorio min={1} max={60}/>
//             <Aleatorio min={1} max={60}/>
//         </Card>
//         <Card titulo="#03 - Fragmento">
//             <Fragmento />
//         </Card>
//         <Card titulo="#02 - Com Parametro">
//             <ComParametro
//                 titulo="Situação do Aluno"
//                 nome="Angelina Pierre"
//                 nota={9.3}
//             />
//             <ComParametro
//                 titulo="Situação do aluno"
//                 nome="Santa Kaya"
//                 nota="0.4"
//             />
//             </Card>
//         <Card titulo="#01 - Primeiro Componente">
//             <Primeiro></Primeiro>
//         </Card>
//     </div>


// FORMA 1
// export default _ =>
//     <div id ="app">
//         <h1>Fundamentos React 22</h1>
//         <Card
//             titulo="Exemplo de card"
//         />
//         <Aleatorio
//             min={1}
//             max={60}
//         />
//         <Fragmento />
//         <ComParametro
//             titulo="Situação Aluno"
//             nome="Angelina Pierre"
//             nota = {9.3}
//         />
//         <ComParametro
//         titulo="Situação Aluno"
//         nome="otavio manga"
//         nota = {0.3}
//     />
//         <Primeiro></Primeiro>
//     </div>

/**
 *      AULA 20/21 -> DESAFIO DO NUMERO ALEATORIO
 *
 */
// export default _ =>
//     <div id="app">
//         <h1>Fundamentos React 7</h1>
//         <Aleatorio
//             min={1}
//             max={60}
//         />
//         <Fragmento />
//         <ComParametro
//             titulo="Situação do Aluno"
//             nome="Angelina Pierre"
//             nota={9.3}
//         />
//         <Primeiro></Primeiro>
//     </div>


/**
 *      AULA 19 - COMPONENTE APP
 *
 * // FORMA 1
 * Em vez de colocar todos os nossos componentes dentro de index.js vamos criar um componente chamado app.jsx para guardar nossa aplicação.
 *
 * FORMA 2 - MAIS SIMPLIFICADA
 *
 * Quando temos o [exporte default] podemos retornar uma função anonima.
 *
 * Observe que o vscode esta mostrando que eh uma função anonima
 *
 * Se tirar o [default] não poderemos ter uma função anonima.
 *
 * FORMA 3 - ARROW FUNCTION
 *
 * Podemos substituir a palabra function por [=>] arrow function.
 *
 * FORMA 4 - Como so temos um parametro para a função podemos retirar os parenteses
 *
 * FORMA 5 - COMO NÃO VAMOS USAR O PROPS PODEMOS COLOCAR ()
 *
 * FORMA 6 - PODEMOS USAR O UNDERLINE PARA DIZER QUE TEMOS 1 PARAMETRO MAS NÃO IREMOS USA-LO.
 *
 * FORMA 7 - TIRANDO O CORPO DA FUNÇÃO
 *  - Não se pode fazer isso numa função normal.
 *
 * Vamos usar essa forma para as função
 *
 * Formatador ctrl+shift+f ou alt
 *
 */


// FORMA 7 - FORMA MAIS REDUZIDA.
// export default _ =>
//     <div id="app">
//         <h1>Fundamentos React 7</h1>
//         <Fragmento />
//         <ComParametro
//             titulo="Situação do Aluno"
//             nome="Angelina Pierre"
//             nota={9.3}
//         />
//         <Primeiro></Primeiro>
//     </div>

// FORMA 6
// export default _ => {
//     return (
//         <div id="app">
//             <h1>Fundamentos React 6</h1>
//             <Fragmento />
//             <ComParametro
//                 titulo = "Situação do Aluno"
//                 nome = "Angelina Pierre"
//                 nota = {9.3}
//             />
//             <Primeiro></Primeiro>
//         </div>
//     )
// }

// FORMA 5 - USANDO SOMENTES ()
// export default () => {
//     return (
//         <div id="app">
//             <h1>Fundamentos React 5</h1>
//             <Fragmento />
//             <ComParametro
//                 titulo = "Situação do Aluno"
//                 nome = "Angelina Pierre"
//                 nota = {9.3}
//             />
//             <Primeiro></Primeiro>
//         </div>
//     )
// }

// FORMA 4 - SEM PARENTESES
// export default props => {
//     return (
//         <div id="app">
//             <h1>Fundamentos React 4</h1>
//             <Fragmento />
//             <ComParametro
//                 titulo = "Situação do Aluno"
//                 nome = "Angelina Pierre"
//                 nota = {9.3}
//             />
//             <Primeiro></Primeiro>
//         </div>
//     )
// }

// FORMA 3 - ARROW FUNCTION
// eslint-disable-next-line import/no-anonymous-default-export
// export default (props) => {
//     return (
//         <div id="app">
//             <h1>Fundamentos React (ARROW)</h1>
//             <Fragmento />
//             <ComParametro
//                 titulo = "Situação do Aluno"
//                 nome = "Angelina Pierre"
//                 nota = {9.3}
//             />
//             <Primeiro></Primeiro>
//         </div>
//     )
// }

// FORMA 2 -> MAIS SIMPLIFICADA
// export default function(props){
//     return (
//         <div id="app">
//             <h1>Fundamentos React 2</h1>
//             <Fragmento />
//             <ComParametro
//                 titulo = "Situação do Aluno"
//                 nome = "Angelina Pierre"
//                 nota = {9.3}
//             />
//             <Primeiro />
//         </div>
//     )
// }


// FORMA 1
// export default function App(props){
//     return (
//         <div id="app">
//             <h1>Fundamentos React</h1>
//             <Fragmento />
//             <ComParametro
//                 titulo = "Situação do Aluno"
//                 aluno = "Angelina Pierre"
//                 nota = {9.3}
//             />
//             <Primeiro />
//         </div>
//     )
// }