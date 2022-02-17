// eslint-disable-next-line
// IMPORT REACT
import React from 'react'

// IMPORT REACT DOM
import {Routes, Route} from 'react-router-dom'

// import estilo
import './Content.css'

// importe componentes
import Home from '../../views/example/Home'
import About from '../../views/example/About'
import Param from '../../views/example/Param'
import NotFound from '../../views/example/NotFound'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/about" element={
                <About />
            }/>
            <Route path="/param/:id" element={
                <Param />
            }/>
            <Route exact path="/" element={
                <Home />
            } />
            <Route path="*" element={
                <NotFound />
            }>
            </Route>
        </Routes>
    </main>
)

export default Content 