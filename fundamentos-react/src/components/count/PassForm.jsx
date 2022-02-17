/* eslint-disable import/no-anonymous-default-export */
// IMPORT REACT
import React from 'react'

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

export default props => {
    return (
        <div>
            <label htmlFor="passoInicial">Passo: </label>
            <input 
                type="number"
                id="passoInicial"
                value={props.passo}
                onChange={e => props.setPasso(+e.target.value)}
            />
        </div>
    )
}