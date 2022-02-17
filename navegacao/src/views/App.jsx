//IMPORT REACT
import React from 'react'

// IMPORT REACT-DOM
import {
    BrowserRouter as Router,
} from 'react-router-dom'

// import estilo
import './App.css'

// IMPORT COMPONENTS
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'


const App = props => (
    <div className="App">
        <Router>
            <Menu />
            <Content />
        </Router>
    </div>
)

export default App