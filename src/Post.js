import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledPost = styled.img`
    max-width: 65%;
    height: auto;
    border-radius: 20%;
`;
const StyledDetails = styled.p`
    color: ${props => props.theme.explanationColor};
    line-height: 1.5;
    text-shadow: 2px 2px darkslategrey;
    font-size: 115%;
    font-variant: small-caps;

`;


const StyleContainer = styled.div`
    display: flex;
    justify-content: center;

`;

const Post = (props) => {
    const {post} = props;
    console.log(post)


    return (
        <StyleContainer className='imgContainer'>
            <StyledPost src = {post.hdurl} alt ={post.title}></StyledPost>
            <StyledDetails className='description'>{post.explanation}</StyledDetails>
        </StyleContainer>
    )
}

export default Post
