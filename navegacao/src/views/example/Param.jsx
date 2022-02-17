// IMPORTANDO REACT
import React from 'react'

// IMPORT REACT DOM
import { useParams } from 'react-router-dom'

const Param = props => {
    const { id } = useParams()
    return(
        <div className="Param">
            <h1>Navegação Com Parametros</h1>
            <p>Valor : {id}!</p>
        </div>
    )
}

export default Param