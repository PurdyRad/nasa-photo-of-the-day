import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import {URL} from './URL';
import Post from './Post'
import Title from './Title'
import Details from './Details'


function App() {
  const [post, setPost] = useState({})

  useEffect(() => {
    const fetchData = () => {
      axios
      .get(`${URL}`)
      .then(res =>{
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className='header'>
        <h3>{post.copyright}</h3>
        <h3>{post.date}</h3>
      </div>
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun  */
        }
        <span role="img" aria-label='go!'>🚀</span>
      </p>
      <Post post={post} />
      <Title post={post} />
      <Details post={post}/>
    </div>
  );
}

export default App;
