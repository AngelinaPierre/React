import Cliente from '../core/Cliente'
import { IconeEdit, IconeTrash } from './Icones'

interface TabelaProps {
    clientes: Cliente[]
    clientSelect?: (cliente: Cliente) => void
    clientDelete?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps){

    const showActions = props.clientDelete || props.clientSelect

    function rendCabecalho() {
        return(
            <tr>
                <th className='text-left p-4'>Código</th>
                <th className='text-left p-4'>Nome</th>
                <th className='text-left p-4'>Idade</th>
                {showActions?(<th className='p-4'>Ações</th>):false}
            </tr>
        )
    }
    function rendDados(){
        return props.clientes.map((cliente,i)=>{
            return (
                <tr key={cliente.id} className={`${
                    i % 2 === 0 ?
                    'bg-purple-200' :
                    'bg-purple-100' 
                }`}>
                    <td className='text-left p-4'>{cliente.id}</td>
                    <td className='text-left p-4'>{cliente.nome}</td>
                    <td className='text-left p-4'>{cliente.idade}</td>
                    {showActions ? rendAcoes(cliente) : false}
                </tr>
            )
        })
    }

    function rendAcoes(cliente:Cliente){
        return (
            <td className='flex justify-center'>
            {props.clientSelect ? 
                (
                    <button 
                        className={`
                            flex justify-center items-center
                            text-green-600 rounded-full p-2 m-1
                            hover:bg-purple-50`}
                        onClick={
                            () => props.clientSelect?.(cliente)
                        }    
                    >{IconeEdit}</button>
                ):false
            }
            {props.clientDelete ? 
                (
                    <button 
                        className={`
                            flex justify-center items-center
                            text-red-500 rounded-full p-2 m-1
                            hover:bg-purple-50
                        `}
                        onClick={
                            () => props.clientDelete?.(cliente)
                        }
                    >{IconeTrash}</button>
                ):false
            }
            </td>
        )
    }

    return (
        <table className={`
            w-full rounded-xl overflow-hidden
        `}>
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800

            `}>{rendCabecalho()}</thead>
            <tbody>{rendDados()}</tbody>
        </table>
    )
}