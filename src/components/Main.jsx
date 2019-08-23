import React from 'react'

const Main = ({ children }) => { // children son los componentes hijos, osea: siderbar e info, segun App.jsx
    return(
        <div className="Main">
            <div className="Main-container">
                { children }
            </div>
        </div>
    )
}

export default Main