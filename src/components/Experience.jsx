import React from 'react'

const Experience = props => {
    return(
        <div className="Experience">
            <div className="Experience-container">
                
                {props.data.map((exp, index) => (
                    <div className="Experience-item" key={`Exp-${index}`} >
                        <h3>{exp.jobTitle} @ {exp.company} {exp.startDate} - {exp.endDate}</h3>
                        <span>{exp.jobDescription}</span>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Experience