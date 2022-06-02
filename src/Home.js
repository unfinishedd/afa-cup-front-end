import BlogList from "./BlogList";
import useFetch from "./useFetch";
import img1 from './local_images/logo.JPEG';
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from 'react';


const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { <div> <img src={img1} className='img-fluid' alt='logo' style={{ maxWidth: '23rem' }}></img> </div> }
      <hr />
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="Latest News" /> }
    </div>
  );
}
 
export default Home;