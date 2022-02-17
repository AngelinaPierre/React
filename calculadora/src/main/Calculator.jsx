// IMPORT REACT
import React, {Component} from 'react'

// IMPORTANDO STYLE
import './Calculator.css'

// IMPORTANDO COMPONENTES
import Button from '../components/Button'
import Display from '../components/Display'

/**
 * AULA 49 - IMPLEMENTANDO A LOGICA #2
 * 
 * Agora vamos construir a implementação da função [setOperation]
 * CASO 1-> TRABALHANDO COM O PRIMEIRO VALOR DO ARRAY.E ACABAMOS DE CHAMAR A FUNÇÃO SETOPERATION., O QUE SIGNIFICA QUE TEMOS QUE MUDAR O CURRENT PARA 1.
 *      - Ou seja, precisamos agora começar a mecher com o segundo valor do array, que é o valor de indice 1.
 *      - Alem disso temos que marcar a flag para o display ser limpo, pois acabamos de setar uma operação, logo, o proximo digito que será setado na calculadora precisa ser mostrado no display.
 *      - O terceiro parametro que precisamos alterar nessa função, do estado inicial para o atual, é a operação que acabamos de receber como parametro do setOperation.
 * 1) Logo vamos mecher em 3 estados [current, operation, cleardisplay]
 * 2) So entra no [if] se de fato o valor do CURRENT for 0. e quando clicarmos na operação será mudado para CURRENT = 1
 * 3) Quando clcarmos no proximo digito, o display será limpado e o novo digito será mostrado no display.
 * 4) Agora, vamos fazer a logica do caso estejamos mechendo no segundo elemento (current=1) e clicarmos em alguma operação.
 * 4.1) Quando somamos dois numeros, e queremos somar o 3, vamos precisar pegar a priemira operação, resolve-la e depois adicionala ao current=0 , para a nova entrada ser posta no current=1 quando chamarmos a soma na segunda vez.
 *      _ Quando cai no else, significa que ja tem uma operação setada, mudou  estado do current, a flag do currentOperation serve para pegarmos a operação anterir.
 * 4.2) Vamos gerar um clone de {values} e vamos fazer o calculo do valor em cima da função evol() (alternativa ao switch.) ->> ira criar uma advertencia mas fica como exercicio para a gente refatorar usando [switch(), ou if...else]
 * 4.3) Sempre agora que a segunda operação for selecionada, será armazenado o valor da operação em current=0 e o valor de current=1 será setado.
 * 4.4) o [eval()] possui alguns efeitos colaterais, podemos colocar ele dentro de uma flag [try()]. se der erro na tentativa  pegamos o valor zero e atribuimos o valor que esta no estado para nao mudar o valor atual do estado.
 */
// FORMA 1
const initialState = {
    displayValue:'0',
    clearDisplay: false,
    operation:null,
    values:[0,0],
    current:0
}
class Calculator extends Component {
    // clonando constante de estado inicial para state
    state = {...initialState}
    // criando constructor para fazer a bind do this
    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }
    // fazendo as 3 funções(limpar,add,operação)
    clearMemory(){
        this.setState(
            {...initialState}
        )
    }
    setOperation(operation){
        if(this.state.current === 0){
            this.setState({
                operation,
                current:  1,
                clearDisplay: true
            })
        }else{// current =1
            // operador =
            const equals = operation === '='
            const currentOperation = this.state.operation
            
            const values = [...this.state.values]
            try{
                values[0] = eval(`
                    ${values[0]}
                    ${currentOperation}
                    ${values[1]}
                `)
            } catch(e){
                values[0] = this.state.values[0]
            }
            values[1] = 0
            // salvando os estados
            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation, 
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                // passando valores para serem substituidos no estado
                values
            })
        }
    }
    addDigit(n){
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n

        this.setState(
            {
                displayValue,
                clearDisplay:false
            }
        )
        if(n!== '.'){
            // pegando o indice do valor que queremos alterar
            const i = this.state.current
            // convertendo o valor para float
            const newValue = parseFloat(displayValue)
            // clonar a partir do spread os valores dentro de um novo array
            const values = [...this.state.values]
            // alterando o valor atual que estamos mechendo
            values[i] = newValue
            //substituindo o novo array dentro de {state}
            this.setState({values})
            // ver o que ta acontecendo
            console.log(values)
        }
    }
    render(){
        return (
            <div className='calculator'>
                <Display value={this.state.displayValue} />
                <Button 
                    label="AC"
                    click={this.clearMemory}
                    triple
                />
                <Button 
                    label="/"
                    click={this.setOperation}
                    operation
                /> 
                <Button 
                    label="7"
                    click={this.addDigit}
                />
                <Button 
                    label="8"
                    click={this.addDigit}
                />
                <Button 
                    label="9"
                    click={this.addDigit}
                />
                <Button 
                    label="*"
                    click={this.setOperation}
                    operation
                />
                <Button 
                    label="4"
                    click={this.addDigit}
                />
                <Button 
                    label="5"
                    click={this.addDigit}
                />
                <Button 
                    label="6"
                    click={this.addDigit}
                />
                <Button 
                    label="-"
                    click={this.setOperation}
                    operation
                />
                <Button 
                    label="1"
                    click={this.addDigit}
                />
                <Button 
                    label="2"
                    click={this.addDigit}
                />
                <Button 
                    label="3"
                    click={this.addDigit}
                />
                <Button 
                    label="+"
                    click={this.setOperation}
                    operation
                />
                <Button 
                    label="0"
                    click={this.addDigit}
                    double
                />
                <Button 
                    label="."
                    click={this.addDigit}
                />
                <Button 
                    label="="
                    click={this.setOperation}
                    operation
                />
            </div>
        )
    }
}
export default Calculator


