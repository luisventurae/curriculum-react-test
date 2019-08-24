import React from 'react'
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const Skills = props => {
    return(
        <div className="Skills">
            <div className="Skills-container">
                <H2Styled name="Skills" />

                {props.data.map((skill, index) => (
                    <div className="Skills-item" key={`Skill-${index}`}>
                        <h5>{skill.name}</h5>
                        <div className="Skils-line">
                            <span>{skill.percentage}</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Skills