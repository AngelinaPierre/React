//IMPORT REACTS
import React from 'react'
import ReactDom from 'react-dom'

// import style
import './index.css'

// import componente para renderização APP.jsx
import App from './views/App'

// renderização com DOM
ReactDom.render(
    <App />,
    document.getElementById('root')
)

