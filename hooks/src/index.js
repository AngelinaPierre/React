//IMPORT REACTS
import React from 'react'
import ReactDom from 'react-dom'

// import style
import './index.css'

// import componente para contexto
// import DataContext, {data} from './data/DataContext'
// import componente para renderização APP.jsx
import App from './views/App'

// renderização com DOM
ReactDom.render(
    // <DataContext.Provider value={data}>
    //     <App />
    // </DataContext.Provider>,
    <App />,
    document.getElementById('root')
)

