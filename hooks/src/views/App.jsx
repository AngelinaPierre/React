// import react
import React from 'react'

// Importando o BrowserRouter from DOM e dando um alias
import {
    BrowserRouter as Router,
} from 'react-router-dom'

// import style
import './App.css'

// import componentes
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

const App = props => {
    return (
        <div className="App">
            <Router>
                <Menu />
                <Content />
            </Router>
        </div>
    )
}

export default App