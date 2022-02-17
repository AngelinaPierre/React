// import react
import React from 'react'
// import react dom
import {
    Link
} from 'react-router-dom'

// import estilo
import './Menu.css'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/param/123">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/legal">Param #02</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                    {/* <a href="/about">About</a> */}
                </li>
                <li>
                    <Link to="/noExiste">Não Existe</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu 