import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledDetails = styled.p`
    color: ${props => props.theme.explanationColor};

`;


const Details = (props) => {
    const {post} = props;

    return (
        <div className='information'>
            {/* <StyledDetails className='description'>{post.explanation}</StyledDetails> */}
        </div>
    )
}

export default Details
