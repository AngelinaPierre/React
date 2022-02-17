/* eslint-disable import/no-anonymous-default-export */
// IMPORT REACT
import React from 'react'

// IMPORT STYLE
import './Display.css'

/**
 * AULA 47 - COMPONENTE DISPLAY #2
 * 
 * Agora para fazermos o acabamento nos botões, cor e dizer que certos botões ocupam uma determinada quantidade de espaços na grid (3 ou 2).
 * 
 * FORMA 1 - BUTTON.CSS
 * 1) Quando clicamos no botão ele fica mais escuro, vamos colocar esse efeito.
 * 
 */

 export default props =>
 <div className='display'>{props.value}</div>

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
 * 
 */
// forma 1
// export default props =>
//     <div className='display'>{props.value}</div>