/**
 * AULA 48 - IMPLEMENTANDO A LOGICA #1
 * 
 * Vamos agora entender como a calculadora funciona e implementar sua logica.
 * 
 * 1) Quando estamos com a calculadora no ESTADO INICIAL(0) [mudar de 100 para 0].
 *      - Se clicarmos em 8 e depois 0 teremos 80.
 *      - tudo o que digitarmos na calculadora irá aparecer no display.
 * 2) Se clicarmos no botão add(+), irá haver um psicada do mesmo. e o valor 80 irá continuar no display. OU seja, não foi limpada a calculadora.
 *      - o proximo numero que digitarmos fará com que a calculadora seja limpada e o valor digitado irá aparecer no display.
 *      - O primeiro valor foi armazenado (80)
 *      - E em uma segunda area teremos armazenado o valor 20. Para quando clicarmos no (=) ele fazer a soma do primeiro elemento (80) com o segundo elemento (20).
 * 3) Se fizermos a mesma operação sem clicar no (=) e sim no (+) novamente, ele ira mostrar a soma dos valores ja colocados (100), armazenou a nova operação (=) e se digitarmos (50) e colcoar o (=) irá aparecer 150.
 * 
 * FORMA 1
 * 
 * 1) Para criarmos essa logica, dentro do [Calculator.jsx] vamos ter que criar o estado inicial do nosso objeto, e depois vamos começar a manipular o estado a partir do momento que começarmos a interagir com a calculadora.
 * 2) Fora da [class Calculator] vamos criar uma constante que irá representar o ESTADO INICIAL [initialState],nessa constantes teremos algumas propriedades/parametros:
 *          {displayValue: '0 '} -> valor que será exibido no display da calculadora.
 *          {clearDisplay: false} -> Precisa ou não limpar o display, inicialmente começando como falso.
 *          {operation: null} -> vamos ter a variavel que irá armazenar a operação.
 *          {value:[0,0]} -> array com 2 valores.
 *          {current:0} -> Dirá se estamos manipulando o valor de indice 0 do array, ou valor de indice 1.
 * 2.1) Como temos um array de valores, terá momentos que teremos que mudar em que indice será salvado o valor.
 * 3) Para criamos o estado inicial, simplemente criamos uma constante fora do objeto, ela foi criada,pq a função [clearMemory()] irá restaurar para o estado inicial.
 *          const initialState = {
                displayValue: '0',
                clearDisplay:false,
                operation:null,
                values: [0,0],
                current:0
            }
 * 4) Vamos colcoar para ele startar o estado usando o operador spreding da constante [initialState]. Ou seja, vamos criar um clone do objeto {initialState} e recebe-lo em {state}
            state = { ...initialState}
 * 5) Caso a função [clearMemory()] seja chamada vamos alterar voltar a calculadora para o estado inciial.
            clearMemory(){
                this.setState(
                    { ...initialState}
                )
            }
 * 6) Por isso colocamos o [initiaState] em uma constante, tanto para referenciar na criação do estado como para referenciar a partir da função [clearMemory].
 * 
 * FORMA 2
 * 
 * 1)Agora vamos fazer com que o display da calculadora aponte para o estado. e não mais para um valor fixo.
 * 1.1) Dentro da propriedade [value] colocamos [this.state.displayValue]
 * 
 * FORMA 3
 * 
 * 1) Agora vamos mecher na função de ADICIONAR UM DIGITO.
 * 1.1) Se recebermos um digito que é um (.) e o valor que tem no display ja contem um ponto, significa que nao podemos adicionar outro ponto. (regra para evitar ter 2 pontos na calculadora)
 *          if(n === '.' && this.state.displayValue.includes('.')){
            return
        }
 * 2) vamos criar uma constante chamada (clearDisplay) dentro do escopo de [addDigit] que terá dois cenarios:
 *      1) quando o display contem apenas o digito 0.
 *      2)  OU vamos limpar quando a variavel clearDisplay for verdadeira.
 *      const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
 * 3) Vamos criar outra variavel chamda [currenValue] que ira depender se o display vai ser limpo[clearDisplay = true] ou nao.
 *      - true -> currentValue = vazio
 *      - false -> vamos usar o this.state.displayValue.
 *      const currentValue = clearDisplay ? '' : this.state.displayValue
 * 4) Vamos criar outra constante para colocar o novo valor que será mostrado no display.
 * 5) Agora iremos mudar o ESTADO DA APLICAÇÃO ao clicar. Ao fazer isso, os botões que clicarmos serão mostrados na aplicação.
 * 5.1) Se tirarmos a regra do ClearDisplay igual a zero, teremos um zero a esquerda todas as vezes que formos add um digito.
 * 
 * FORMA 4
 * 
 * 1) Sempre que for digitado um valor diferente de (.) ou seja, um numero, vamos armazena-lo no array [values: [0,0]], so que o array nao eh uma string.
 * 1.1) O [displayValue] será uma string, mas o valor interno que será armazzenado dentro dos arrays, queremos que seja um numero e nao uma string.
 * 1.2) Como a função [addDigit] recebe os numeros e o (.) temos que fazer uma validação usando o (if).
 * 1.3) vamos armazenar na constante criada (i) o indice dentro do array que estamos mechendo
 *      0 - primeiro elemento
 *      1 - segundo elemento.
 * 1.4) Vamos criar uma consatnte para armazenar o novo valor e transforma-lo em FLOAT.
 * 1.5) Vamos criar outra constante chamada valores(values) onde vamos clonar o array para um novo array.
 * 1.6) Agora colocamos para receber de acordo com o indice (i)
 * 1.7) Agora uma vez que alteramos o array, vamos adiciona-lo no ESTADO DO OBJETO. 
 * 
 * NA PROXIMA AULA, VAMOS FAZER A LOGICA DA OPERASÇÃO PARA QUANDO CLICARMOS EM UM BOTÃO DE OPERAÇÃO O CURRENT MUDAR DO PRIMEIRO VALOR PARA O SEGUNDO.
 * 
 */
