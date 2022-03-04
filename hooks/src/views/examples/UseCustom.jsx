import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

const UseCustom = props => {
    const [count, inc, dec] = useCounter(10)

    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url)

    function showStates(states){
        return states.map(state => <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Hook UseCustom"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => inc()}>Increment 1</button>
                    <button className="btn" onClick={() => dec()}>Decrement 1</button>
                </div>
            </div>
            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <ul>
                    {response.data ?
                        showStates(response.data) : false
                    }
                </ul>
            </div>

        </div>
    )
}
export default UseCustom

//exercicio 2 - useFetch
    // http://files.cod3r.com.br/curso-react/estados.json
    /**
     * Fetch('http://files.cod3r.com.br/curso-react/estados.json')
     *      .then(resp => resp.jason())
     *      .then(json => console.log(json))
     */