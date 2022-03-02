// import react
import React, {useState} from 'react'

// Importando o BrowserRouter from DOM e dando um alias
import {
    BrowserRouter as Router,
} from 'react-router-dom'

// import style
import './App.css'

// import componentes
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import DataContext, {data} from '../data/DataContext'
import Store from '../data/Store'

const App = props => {
    const [state, setState] = useState(data)
    return (
        <Store>
            <DataContext.Provider value={{state, setState}}>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider>
        </Store>
    )
}

export default App