// FORMA 4
// const initialState = {
//     displayValue:'0',
//     clearDisplay: false,
//     operation:null,
//     values:[0,0],
//     current:0
// }
// class Calculator extends Component {
//     // clonando constante de estado inicial para state
//     state = {...initialState}
//     // criando constructor para fazer a bind do this
//     constructor(props){
//         super(props)
//         this.clearMemory = this.clearMemory.bind(this)
//         this.setOperation = this.setOperation.bind(this)
//         this.addDigit = this.addDigit.bind(this)
//     }
//     // fazendo as 3 funções(limpar,add,operação)
//     clearMemory(){
//         this.setState(
//             {...initialState}
//         )
//     }
//     setOperation(operation){
//         console.log(operation)
//     }
//     addDigit(n){
//         if(n === '.' && this.state.displayValue.includes('.')){
//             return
//         }
//         const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
//         const currentValue = clearDisplay ? '' : this.state.displayValue
//         const displayValue = currentValue + n

//         this.setState(
//             {
//                 displayValue,
//                 clearDisplay:false
//             }
//         )
//         if(n!== '.'){
//             // pegando o indice do valor que queremos alterar
//             const i = this.state.current
//             // convertendo o valor para float
//             const newValue = parseFloat(displayValue)
//             // clonar a partir do spread os valores dentro de um novo array
//             const values = [...this.state.values]
//             // alterando o valor atual que estamos mechendo
//             values[i] = newValue
//             //substituindo o novo array dentro de {state}
//             this.setState({values})
//             // ver o que ta acontecendo
//             console.log(values)
//         }
//     }
//     render(){
//         return (
//             <div className='calculator'>
//                 <Display value={this.state.displayValue} />
//                 <Button 
//                     label="AC"
//                     click={this.clearMemory}
//                     triple
//                 />
//                 <Button 
//                     label="/"
//                     click={this.setOperation}
//                     operation
//                 /> 
//                 <Button 
//                     label="7"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="8"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="9"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="*"
//                     click={this.setOperation}
//                     operation
//                 />
//                 <Button 
//                     label="4"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="5"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="6"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="-"
//                     click={this.setOperation}
//                     operation
//                 />
//                 <Button 
//                     label="1"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="2"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="3"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="+"
//                     click={this.setOperation}
//                     operation
//                 />
//                 <Button 
//                     label="0"
//                     click={this.addDigit}
//                     double
//                 />
//                 <Button 
//                     label="."
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="="
//                     click={this.setOperation}
//                     operation
//                 />
//             </div>
//         )
//     }
// }
// export default Calculator
// FORMA 3
// const initialState = {
//     displayValue:'0',
//     clearDisplay: false,
//     operation:null,
//     values:[0,0],
//     current:0
// }
// class Calculator extends Component {
//     // clonando constante de estado inicial para state
//     state = {...initialState}
//     // criando constructor para fazer a bind do this
//     constructor(props){
//         super(props)
//         this.clearMemory = this.clearMemory.bind(this)
//         this.setOperation = this.setOperation.bind(this)
//         this.addDigit = this.addDigit.bind(this)
//     }
//     // fazendo as 3 funções(limpar,add,operação)
//     clearMemory(){
//         this.setState(
//             {...initialState}
//         )
//     }
//     setOperation(operation){
//         console.log(operation)
//     }
//     addDigit(n){
//         if(n === '.' && this.state.displayValue.includes('.')){
//             return
//         }
//         const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
//         const currentValue = clearDisplay ? '' : this.state.displayValue
//         const displayValue = currentValue + n
//         this.setState(
//             {
//                 displayValue,
//                 clearDisplay:false
//             }
//         )
//     }
//     render(){
//         return (
//             <div className='calculator'>
//                 <Display value={this.state.displayValue} />
//                 <Button 
//                     label="AC"
//                     click={this.clearMemory}
//                     triple
//                 />
//                 <Button 
//                     label="/"
//                     click={this.setOperation}
//                     operation
//                 /> 
//                 <Button 
//                     label="7"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="8"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="9"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="*"
//                     click={this.setOperation}
//                     operation
//                 />
//                 <Button 
//                     label="4"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="5"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="6"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="-"
//                     click={this.setOperation}
//                     operation
//                 />
//                 <Button 
//                     label="1"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="2"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="3"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="+"
//                     click={this.setOperation}
//                     operation
//                 />
//                 <Button 
//                     label="0"
//                     click={this.addDigit}
//                     double
//                 />
//                 <Button 
//                     label="."
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="="
//                     click={this.setOperation}
//                     operation
//                 />
//             </div>
//         )
//     }
// }
// export default Calculator

