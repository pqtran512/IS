import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Banner.css'
 
const Banner = () => {
    const navigate = useNavigate()
    return (
    <div style={{position:'relative'}}>
      <Carousel fade>
        <Carousel.Item>
          <img src={'https://images.pexels.com/photos/2946974/pexels-photo-2946974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} style={{height:'82vh'}} className="d-block w-100" alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={'https://images.pexels.com/photos/2249063/pexels-photo-2249063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} style={{height:'82vh'}} className="d-block w-100" alt="Second slide"/>
        </Carousel.Item>
      </Carousel>
      <div className='text-box'>
        <h1>BookStore</h1>
        <p>Welcome to BookStore ! Discover your next great read in our vast collection of books, ranging from bestsellers to classics. Explore, enjoy, and find your favorite books with ease.</p>
        <p>Start your reading journey with us today!</p>
        <Button variant="outline-light" className='btn-read-more' onClick={() => navigate('/search')}>READ MORE</Button>
      </div>
    </div>
    )
}

export default Banner
