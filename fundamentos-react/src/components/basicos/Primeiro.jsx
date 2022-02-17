// PRIMEIRO COMPONENTE.
// Padrão de nomemclatura -> todos os componentes serão criados com a primeira letra maiuscula.

import React from 'react'

export default function Primeiro() {
    const msg = '|== Seja Bem-vinda(o) ===|'
    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p>{msg}</p>
        </div>
    )
}

// FORMA 2
// export default function (){
//     return <h2>Primeiro Componente</h2>
// }

// FORMA 1
// export default function Primeiro(){
//     return 'Primeiro Componente'
// }