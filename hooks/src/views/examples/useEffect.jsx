// import react
import React, {useEffect, useState} from 'react'

import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial (num) {
    const n = parseInt(num)
    if(n < 0 ) return -1
    if(n === 0) return 1
    return (
        calcFatorial(n - 1) * n
    )
}

function calcPar(num) {
    const n = parseInt(num)
    if(num < 0) return -1
    if(n % 2 === 0){
        return 1
    }else if(n % 2 !== 0){
        return 0
    }else{
        return -1
    }
}

const UseEffect = props => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [status, setStatus] = useState("Impar")

    useEffect(function() {
        setFatorial(calcFatorial(number))
    },[number])

    useEffect(
        function () {
            if(fatorial > 1000000){
                document.title = "EIITAAAAA!!!!"
            }
        },[fatorial])
    
        useEffect(
            function(){
                setStatus(calcPar(number))
            },[number]
        )
    return (
        <div className='UseEffect'> 
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais"
            />
            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? "ERROR" : fatorial}</span>
                </div>
                <div></div>
                <input 
                    type="number" 
                    className="input" 
                    value={number}
                    onChange={
                        e => setNumber(e.target.value)
                    }
                />
            </div>
            <SectionTitle title="Exercicio #02 - DESAFIO"/>
            <div className="center">
                    <div>
                        <span className="text">Status: </span>
                        {/* <span className="text red">{status === 1 ? "Par" : "Impar"}</span> */}
                        <span className="text red">{
                            status === 1 ? "Par": (status === -1 ? "ERROR": "Impar")
                        }</span>
                    </div>
            </div>
        </div>
    )
}
export default UseEffect