/* eslint-disable import/no-anonymous-default-export */
// IMPORTANDO REACT
import React from 'react'

// IMPORTANDO STYLE
import './Ball.css'

// mine
export default props => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    console.log(randomColor)
    return (
        <div
            className='Ball'
            style={{
                backgroundColor: randomColor
            }}
        >
            <h3>{props.number}</h3>
        </div>
    )

    // const numLi = props.number.map(num => {
    //     return (
    //         <div 
    //             className='Ball'
    //             style = {{
    //                 backgroundColor: randomColor
    //             }}
    //         >
    //             {num}
    //         </div>
    //     )
    // })
    // return (
    //     <div>
    //         <h2>{numLi}</h2>
    //     </div>
    // )
}

// orig
// export default props => {
//     // criando cor aleatoria.
//     const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
//     return (
//         <div
//             className='Ball'
//             style = {{
//                 backgroundColor: randomColor
//             }}
//         >
//             {props.number}
//         </div>
//     )
// }