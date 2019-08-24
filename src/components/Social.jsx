import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const SocialStyle = styled.div`
    margin: 0 auto;
    display: block;
`

const SocialUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0px;
`

const SocialLi = styled.li`
    display: inline;
    margin: 0 1em 0 0;
`

const SocialA = styled.a`
    color: #212121;
    text-decoration: none;
    font-size 1.2em;
`

const SocialIcon = styled.i`
    color: ${props => props.theme.color}
`

const facebook = {
    color: "#3B5998"
}

const twitter = {
    color: "#38A1F3"
}

const github = {
    color: "#333"
}

const linkedin = {
    color: "#0E76A8"
}

const getColor = (name) => {
    if (name == 'facebook') return facebook
    if (name == 'twitter') return twitter
    if (name == 'github') return github
    if (name == 'linkedin') return linkedin
}

const Social = props => {
    return (
        <SocialStyle>
            {props.social &&
                <SocialUl>
                    {props.social.map((social, index) => (
                        <SocialLi key={`Social-${index}`} >
                            <SocialA href={social.url} target="_blank" >
                                <ThemeProvider theme={getColor(social.name)} >
                                    <SocialIcon className={`fa fa-${social.name}`} />
                                </ThemeProvider>
                            </SocialA>
                        </SocialLi>
                    ))}
                </SocialUl>
            }
        </SocialStyle>
    )
}

export default Social