// FORMA 2
// const initialState = {
//     displayValue: '0',
//     clearDisplay:false,
//     operation:null,
//     values: [0,0],
//     current:0
// }

// class Calculator extends Component{
//      // clonando o initialState em state
//     state = { ...initialState}

//     // criando constructor for [this]
//     constructor(props){
//         super(props)
//         this.clearMemory = this.clearMemory.bind(this)
//         this.setOperation = this.setOperation.bind(this)
//         this.addDigit = this.addDigit.bind(this)
//     }
//     // limpar display
//     clearMemory(){
//         this.setState(
//             { ...initialState}
//         )
//     }
//     setOperation(operation){
//         console.log(operation)
//     }
//     addDigit(n){
//         console.log(n)
//     }
//     render(){
//         return (
//             <div className='calculator'>
//                 <Display value={this.state.displayValue} />
//                 <Button 
//                     label="AC"
//                     click={this.clearMemory}
//                     triple
//                 />
//                 <Button 
//                     label="/"
//                     click={this.setOperation}
//                     operation
//                 /> 
//                 <Button 
//                     label="7"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="8"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="9"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="*"
//                     click={this.setOperation}
//                     operation
//                 />
//                 <Button 
//                     label="4"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="5"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="6"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="-"
//                     click={this.setOperation}
//                     operation
//                 />
//                 <Button 
//                     label="1"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="2"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="3"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="+"
//                     click={this.setOperation}
//                     operation
//                 />
//                 <Button 
//                     label="0"
//                     click={this.addDigit}
//                     double
//                 />
//                 <Button 
//                     label="."
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="="
//                     click={this.setOperation}
//                     operation
//                 />
//             </div>
//         )
//     }
// }
// export default Calculator

// FORMA 1
// const initialState = {
//     displayValue: '0',
//     clearDisplay:false,
//     operation:null,
//     values: [0,0],
//     current:0
// }

// class Calculator extends Component{
//      // clonando o initialState em state
//     state = { ...initialState}

//     // criando constructor for [this]
//     constructor(props){
//         super(props)
//         this.clearMemory = this.clearMemory.bind(this)
//         this.setOperation = this.setOperation.bind(this)
//         this.addDigit = this.addDigit.bind(this)
//     }
//     // limpar display
//     clearMemory(){
//         this.setState(
//             { ...initialState}
//         )
//     }
//     setOperation(operation){
//         console.log(operation)
//     }
//     addDigit(n){
//         console.log(n)
//     }
//     render(){
//         return (
//             <div className='calculator'>
//                 <Display value="0" />
//                 <Button 
//                     label="AC"
//                     click={this.clearMemory}
//                     triple
//                 />
//                 <Button 
//                     label="/"
//                     click={this.setOperation}
//                     operation
//                 /> 
//                 <Button 
//                     label="7"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="8"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="9"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="*"
//                     click={this.setOperation}
//                     operation
//                 />
//                 <Button 
//                     label="4"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="5"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="6"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="-"
//                     click={this.setOperation}
//                     operation
//                 />
//                 <Button 
//                     label="1"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="2"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="3"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="+"
//                     click={this.setOperation}
//                     operation
//                 />
//                 <Button 
//                     label="0"
//                     click={this.addDigit}
//                     double
//                 />
//                 <Button 
//                     label="."
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="="
//                     click={this.setOperation}
//                     operation
//                 />
//             </div>
//         )
//     }
// }
// export default Calculator

