import React from 'react'

const Post = (props) => {
    const {post} = props;
    console.log(post)


    return (
        <div className='imgContainer'>
            <img src = {post.hdurl} alt ={post.title}></img>
            
        </div>
    )
}

export default Post
