import Navegador from '../components/Navegador'

export default function Inicio(){
    return (
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height:'100vh',
            flexWrap:'wrap',
        }}>
            <Navegador destino="/estiloso" texto="Estiloso"/>
            <Navegador destino="/exemplo" texto="Exemplo" cor="#9400d3"/>
            <Navegador destino="/jsx" texto="JSX" cor="crimson"/>
            <Navegador destino="/navegacao" texto="Navegação #01" cor="green"/>
            <Navegador destino="/cliente/sp-02/123" texto="Navegação Dinâmica #02" cor="blue"/>
            <Navegador destino="/estado" texto="Componente com Estado" cor="#a45b71"/>
            <Navegador destino="/integracao_1" texto="Integração com API #01" cor="#42a9a9"/>
        </div>
    )
}