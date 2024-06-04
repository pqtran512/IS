import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { BookCard } from '../components'
import { Link, useNavigate } from 'react-router-dom';
import './Homepage.css'

function Homepage() {
    const navigate = useNavigate()

    return (
        <main style={{maxWidth:'1280px', marginInline: 'auto'}}>
            <section className="grid-container">
                <Link to={'/search'} className='category card1'>Higher education</Link>
                <div className='card2'>
                    <p>Explore our Top Categories</p>
                    <Button variant="danger" className='btn-view' onClick={() => navigate('/search')}>View All</Button>
                </div>
                <Link to={'/search'} className='category card3'>Management Books</Link>  
                <Link to={'/search'} className='category card4'>Finance Books</Link>
                <Link to={'/search'} className='category card5'>Engineer Books</Link>
                <Link to={'/search'} className='category card6'>Commerce books</Link>
            </section>
            <section style={{margin:'80px 0px'}}>
                <div style={{display: 'flex', justifyContent:'center', alignItems:'center', gap:'20px'}}>
                    <div className='line'></div>
                    <h2>Recommended Books</h2>
                    <div className='line'></div>
                </div>
                <div className='recbook'>
                    {data && <BookCard data={data.rcmd_1} />}
                    {data && <BookCard data={data.rcmd_2} />}
                    {data && <BookCard data={data.rcmd_3} />}
                    {data && <BookCard data={data.rcmd_4} />}
                    {/* {data && <p>Data from Flask API: {data.rcmd_1}</p>} */}
                </div>
            </section>
        </main>
    )
}

export default Homepage
