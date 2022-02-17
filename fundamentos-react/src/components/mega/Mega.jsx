/* eslint-disable import/no-anonymous-default-export */
// IMPORT REACT
import React, { useState } from 'react'

// IMPORT STYLE
import './Mega.css'

// IMPORT COMPONENTS
import Ball from './Ball'

/**
 * AULA 40 - DESAFIO MEGASENA #2
 * 
 * O que fizemos na aula passada foi criar uma função em javascript, aora vamos criar um componente em react para usar esse metodo.
 * 
 *      function gerarNumeroNaoContido(min,max,array){
    const aleatorio = parseInt(Math.random() * ((max + 1)-min)) + min
    return array.includes(aleatorio) ? gerarNumeroNaoContido(min,max,array) : aleatorio
}

function gerarNumeros(qtde){
    const numeros = Array(qtde)
    .fill(0)
    .reduce((nums)=>{
        const novoNumero = gerarNumeroNaoContido(1,60,nums)
        console.log([...nums, novoNumero])
        return [...nums, novoNumero]
    },[])
    .sort((n1.n2)=> n1 - n2)
    return numeros
}
console.log(gerarNumeros)

console.log(gerarNumeroNaoContido(1,60,[0,0,0,0,0,0]))
 * 
 * FORMA 1
 * 1) /mega/mega.jsx
 * 2) Vamos usar a função [gerarNumero] para inicializar o ESTADO da aplicação.
 * 3) esperamos receber via [props] a quantidade de numeros inicial.
 * 4) logo na sequencia vamos definir os numeros dentrod e um <h3> para captar a partir de um estados q vamos criar.
 * 5) Vamos importar o {useState} e criar uma constante de array, que a partir da quanditdade inicial que iremos receber, ira criar um array com essa quantidade. vamos usar o fill(0) para mostrar no primeiro momento tudo zerado.
 *      const [numeros, setNumeros] = useState(Array(props.qtde).fill(0))

 * 6) Caso a quantidade não for passada, podemos assumir-la por valor padrão como 6
        const [numeros, setNumeros] = useState(Array(props.qtde || 6).fill(0))
 * 
 *  FORMA 2 - PODEMOS GERAR O ARRAY EM OUTRA LINHA PARA O CODIGO FICAR MENOR, E MELHOR DE VIZUALIZAR.
 * 
 * 1) Agora vamos no componente App.jsx criar um novo card para a MEGASENA. 
 * 2) Podemos na hora de exibir colocar um [.join(' ')] com espaço em branco para os numeros ficarem mais espaçados
 * 
 * FORMA 3 - CRIANDO UM BOTAO PARA GERAR OS NUMEROS
 * 
 * 1) no onclick vamos passar um evento(que nao nos importa logo _) e vamos passar o [setNumeros] junto com o [gerarNumeros].
 * 2) Vamos tbm criar uma ota constante [qtde] para nao termos que ficar repetindo a logica.
 * 
 * FORMA 4 - Criando uma <labeL> com <input> para alterarmos a quantidade dos numeros gerados.
 * 
 * 1) Vamos no [value] do <input> fazer ele apontar para um outro estdo que iremos criar para poder fazer essas alterações
 *      const [qtde, setQtde] - useState(props.qtde || 6)
 * 2) Nao vamos mais precisar da linha de codigo, pois criamos um estado para podermos fazer a alteração desse valor
 *      const qtde = props.qtde || 6 
 * 3) no [onChange] iremos receber um evento que será chamado para mudar esse valor.
 * 
 * Agora estamos mudando os numeros de acordo com a quantidade pedida
 * 
 * [app.jsx]
 * 
 * 1) podemos receber essa quantidade via parametros , basta colocarmos o atributo de qtde na <Mega>
 * 
 * FORMA 5 - Se quisermos que os numeros iniciais ja seja o valorgerado e nao 0
 * 
 * 1) Re-utilizamos a função gerar numeros passando para ela a quantidade. Ja iniciando o numero da mega com numeros definos e não 0.
 * 
 * [MEGA.CSS]
 * 
 * Vamos agora estilizar um pouco nossa aplicação da megasena.
 * 
 * FORMA 6 -> GERANDO NMERO NO MOMENTO QUE ESTAMOS ALTERANDO A QUANTIDADE
 * 1) no onChange, colocamos um corpo de função e adicionamos alem do setQtde as funçãoes aninhadas -> setNumeros(gerarNumeros(+e.target.value))
 * 2) podemos tbm colocar um atributo no <input> para que tenha um numero minimo e maximo.
 * 2.1) Se digitarmos o numero será captado podendo burlar esse atributo--- ver como fazer o fix.
 * 
 * FORMA 7 - Envolvendo os numeros em bolinhas coloridas.
 * 
 * 1) Ball.jsx + Ball.css + import
 * 
 */
