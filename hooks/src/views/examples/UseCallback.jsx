import React, {useState, useCallback} from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import UseCallbackButtons from '../examples/UseCallbackButtons'

const UseCallback = props => {
    const [count,setCount] = useState(0)

    // function increment(delta){ // criação extra do botão reset.
    //     if(delta === 0) return setCount(0)
    //     setCount(count + delta)

    //     // outra forma
    //     if(delta === 0) {
    //         setCount(0)
    //     }else{
    //         setCount(count + delta)
    //     }
    // }

    const increment = useCallback(function(delta){
        if(delta === 0) return setCount(0)
        setCount(curr => curr + delta)
    },[setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hooke UseCallback"
                subtitle="Retorna uma função memorizada!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons 
                    compInc={increment}
                />
            </div>
        </div>
    )
}
export default UseCallback