// import react
import React from 'react'

// import router from dom -> lembrar que o switch foi desusado.
import {
    Switch,
    Route
} from 'react-router-dom'

// import style
import './Content.css'

// import componentes
import Home from '../../views/examples/Home'
import NotFound from '../../views/examples/NotFound'
import UseState from '../../views/examples/UseState'
import UseEffect from '../../views/examples/useEffect'
import UseRef from '../../views/examples/UseRef'
import UseCallback from '../../views/examples/UseCallback'
import UseMemo from '../../views/examples/UseMemo'
import UseContext from '../../views/examples/UseContext'
import UseReducer from '../../views/examples/UseReducer'
import UseCustom from '../../views/examples/UseCustom'



const Content = props => (
    <main className='Content'>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>


            <Route path="/useState">
                <UseState />
            </Route>
            <Route path="/useEffect">
                <UseEffect />
            </Route>
            <Route path="/UseRef">
                <UseRef />
            </Route>
            <Route path="/useCallback">
                <UseCallback />
            </Route>
            <Route path="/useMemo">
                <UseMemo />
            </Route>
            <Route path="/useContext">
                <UseContext />
            </Route>
            <Route path="/useReducer">
                <UseReducer />
            </Route>
            <Route path="/useCustom">
                <UseCustom />
            </Route>

            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </main>
)


export default Content

