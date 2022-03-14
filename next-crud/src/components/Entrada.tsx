interface EntradaProps {
    text: string
    tipo?: 'text' | 'number'
    valor: any
    SomenteLeitura?: boolean
    valorMudou?: (valor:any) => void
    className?: string
}
export default function Entrada(props: EntradaProps) {
    return (
        <div className={`
            flex flex-col ${props.className}
        `}>
            <label className="mb-2">{props.text}</label>
            <input 
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100
                    px-4 py-2 
                    ${props.SomenteLeitura ? '' : 'focus:bg-white'}
                `}
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.SomenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
            ></input>
        </div>
    )
}