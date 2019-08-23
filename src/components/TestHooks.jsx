import React, { useState } from 'react'

const TestHooks = () => {
    const [ active, setActive ] = useState(true) // Le paso a active el valor inicial de true

    const handleClick = () => {
        setActive(!active) // Cambia el estado de active
    }

    return(
        <div>
            <button onClick={ handleClick } >Ocultar</button>
            {active &&
                <h1>Hello World 2!</h1>
            }
        </div>
    )
}

export default TestHooks