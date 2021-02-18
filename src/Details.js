import React from 'react'

const Details = (props) => {
    const {post} = props;

    return (
        <div className='information'>
            <p className='title'>{post.title}</p>
            <p className='description'>{post.explanation}</p>
        </div>
    )
}

export default Details
