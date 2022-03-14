import Entrada from './Entrada'
import Cliente from '../core/Cliente'
import {useState} from 'react'
import Botao from './Botao'

interface FormularioProps {
    client: Cliente
}
export default function Formulario(props: FormularioProps) {
    const [nome, setNome] = useState(props.client?.nome ?? '')
    const [idade, setIdade] = useState(props.client?.idade ?? 0)
    const id = props.client?.id
    return (
        <div>
            {id?
                (<Entrada 
                    SomenteLeitura
                    text="Código" 
                    valor={id}
                    className="mb-4"
                />)
                :false
            }
            <Entrada 
                text="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-4"
            />
            <Entrada 
                text="Idade" 
                tipo='number' 
                valor={idade} 
                valorMudou={setIdade}
            />
            <div className='flex justify-end mt-7'>
                <Botao cor="blue" className="mr-2">
                    {id? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor='grey'>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}