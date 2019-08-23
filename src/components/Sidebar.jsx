import React from 'react'

const Sidebar = ({ children }) => { // children son los componentes hijos, osea: about, segun App.jsx
    return(
        <div className="Sidebar">
            <div className="Sidebar-container">
                { children } 
            </div>
        </div>
    )
}

export default Sidebar
