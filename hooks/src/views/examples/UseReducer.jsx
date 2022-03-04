import React, {useReducer} from 'react';
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from '../../components/layout/SectionTitle'

import {initialState, reducer} from '../../store'
import { num_add2, login } from '../../store/actions'

const UseReducer = props => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">

            <PageTitle
                title="Hook UseReducer"
                subtitle="Outra forma de ter estado em componentes funcionais!"
            />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                {state.user ? 
                    <span className="text">{state.user.name}</span> :
                    <span className="text">Usuário não encontrado.</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => login(dispatch,'Angelina')}>Login</button>
                    <button className="btn" onClick={() => dispatch({type: 'numInt'})}>Int</button>
                    <button className="btn" onClick={() => num_add2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'num_mult7'})}>&lowast;7</button>
                    <button className="btn" onClick={() => dispatch({type: 'num_div25',})}>&divide;25</button>
                    <button className="btn" onClick={() => dispatch({type:'num_addN',payload: -9,})}>+9</button>
                    <button className="btn" onClick={() => dispatch({type:'num_addN',payload: +11,})}>-11</button>
                </div>
            </div>
        </div>
    )
}
export default UseReducer