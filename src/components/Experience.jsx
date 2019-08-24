import React from 'react'
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const Experience = props => {
    return(
        <div className="Experience">
            <div className="Experience-container">
                <H2Styled name="Experiences" />
                
                {props.data.map((exp, index) => (
                    <div className="Experience-item" key={`Exp-${index}`} >
                        <H3Styled>{exp.jobTitle} @ {exp.company} {exp.startDate} - {exp.endDate}</H3Styled>
                        <PStyled name={exp.jobDescription} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Experience