/**
 * AULA 47 - COMPONENTE DISPLAY #2
 * 
 * Agora para fazermos o acabamento nos botões, cor e dizer que certos botões ocupam uma determinada quantidade de espaços na grid (3 ou 2).
 * 
 * FORMA 1 - BUTTON.CSS
 * 1) Quando clicamos no botão ele fica mais escuro, vamos colocar esse efeito.
 * 2) Vamos criar uma classe chamada [button.double] quando o botão ocupa 2 posições, o que fazemos?
 * 2.1) Iremos fazer o mesmo para 3.
 * 3) Vamos criar tbm uma outra classe chamada [button.operation] , ou seja, quando o botão representar uma operação, vamos ter um background diferente.
 * 3.1)Vamos tbm alterar o modo ativo de [button.operation]
 * 
 * FORMA 2
 * 
 * Agora iremos fazer com que as propriedades que aplicamos (classes que criamos) sejam aplicadas no botão.
 * 
 * 1) Em Button.jsx, onde temos [className='button'] vamos colocar uma expressão que será delimitada por aspas ivnertidas (backtic) ou seja, tem uma template string.
 * 1.1) Sempre que tivermos uma expressão {chaves} detro do .JSX PODEMOS COLOCAR CODIGO JAVASCRIPT.
 * 1.2) Logo podemos colocar uma template string para que possamos compor as classes do botão de acordo com a necessida.
 * 1.3) A primeira classe do template string sempre irá ser aplicada, independente de qualquer regra, mas as outras classes nao. Elas irão precisar de aguma propriedade para informar se serão aplciadas ou nao.
 * 1.4) Vamos tbm usar condicionais como fellsafe.
        ${props.operation ? 'operation' : ''}
 *          Se a propriedade estiver definida, colocarmos operation, caso não, não colocarmos propriedade nenhuma.
            ${} -> Como estamos usando java script puro, temos que olocar o dolar($) e as {chaves}.
            - Ou seja, dentro de uma template string utilizamos o dolar e as chaves para interpolar uma variavel.
            - Em outras palavras significa que se a propriedade operation for passada para o botão ele ira adicionar a classe.
 * 1.5) iremos fazer isso tbm para double e triple.
 * 
 * Estamos fazendo uma EXIBIÇÃO CONDICIONAL DE CLASSES. aPLICAMOS A CLASSE OU NÃO DENTRO DO BOTÃO DE ACORDO COM AS PROPRIEDADES QUE RECEBEMOS.
 * 
 * FORMA 2 - outra forma de fazer o mesmo codigo
 * 
 * Aqui estamos gerando as classes do css a partir da variavel [classes]
 * 
 * Fica mais legivel a o codigo, no contrario de fazer da forma 1 (jsx)
 * 
 * FORMA 3
 * Antes de usarmos essas classes diretamente no Calculator.jsx teremos uma questão importante que é a seguinte:
 * 1) No botão iremos colocar o evento do click, quando clicarmos no botão queremos que ele retorne no display o conteudo do botão que foi clicado.
 * 2) o [onClick] irá disparar uma ARROW FUNCTION que recebe um EVENTO QUE IRA CHAMAR O PROPS.CLICK()
 * 2.1) Ou seja, esperamos receber nas propriedades do botão uma propriedade chamada click e essa propriedade, o conteudo dela será uma função que será chamada, so que em vez da função click() receber um evento, irá receber diretamente o (e.target.innerHTML). Ou seja, o conteudo do elemento será passado para a função click, e essa função fará o que quiser la na classe calculator.
 * 3) Da maneira que esta(sem colocarmos a propriedade click()), se clicarmos ira dar uma erro, podemos colocar uma condição para a chamada da função.
 * 
 * ObS: No momento do exercicio o professor não percebeu que o conteudo do botão é a mesma coisa que props.label, então vamos trocar props.click(e.target.innerHTML) por (props.click(props.label))
 * 
 * FORMA 4 - Calculator.jsx. 
 * 
 * Vamos cagora criar 3 funções:
 *      1) Zerar Calculadora (AC) -- clearMemory()
 *      2) Adicionar um digito.
 *      3) Setar operação.
 * 
 * 1) Para isso, dentro da função calculadora, vamos criar 3 funções e vamos inicialmente usar o [console.log()] para vermos o que esta acontencedo.
 * 2) Primeira função sera [clearMemory()] dentro dela iremos colocar um console.log('limpar')
 * 3) a segunda será [setOperatio()], vamos colocar um console.log() para imprimir a operação que recebemos como parametro
 * 4) A terceira será [adicionarDigito] que tera como parametro um valor (n) e iremos colocar nela um console.log() para vermos esse valor.
 * 5) Temos duas possibilidades para no click do botão essas funções serem chamadas. Podemos usar o [this] como (bind) ou uma [arrow function].
 * 5.1) Vamos usar a [arrow function] e coloca-la dentro do render() pois iremos querer usa-la para varias funções.
 * 5.2) Vamos criar uma constante/funcão chamada [addDigit] que ira receber uma arrow function com o evento (n), e invoca [this.addDigit(n)] passando o (n)
 * 5.2.1) o [this] dentro do render() está representando o objeto atual, logo estamos chamando a função addDigit criada acima.
 * 5.3) Vamos fazer o mesmo para as outras funções.
 * 
 * Estamos criando funções arrow para garantir que o [this] seja exatamente o [this] que queremos associar.
 * 6) A função de limpar o display, será colocado diretamente na tag do display.
 * 7) Dentro do buton que tem o label (AC) vamos colocar a chamada da função.
 * 8) No caso dos botõe de operação, como ja fizemos as constantes?funções como arrow function, referenciamos a função diretamente.
 * 
 * FORMA 2
 * 
 * 1) So criamos a arrow function para resolver o problema do [this].
 * 1.1) Outra maneira seria criar um [constructor] e fazer o bind de uma unica vez.
 *      constructor(props){
 *          this.clearMemory = this.clearMemory.bind(this)
 *          this.setOperation = this.setOperation.bind(this)
 *          this.addDigit = this.addDigit.bind(this)
 * }
 * 2) Irá dar problema se no constructor não chamarmos o SUPER(PROPS)
 * 
 * AGORA TEMOS TODOS OS BOTOES FUNCIONANDO.
 * 
 * FORMA 3 
 * 
 * 1) Para terminarmos essa aula, dentro do botão 'AC' podemos aplicar a classe criado no css [triple] e automaticamente será ocupado 3 espaços no botão AC, sem precisarmos passar nenhum valor, somente a propriedade.
 * 2) No caso do botão (0) podemos colocar um [double].
 * 3) E agora em todos os botões que representam oeprações colocamos a classe [operation]
 * 
 * 
 */
