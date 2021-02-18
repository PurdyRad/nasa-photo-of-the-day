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
      {/* <div className='image-container'>
        <img src='https://cdn.britannica.com/38/111338-050-D23BE7C8/Stars-NGC-290-Hubble-Space-Telescope.jpg' alt= 'stary night sky'></img>
      </div> */}
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun  */
        }
        <span role="img" aria-label='go!'>🚀</span>
      </p>
      <Title post={post} />
      <Post post={post} />
      <Details post={post}/>
    </div>
  );
}

export default App;
