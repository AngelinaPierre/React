// import react
import React, {useState} from 'react'

// import pagetitle
import PageTitle from '../../components/layout/PageTitle'
// import Sectiotitle
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Inicial...")
    return (
        <div className='UseState'>
            <PageTitle
                title = "Hook UseState"
                subtitle = "Estado em components funcionais!"
            />
            <SectionTitle title="Exercício #01" />
                <div className="center">
                    <span className="text">{count}</span>
                </div>
            <SectionTitle title="Exercício #02" />
            <span className="text">{name}</span>
            <input 
                type="" 
                className="input" 
                value={name} 
                onChange={
                    e => setName(e.target.value)
                }
            />
        </div>
    )
}

export default UseState