// FORMA 3
// class Calculator extends Component{
//     // criando constructor for [this]
//     constructor(props){
//         super(props)
//         this.clearMemory = this.clearMemory.bind(this)
//         this.setOperation = this.setOperation.bind(this)
//         this.addDigit = this.addDigit.bind(this)
//     }
//     // limpar display
//     clearMemory(){
//         console.log('limpar')
//     }
//     setOperation(operation){
//         console.log(operation)
//     }
//     addDigit(n){
//         console.log(n)
//     }
//     render(){
//         return (
//             <div className='calculator'>
//                 <Display value="100" />
//                 <Button 
//                     label="AC"
//                     click={this.clearMemory}
//                     triple
//                 />
//                 <Button 
//                     label="/"
//                     click={this.setOperation}
//                     operation
//                 /> 
//                 <Button 
//                     label="7"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="8"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="9"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="*"
//                     click={this.setOperation}
//                     operation
//                 />
//                 <Button 
//                     label="4"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="5"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="6"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="-"
//                     click={this.setOperation}
//                     operation
//                 />
//                 <Button 
//                     label="1"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="2"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="3"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="+"
//                     click={this.setOperation}
//                     operation
//                 />
//                 <Button 
//                     label="0"
//                     click={this.addDigit}
//                     double
//                 />
//                 <Button 
//                     label="."
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="="
//                     click={this.setOperation}
//                     operation
//                 />
//             </div>
//         )
//     }
// }
// export default Calculator


// FORMA 2
// class Calculator extends Component{
//     // criando constructor for [this]
//     constructor(props){
//         super(props)
//         this.clearMemory = this.clearMemory.bind(this)
//         this.setOperation = this.setOperation.bind(this)
//         this.addDigit = this.addDigit.bind(this)
//     }
//     // limpar display
//     clearMemory(){
//         console.log('limpar')
//     }
//     setOperation(operation){
//         console.log(operation)
//     }
//     addDigit(n){
//         console.log(n)
//     }
//     render(){
//         return (
//             <div className='calculator'>
//                 <Display value="100" />
//                 <Button 
//                     label="AC"
//                     click={this.clearMemory}
//                 />
//                 <Button 
//                     label="/"
//                     click={this.setOperation}
//                 /> 
//                 <Button 
//                     label="7"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                     label="8"
//                     click={this.addDigit}
//                 />
//                 <Button 
//                 label="*"
//                 click={this.setOperation}
//             />
//                 <Button 
//                 label="4"
//                 click={this.addDigit}
//             />
//                 <Button 
//                 label="5"
//                 click={this.addDigit}
//             />
//                 <Button 
//                 label="6"
//                 click={this.addDigit}
//             />
//                 <Button 
//                 label="-"
//                 click={this.setOperation}
//             />
//                 <Button 
//                 label="9"
//                 click={this.addDigit}
//             />
//                 <Button 
//                 label="1"
//                 click={this.addDigit}
//             />
//                 <Button 
//                 label="2"
//                 click={this.addDigit}
//             />
//                 <Button 
//                 label="3"
//                 click={this.addDigit}
//             />
//                 <Button 
//                 label="+"
//                 click={this.setOperation}
//             />
//                 <Button 
//                 label="0"
//                 click={this.addDigit}
//             />
//                 <Button 
//                 label="."
//                 click={this.addDigit}
//             />
//                 <Button 
//                 label="="
//                 click={this.setOperation}
//             />
//             </div>
//         )
//     }
// }

