import React from 'react'

const Info = ({ children }) => { // children son los componentes hijos, osea: education, experience, certificates y skills, segun App.jsx
    return(
        <div className="Info">
            <div className="Info-container">
                { children } 
            </div>
        </div>
    )
}

export default Info