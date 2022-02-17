// import react 
import React from 'react'

// import componente pagetitle
import PageTitle from '../../components/layout/PageTitle'

const Home = props => (
    <div className='Home'>
        <PageTitle 
            error
            title="404"
            subtitle="OPss... Página Não Encontrada!"
        />
    </div>
)
export default Home