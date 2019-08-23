import React from 'react'

const Education = props => { // props es propiedades o data
    return(
        <div className="Education">
            <div className="Education-container">
                
                {props.data.map((edu, index) => (
                    <div className="Education-item" key={`Edu-${index}`} >
                        <h3>{edu.degree} @ {edu.institution} {edu.startDate} - {edu.endDate}</h3>
                        <span>{edu.description}</span>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Education