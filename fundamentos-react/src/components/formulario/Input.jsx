/* eslint-disable import/no-anonymous-default-export */
// IMPORT REACT
import React, { useState } from 'react'

// IMPORT ESTILO
import './Input.css'

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
 * 
 * 
 * 
 */
export default props => {
    const [valor, setValor] = useState('Type...')
    function change(e) {
        setValor(e.target.value)
        // console.log(e.target.value)
    }
    return (
        <div className='Input'>
            <h2> {valor} </h2>
            <div style={{
                display:'flex',
                flexDirection:'column'
            }}>
                <input value={valor} onChange={change} />
                <input value={valor} readOnly />
                {/* Componente não controlado */}
                <input value={undefined} />
                {/* <input value={null} /> */}

            </div>
        </div>
    )
}
// FORMA 6
// export default props => {
//     const [valor, setValor] = useState('Type...')
//     function change(e) {
//         // state change
//         setValor(e.target.value)
//         // state change only in the console
//         // console.log(e.target.value)
//     }
//     return (
//         <div className='Input'>
//             <h2> {valor} </h2>
//             <div style={{
//                 display: 'flex',
//                 flexDirection:'column'
//             }}>
//                 <input value={valor} onChange={change} />
//                 <input value={valor} readOnly/>
//             </div>
//         </div>
//     )
// }
// FORMA 5
// export default props => {
//     const [valor, setValor] = useState("Type..")
//     function quandoMudar(evento) {
//         // mudando o estado do componente
//         setValor(evento.target.value)
//         // observando mudanças no console
//         // console.log(evento.target.valor)
//     }
//     return (
//         <div className="Input">
//             <h2>{ valor }</h2>
//             <input value={ valor } onChange={ quandoMudar } />
//         </div>
//     )
// }
// FORMA 4
// export default props => {
//     // criando estado
//     const [valor,setValor] = useState('Type...')
//     // criando função para mostrar o valor no console sem alterar o estado
//     function quandoMudar(evento) {
//         setValor(evento.target.value)
//         // mostrando entrada do teclado sem alterar o estado inicial.
//         console.log(evento.target.value)
//     }
//     return(
//         <div className='Input'>
//             <input value={valor} onChange={quandoMudar} />
//         </div>
//     )

// }

// FORMA 3
// export default props => {
//     // criando estado
//     const [valor, setValor] = useState('Type...')
//     // criando função para mostrar o valor no console sem alterar o estado
//     function quandoMudar(evento) {
//         console.log(evento.target.value)
//     }
//     return (
//         <div className='Input'>
//             <input value={valor} onChange={quandoMudar} />
//         </div>
//     )
// }
//FORMA 2
// export default props => {
//     const [valor, setValor] = useState('Type...')
//     function quandoMudar(evento) {
//         console.log(evento)
//     }
//     return (
//         <div className='Input'>
//             <input value={valor} onChange={quandoMudar} />
//         </div>
//     )
// }
// FORMA 1
// export default props => {
//     const [valor, setValor] = useState('Type')
//     return (
//         <div className="Input">
//             <input value={valor} />
//         </div>
//     )
// }