// export default Calculator

// forma 1
// class Calculator extends Component {
//     clearMemory(){
//         console.log('limpar')
//     }
//     setOperation(operation){
//         console.log(operation)
//     }
//     addDigit(n){
//         console.log(n)
//     }
//     render(){
//         const addDigit = n => this.addDigit(n)
//         const setOperation = op => this.setOperation(op)
//         return (
//             <div className='calculator'>
//                 <Display value="100" />
//                 <Button 
//                     label="AC"
//                     click = {
//                         () => this.clearMemory()
//                     }
//                 />
//                 <Button 
//                     label="/"
//                     click={
//                         setOperation
//                     }
//                 />
//                 <Button 
//                     label="7"
//                     click = {
//                         addDigit
//                     }
//                 />
//                 <Button label="8"/>
//                 <Button label="9"/>
//                 <Button label="*"/>
//                 <Button label="4"/>
//                 <Button label="5"/>
//                 <Button label="6"/>
//                 <Button label="-"/>
//                 <Button label="1"/>
//                 <Button label="2"/>
//                 <Button label="3"/>
//                 <Button label="+"/>
//                 <Button label="0"/>
//                 <Button label="."/>
//                 <Button label="="/>
//             </div>
//         )
//     }
// }

// export default Calculator

/**
 * AULA 46 - COMPONENTE DISPLAY #1
 * 
 * Agora vamos criar o componente que será responsavel por ser o display da calculadora
 * 
 * Podemos observar que quando vamos organizando nossa APLICAÇÃO de uma forma muito mais sustentavel. Em vez de ficar fazendo um monte de script ou nativo em java script ou mesmo em Jquery.
 * 
 * Criamos COMPONENTES e cada componente tem suas responsabilidades. Logo fica muito mais facil a reutilização (ex: componente Button.jsx esta sendo utilizado varias vezes.)
 * 
 * Fica mais facil de manter o codigo, se der um problema no componente saberemos qual é e temos como resolver o problema de uma forma muito mais localizada e toda sua aplicação será beneficiada por conta disso.
 * 
 * FORMA 1
 * 
 * 1) Dentro de /componentes vamos criar 2 novos arquivos, o [Display.jsx | Display.css]
 * 2) Vamos tbm fazer o DISPLAY como um COMPONENTE FUNCIONAL.
 * 3) o {props.value} será exatamente o que será exibido no dispaly.
 * 4) Vamos em [Calculator.jsx] importar o componente do DISPLAY e colocar um valor inicial de 100, depois iremos mudar para representar o ESTADO da calculadora atual.
 * 5) Em [Calculator.css] temos 5 linhas dos botões, mas na calculadora temos 6 linhas, que seria a do display e as outras 5 dos botões. 
 * 5.1) Então antes das 5 linhas fixas que são os botões, vamos usar uma linha que irá representar o display.
 * 5.2) podemos usar o fragment, uma propriedade do [css] que ira pegar exatamente o restante do tamanho disponivel na tela.
 * 6) Agora iremos melhorar a visualização do display diretamente no [DIsplay.css].
 * 6.1) Vamos criar a classe display, e existe uma propriedade chamada [grid-column] onde podemos dar um span e dizer quantas linhas da grid iremos ocupar. No caso estará ocupando 4 linhas  
 * 6.2) Embora o display seja um elemento da grid, podemos tbm aplicar a ele a propriedade [flex-box]
* 7) Como a propria calculadora esta dando um [overflow:hidden] se inserirmos um numero com varias casas decimais irá passar do tamanho da dela. Para garantir que o display não herde essa propriedade do parent, usamos o [overflow:hidden]
 */

