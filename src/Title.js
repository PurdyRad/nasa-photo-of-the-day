import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledH1 = styled.h1`
    color: ${props => props.theme.titleColor};

`;
const StyledH5 = styled.h5`
    color: ${props => props.theme.dateColor};

`;
const StyledH3 = styled.h3`
    color: ${props => props.theme.copyrightColor};

`;


const Title = (props) => {
    const {post} = props
    return (
        <div className='header'>
            <StyledH1 className='title'>Today we're viewing {post.title}</StyledH1>
            <StyledH5>APOD for {post.date}</StyledH5>
            <StyledH5>This absolute beaut was provided to us by</StyledH5> <StyledH3>{post.copyright}</StyledH3>
            
        </div>
    )
}

export default Title
