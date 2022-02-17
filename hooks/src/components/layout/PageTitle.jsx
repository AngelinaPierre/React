// import react
import React from 'react'

// import style
import './PageTitle.css'

const PageTitle = props => (
    <div className={`
        PageTitle ${props.error ? "error" : " "}
    `}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
)
export default PageTitle