// FORMA 6
export default props => {
    function gerarNumeroNaoContido(min,max,array){
        const aleatorio = parseInt(Math.random() * ((max + 1) - min)) + min
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min,max,array) : aleatorio
    }
    function gerarNumero(qtde){
        const numeros = Array(qtde)
        .fill(0)
        .reduce((nums)=>{
            const novoNumero = gerarNumeroNaoContido(1,60,nums)
            console.log(...nums,novoNumero)
            return [...nums, novoNumero]
        },[])
        .sort((n1,n2)=>n1-n2)
        return numeros
    }
    console.log(gerarNumero)
    // const estados de mudança
    const [qtde, setQtde] = useState(props.qtde || 6)
    // const numerosIniciais = Array(qtde).fill(0)
    const numerosIniciais = gerarNumero(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return(
        <div className='Mega'>
            <h2>Mega</h2>
            <div className="ball-style"> 
                {/* <div> { numeros.map() } </div> */}
                {
                    numeros.map((n) => {
                        return (
                            <Ball number={n} />
                        )
                    })
                }
            </div>
            <div>
                <label htmlFor="">Qtde Números</label>
                <input 
                    min="6"
                    max="17"
                    type="number"
                    value={qtde}
                    onChange={(e) => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumero(+e.target.value))
                    }}
                />
            </div>
            <button onClick={_ => setNumeros(gerarNumero(qtde))}>Gerar Números</button>
        </div>
    )
}

// FORMA 5
// export default props => {
//     // gerar numero não contido (os numeros gerados nao podem ser repetidos)
//     function gerarNumeroNaoContido(min,max,array){
//         const aleatorio = parseInt(Math.random() * ((max + 1) - min)) + min
//         // se no array incluir ja o numero aleatorio, será gerado um novo numero caso nao, o numero sera retornado (aleatorio)
//         return array.includes(aleatorio) ? gerarNumeroNaoContido(min,max,array) : aleatorio
//     }
//     // gerando numeros e colocando no array
//     function gerarNumero(qtde){
//         const numeros = Array(qtde)
//         .fill(0)
//         .reduce((nums)=>{
//             const novoNumero = gerarNumeroNaoContido(1,60,nums)
//             console.log(...nums,novoNumero)
//             return [...nums,novoNumero]
//         },[])
//         .sort((n1,n2)=>n1-n2)
//         return numeros
//     }
//     console.log(gerarNumero)

//     // criando constante estados para fazer alterações.
//     const [qtde, setQtde] = useState(props.qtde || 6)
//     // const numerosIniciais = Array(qtde).fill(0)
//     const numerosIniciais = gerarNumero(qtde)
//     const [numeros, setNumeros] = useState(numerosIniciais)

//     return(
//         <div className='Mega'>
//             <h2>Mega</h2>
//             <h3>{numeros.join(' ')}</h3>
//             <div>
//                 <label htmlFor="">Qtde de Números</label>
//                 <input 
//                     type="number"
//                     value={qtde}
//                     onChange={e => setQtde(+e.target.value)}
//                 />
//             </div>
//             <button onClick={_ => setNumeros(gerarNumero(qtde))}>Gerar Números</button>
//         </div>
//     )
// }
// FORMA 4
// export default props => {
//     function gerarNumeroNaoContido(min,max,array){
//         const aleatorio = parseInt(Math.random() * ((max +1)-min)) + min
//         return array.includes(aleatorio) ? gerarNumeroNaoContido(min,max,array) : aleatorio
//     }
//     function gerarNumero(qtde){
//         const numeros = Array(qtde)
//         .fill(0)
//         .reduce((nums) => {
//             const novoNumero = gerarNumeroNaoContido(1,60,nums)
//             console.log(...nums,novoNumero)
//             return [...nums,novoNumero]
//         },[])
//         .sort((n1,n2)=>n1-n2)
//         return numeros
//     }
//     console.log(gerarNumero)

