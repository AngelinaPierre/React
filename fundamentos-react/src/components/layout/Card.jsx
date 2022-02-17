/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Card.css'

/**
 * AULA 25 - COMPONENTE COM FILHO #01
 * 
 * Vamos criar 2 componente dentro de /basico {mebro e familia} 
 * 
 * 
 */
export default props => {
    return (
        <div 
            className="Card"
            style={{
                backgroundColor: props.color || '#008',
                borderColor: props.color || '#008'
            }}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}



/**
 * 
 *  AULA 24 - COMPONENTE CARD #3 -> passando cores como parametro;
 * 
 * Vamos passar a cor como parametro la no app.jsx, para usar temos que colocar a propriedade [style] que ira receber um objeto chave e valor;
 * 
 * O [-] não pode ser usando em nome de objeto
 * 
 * 
 * FORMA 2 -> PODEMOS TBM PASSAR O OBJETO JA DENTRO DO STYLE COM UMA PEQUENA RESALVA...
 *  -> teremos que colocar 2 par de chaves
 * 
 * passar um objeto eh melhor do que fazer um objeto literal dentro do jsx
 * 
 */

// FORMA 2 -> usando dentro do style colocar duas chaves {{}}
// export default props => {
//     return(
//         <div 
//             className="Card" 
//             style={{
//                 backgroundColor: props.color || '#008',
//                 borderColor: props.color || '#008'
//         }}>
//             <div className="Title">{props.titulo}</div>
//             <div className="Content">
//                 {props.children}
//             </div>
//         </div>
//     )
// }

// FORMA 1
//  export default props => {

//     // Defininndo objeto com chave e valor par ao style
//     // || '#F00 -> quer dizer que será a cor pdrão caso nao haja especificação.
//     const cardStyle = {
//         backgroundColor: props.color || '#F00',
//         borderColor: props.color || '#F00'
//     }

//     return (
//         <div className="Card" style={cardStyle}>
//             {/* <div className="Title">{title}</div> */}
//             <div className="Title">{props.titulo}</div>
//             <div className="Content">
//                 {props.children}
//             </div>
//         </div>
//     )
// }

/**
 * AULA 23 - COMPONENTE CARD #2 -> FLASK BOX (css)
 * 
 * FORMA 1
 * 
 * Em app.jsx vamos envolver todos os nosso componentes <Card> dentro de uma <div className="Cards">
 * 
 * Vamos tbm criar um arquivo css para o app.jsx
 * 
 * Ao usar o display:flex podemos ver que foi separados em cards a nossa pagina com alguns problemas de renderização.
 * 
 * Esses problemas são mais por questão do css do que pelo react em si..
 * 
 *  CONHECER O FLEX BOX -> PARA DESENVOLVIMENTO WEB (CSS)

 */

//FORMA 1
// export default props => {
//     // const title = props.titulo
//     return (
//         <div className="Card">
//             {/* <div className="Title">{title}</div> */}
//             <div className="Title">{props.titulo}</div>
//             <div className="Content">
//                 {props.children}
//             </div>
//         </div>
//     )
// }


/**
 * AULA 22 - COMPONENTE CARD #1
 * 
 * /////////////////////////// FORMA 1 ///////////////////////////
 *  vamos querer criar uma classe css para esse componente, logo vamos criar um arquivo chamado Card.css na mesma pasta.
 * e importar o css para esse file.
 * 
 * class -> não eh um atributo usado no react e sim do html
 * classname -> usando no react. -> funciona usando [class] mas eh melhor usar a convenção;
 * 
 * Mudando a fonte do card, vamos nos google fonts e pegamos o link que será referenciado dentro do HTML.
 * 
 * <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
 * 
 * Depois de colocar a referencia da fonte no .html no index.css vamos colocar a font-family oswald
 * 
 * /////////////////////////// FORMA 2 ///////////////////////////
 * 
 * FORMA 2 - A pergunta é como podemos passar para o nosso conteudo, em vez de colocar um fixo, passar outros elementos.
 * 
 * No app.js queremos criar um card chamado desafio aleatorio e queremos passar o componente [aleatorio] para dentro do card.
 * 
 * Perceba que em App.jsx quando passamos os <aleatorio> para dentro do <card> somente o conteudo do card esta sendo mostrado, e não o resultado da função <aleatorio< que criamos
 * 
 * #### ACESSANDO FUNÇÃO DENTRO DE FUNÇÃO [props.children]
 * 
 * - Para acessar os elementos do componentes (componente dentro de componente), usamos o [props.children]
 * 
 * ARQUIVO App.jsx
 *      <Card titulo="Desafion Aleatorios">
 *          <Aleatorio min={1} max={60} />
 *      </Card>
 * 
 * ARQUIVO CARD.jsx
 * 
 *      <div className="Content">
 *          {props.childres}
 *      </div>
 * 
 */

// FORMA 2
// export default props => {
//     // const title = props.titulo
//     return (
//         <div className="Card">
//             {/* <div className="Title">{title}</div> */}
//             <div className="Title">{props.titulo}</div>
//             <div className="Content">
//                 {props.children}
//             </div>
//         </div>
//     )
// }

// FORMA 1
// export default props => {
//     return (
//         <div className="Card">
//             <div className="Title">{props.titulo}</div>
//             <div className="Content">Conteudo</div>
//         </div>
//     )
// }