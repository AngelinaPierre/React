import Layout from '../components/Layout'
import {useState} from 'react'

export default function Estado(){

    const [numero, setNumero] = useState(0) // hook

    function incrementar(){
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Exemplo de Componente com Estado">
            <div>Numero : {numero}</div>            
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )

} 