//     const [qtde, setQtde] = useState(props.qtde || 6 )
//     const numerosIniciais = Array(qtde).fill(0)
//     const [numeros, setNumeros] = useState(numerosIniciais)

//     return (
//         <div>
//             <h2>Mega</h2>
//             <h3>{numeros.join(' ')}</h3>
//             <div>
//                 <label htmlFor="">Quantidade de Números</label>
//                 <input 
//                     type="number"
//                     value={qtde}
//                     onChange={
//                         e => setQtde(+e.target.value)
//                     }
//                 />
//             </div>
//             <button onClick={_ => setNumeros(gerarNumero(qtde))}>Gerar Números</button>
//         </div>
//     )
// }
// FORMA 3
// export default props => {
//     function gerarNumeroNaoContido(min,max,array){
//         const aleatorio = parseInt(Math.random() * ((max + 1)-min)) + min
//         return array.includes(aleatorio) ? gerarNumeroNaoContido(min,max,array) : aleatorio
//     }
//     function gerarNumero(qtde){
//         const numeros = Array(qtde)
//         .fill(0)
//         .reduce((nums)=>{
//             const novoNumero = gerarNumeroNaoContido(1,60,nums)
//             console.log(...nums,novoNumero)
//             return [...nums, novoNumero]
//         },[])
//         .sort((n1,n2) => n1 - n2)
//         return numeros
//     }
//     console.log(gerarNumero)

//     const qtde = props.qtde || 6
//     const numerosIniciais = Array(qtde).fill(0)
//     const [numeros, setNumeros] = useState(numerosIniciais)

//     // const numerosIniciais = Array(props.qtde || 6).fill(0)
//     // const [numeros, setNumeros] = useState(numerosIniciais)

//     return (
//         <div>
//             <h2>Mega</h2>
//             <h3>{numeros.join(' ')}</h3>
//             <button onClick={_ => setNumeros(gerarNumero(qtde))}>Gerar Números</button>
//         </div>
//     )
// }
// FORMA 2
// export default props => {
    
//     function gerarNumeroNaoContido(min,max,array){
//         const aleatorio = parseInt(Math.random() * ((max + 1)- min)) + min
//         return array.includes(aleatorio) ? gerarNumeroNaoContido(min,max,array) : aleatorio
//     }
//     function gerarNumeros(qtde){
//         const numeros = Array(qtde)
//         .fill(0)
//         .reduce((nums) =>{
//             const novoNumero = gerarNumeroNaoContido(1,60,nums)
//             console.log(...nums,novoNumero)
//             return [...nums, novoNumero]
//         },[])
//         .sort((n1,n2)=>n1-n2)
//         return numeros
//     }
//     console.log(gerarNumeros)

//     // criando array
//     const numerosIniciais = Array(props.qtde || 6).fill(0)
//     // criando um estado e passando o array de numerosIniciais ao useState
//     const [numeros, setNumeros] = useState(numerosIniciais)

//     // criando estado com array dentro
//     // const [numeros, setNumeros] = useState(
//     //     Array(props.qtde || 6)
//     //     .fill(0)
//     // )
//     return (
//         <div>
//             <h2>Mega</h2>
//             <h3>{numeros.join(' ')}</h3>
//         </div>
//     )
// }
// FORMA 1
// export default props => {

//     function gerarNumeroNaoContido (min,max,array){
//         const aleatorio = parseInt(Math.random() * ((max + 1)- min)) + min
//         return array.includes(aleatorio) ? gerarNumeroNaoContido(min,max,array) : aleatorio
//     }

//     function gerarNumeros(qtde){
//         const numeros = Array(qtde)
//         .fill(0)
//         .reduce((nums)=>{
//             const novoNumero = gerarNumeroNaoContido(1,60,nums)
//             console.log(...nums, novoNumero)
//             return [...nums, novoNumero]
//         },[])
//         .sort((n1,n2)=> n1 - n2)
//         return numeros
//     }
//     // console.log(gerarNumerosNaoContido(1,60,[0,0,0,0,0,0]))
//     console.log(gerarNumeros)
    
//     // criando estado com array dentro
//     const [numeros, setNumeros] = useState(
//         Array(props.qtde || 6)
//         .fill(0)
//     )
//     return (
//         <div>
//             <h2>Mega</h2>
//             <h3>{}</h3>
//         </div>
//     )
// }