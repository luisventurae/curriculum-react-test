import React from 'react'

const Social = props => {
    return(
        <div className="Social">
            {props.social &&
                <ul>
                    {props.social.map((social, index) => (
                        <li key={`Social-${index}`} target="_blank" >
                            <a href={social.url} >
                                {social.name}
                            </a>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default Social