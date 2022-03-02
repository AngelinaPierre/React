import React from 'react'

const UseCallbackButtons = props => {
    console.log("Render...")
    return (
        <div>
            <button className="btn" onClick={
                () => props.compInc(6)
            }>+6</button>
            <button className="btn" onClick={
                () => props.compInc(12)
            }>+12</button>
            <button className="btn" onClick={
                () => props.compInc(18)
            }>+18</button>
            <button className="btn" onClick={
                () => props.compInc(0)
            }>Reset</button>
        </div>
    )
}

export default React.memo(UseCallbackButtons)