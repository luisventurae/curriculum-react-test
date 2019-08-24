import React from 'react'
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const Education = props => { // props es propiedades o data
    return (
        <div className="Education">
            <div className="Education-container">
                <H2Styled name="Education" />

                {props.data.map((edu, index) => (
                    <div className="Education-item" key={`Edu-${index}`} >
                        <H3Styled>{edu.degree} @ {edu.institution} {edu.startDate} - {edu.endDate}</H3Styled>
                        <PStyled name={edu.description} />
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Education