// // forma 1
// class Calculator extends Component {
//     render(){
//         return (
//             <div className='calculator'>
//                 <Display value="100" />
//                 <Button label="AC"/>
//                 <Button label="/"/>
//                 <Button label="7"/>
//                 <Button label="8"/>
//                 <Button label="9"/>
//                 <Button label="*"/>
//                 <Button label="4"/>
//                 <Button label="5"/>
//                 <Button label="6"/>
//                 <Button label="-"/>
//                 <Button label="1"/>
//                 <Button label="2"/>
//                 <Button label="3"/>
//                 <Button label="+"/>
//                 <Button label="0"/>
//                 <Button label="."/>
//                 <Button label="="/>
//             </div>
//         )
//     }
// }

// export default Calculator

/**
 * AULA 45 - COMPONENTE BUTTON 01
 * 
 * Agora que criamos a estrutura basica da nossa calculadora, vamos agora focar em criar os botões, o display e depois a logica para fazer os calculos.
 * 
 * Dentro da pasta /src vamos criar um novo diretorio chamado /components e dentro do mesmo vamos criar alguns arquivos jsx e css.
 * 
 * FORMA 1 
 * 
 * 1)Fazer imports react + css
 * 2) Apos a criação vamos agra criar um componente funcional, sem estado
 * 2.1) Quanto mais componentes sem estado criarmos melhor será para a nossa aplicação. Que sã componentes que recebem parametros e de acordo com os mesmo conseguimos renderiar o componente mais facilmente.
 * 3) apos a criação do <button> vamos precisar fazer o import do mesmo em Calculator.jsx.
 * 4) Agora iremos estilizar o button.css, onde vamos usar um recurso, sobre como usar variaveis dentro do css.
 * 4.1) A declaração de variaveis dentro do css é feita ao declarar elas dentro da psude-classe [:root], vamos criar a variavel e o browser irá interpreta-la tranquilamente.
 *      :root{
 *      --bg-button:#f0f0f0;
 * }
 * 4.2) para criar uma variavel é preciso colocar o [--] no começo. [--bg-button] = background do butao.
 * 4.3) Podemos usar essas variaveis a partir da função [var()] usada para referenciar uma variavel.
 * 4.3) Apos algumas alterações vemos que quando o usuario clicar no botão á um outline, vamos remover isso
 * 5) No [Button.jsx]vamos usar uma propriedade [props.label] que será inserida no botão.
 * 6) E na [Calculator.jsx] vamos passar o [label]
 * 
 * FORMA 2
 * 1) Usamos o [flexbox] para organizar, mas agora vamos uasr o [css grid] para organizar a parte de fora. 
 * 2) Vamos usar o [display:grid] e imediatamente vemos alterações.
 * 3) Como colocamos o [overflow:hidden] acabou escondendo os outros numeros para caber nos parametros definidos do tamanho da calculadora.
 * 4)Vamos agora começar a definir os templates de LINHAS E COLUNAS para que possamos renderizar corretamente esses elementos.
 * 5) No inicio da calculadora teremos o display, e cada uma desass linhas (5) ira ter uma tamanho fixo.
 * 6) Por enquanto vamos ignorar o display e fazer as definições da linha
 * 
 */

//  class Calculator extends Component {
//     render(){
//         return (
//             <div className="calculator">
//                 <Button label="AC"/>
//                 <Button label="/"/>
//                 <Button label="7"/>
//                 <Button label="8"/>
//                 <Button label="9"/>
//                 <Button label="*"/>
//                 <Button label="4"/>
//                 <Button label="5"/>
//                 <Button label="6"/>
//                 <Button label="-"/>
//                 <Button label="1"/>
//                 <Button label="2"/>
//                 <Button label="3"/>
//                 <Button label="+"/>
//                 <Button label="0"/>
//                 <Button label="."/>
//                 <Button label="="/>
//             </div>
//         )
//     }
// }

// export default Calculator 

/**
 * AULA 44
 * 
 * Para começar vamos criar uma pasta dentro de /src/main, pois o componente principal
da aplicação será (Calculator).
 *      - Criar o componente e o css para o mesmo.
 * Teremos outros componentes como o display e os botões.
 * 
 * Para a calculadora vamos utilizar um componente de classe, pois vamos precisar de estados e funções de manipulação.
 * 
 * FORMA 1
 * 
 * 1) Dentro da expressão render temos que colocar um return que será onde colocaqueremos nossas expressões jsx.
 * 2) Vamos criar na <div> principal o className='calculator'
 * 3) Vamos fazer algumas estilizações no css.
 * 4) Vamos abrir o Index.js do projeto calculadora e fazer algumas alterações.
 * 4.1) Retirar o Import do App e colocar o da calculadora.
 * 4.2) atualizar no renderDOM()
 * 5) Para fazer a centralização vamos alterar o arquivo index.css. Vamos apagar o estilo padrão e criar alguns estilos.
 * 6) No index.js vamos colocar um h1 e o componente <Calculator> dentro de uma ,div>s
 * 
 * 
 */
// forma 1
// class Calculator extends Component {
//     render(){
//         return (
//             <div className="calculator">
//             </div>
//         )
//     }
// }

// export default Calculator 