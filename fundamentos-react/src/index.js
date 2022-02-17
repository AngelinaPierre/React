import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

// IMPORT -> COMPONENTS
// import Primeiro from './components/basicos/Primeiro'
// import ComParametro from './components/basicos/ComParametro'
// import Fragmento from './components/basicos/Fragmento'
import App from './App'

/**
 * AULA 19 - COMPONENTE APP
 * 
 * Em vez de colocar todos os nossos componentes dentro de index.js vamos criar um componentes chamado app.jsx para guardar esses componentes...
 * 
 * Criamos um compoenete para guardar nossa aplicação, referenciamos ele no ReactDOM.render() e agora não precisamos mais alterar nada no index.js (atual)
 * 
 */

ReactDOM.render(
    <App />, // componente que criamos -> app.jsx
    document.getElementById('root')
)


// AULA 18 - react fragment
// REACT FRAGMENT -> Vamos simular um erro que é conhecido como componentes JSX adjacentes, quando tentamos retornar dois elementos sem que haja algo envolvendo os elementos.
    // O que acontece se apagarmos a tag <div>?
    // Da um erro que diz que os elementos JSX adjacentes devem ser envolvidos em tags.
// ReactDOM.render(
//     <div id="app">
//         <Primeiro/>
//         <ComParametro
//             titulo = "|Situação Aluno[h2]|"
//             aluno = "Angelina[p]"
//             nota = {5.3}
//         />
//         <ComParametro
//             titulo = "|Situação Aluno[h2]|"
//             aluno = "Pierre[p]"
//             nota = {7}
//         />
//         <Fragmento />
//     </div>,
//     document.getElementById('root')
// )


// FORMA 5/6/7 - Passando parametros para os componentes
// Sabemos que os componentes são tags personalizadas, logo passamos parametros para eles da mesma maneira que no html.
// Como Acessar os esses parametros (titulo e subtitulo) usando a função?

// FORMA 7 - PARAMETRO INTEIRO
// NO CONSOLE MOSTRA QUE NOTA EH UM VALOR NUMERICO.
// ReactDOM.render(
//     <div>
//         <Primeiro></Primeiro>
//         <ComParametro
//             titulo="|Situação Aluno[h2]|"
//             aluno="Angelina[p] "
//             nota={5.3}
//         />
//         <ComParametro
//             titulo="|Situação Aluno[h2]|"
//             aluno="Maria[p] "
//             nota={9.9}
//         />
//     </div>,
//     document.getElementById('root')
// )

// FORMA 6 - PARAMETRO STRING
// ReactDOM.render(
//     <div>
//         <Primeiro></Primeiro>
//         <ComParametro titulo="Segundo Componente[h2]" aluno="Pedro[p] " nota="9.3"/>
//     </div>,
//     document.getElementById('root')
// )


// FORMA 5
// ReactDOM.render(
//     <div>
//         <Primeiro></Primeiro>
//         <ComParametro titulo="Segundo Componente - h2" subtitulo="Muito Legal! - p"></ComParametro>
//         {/* Outra for de fechar as tags */}
//         {/* <ComParametro
//             titulo="Segundo Componente"
//             subtitulo="Muito Legal!"/> */}
//     </div>,
//     document.getElementById('root')
// )


// FORMA 4 - USANDO FUNÇÕES EXPORTADAS
// ReactDOM.render(
//     <div>
//         <Primeiro></Primeiro>
//         <ComParametro></ComParametro>
//     </div>,
//     document.getElementById('root')
// )

// FORMA 3 - JAVASCRIPT NO FORMATO DE HTML
// const tag = <strong>Forma 3 - Usando Constante.</strong>
// ReactDOM.render(
//     <div>{tag}</div>,
//     document.getElementById('root')
// )

// FORMA 2 - JAVASCRIPT NO FORMATO DE HTML
// ReactDOM.render(
//     <div><strong>|=== Olá React ===|</strong></div>,
//     document.getElementById('root')
// )

// FORMA 1 - RECONHECE HTML?
// ReactDOM.render(
//     '<div>Olá React!!==</div>',
//     document.getElementById('root')
// )

// sintaxe geral

// FORMA 1 - PRINTANDO STRING
// const el = document.getElementById('root')
// ReactDOM.render('Olá React!!!',el)

// FORMA 2 - PRINTANDO STRING
//  ReactDOM.render(
//      'Olá React!!==',
//      document.getElementById('root')
//  )

// SINTAXE JSX




