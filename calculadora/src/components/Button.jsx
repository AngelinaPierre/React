/* eslint-disable import/no-anonymous-default-export */
// import react
import React from 'react'
// import style

import './Button.css'

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
 * 
 */
// forma 1
export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return(
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}


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
 * 
 */
// // forma 3
// export default props => {
//     let classes = 'button '
//     classes += props.operation ? 'operation' : ''
//     classes += props.double ? 'double' : ''
//     classes += props.triple ? 'triple' : ''

//     return(
//         <button 
//             onClick={e => props.click && props.click(props.label)}
//             className={classes}>
//             {props.label}
//         </button>
//     )
// }
// forma 2
// export default props => {
//     // podemos colcoar um espaço apos o button apra na hora de concatenar nao ter problema.
//     let classes = 'button '

//     classes += props.operation ? 'operation' : ''
//     classes += props.double ? 'double' : ''
//     classes += props.triple ? 'triple' : ''
//     return (
//         <button className={classes}>
//                 {props.label}
//         </button>
//     )
// }
// forma 1
// export default props =>
//     <button className={`
//         button
//         ${props.operation ? 'operation' : ''}
//         ${props.double ? 'double' : ''}
//         ${props.triple ? 'triple' : ''}
//     `}>
//         {props.label}
//     </button>





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

// // forma 1
// export default props =>
//     <button className="button">{props.label}</button>