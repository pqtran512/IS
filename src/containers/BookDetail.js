import React, {useEffect, useState} from 'react';
import axios from 'axios';
import icons from '../ultils/icons';
import './BookDetail.css'
import { Button } from 'react-bootstrap';
import { BookCard } from '../components';

const { FaStar, FaRegStar } = icons

const BookDetail = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = 'http://localhost:5000/api/recommend_books/Bedtime';
        axios.get(apiUrl)
        .then(response => {
            // Handle successful response
            setData(response.data);
            console.log(response.data)
        })
        .catch(error => {
            // Handle error
            setError(error);
        });
    }, []);

    return (
        <main style={{maxWidth:'1280px', margin: '80px auto'}}>
            <section className='book-container'>
                <img src="https://i.pinimg.com/564x/a3/25/a1/a325a16a9897d88d89ea3b0ab88393cd.jpg" alt="book" width="402" height="540"/>
                <div style={{width:'60%'}}> 
                    <div className='book-container book-header'>
                        <div className='book-title'>Over the Sirens</div> 
                        <div>
                            <FaStar size={26} color={'#FECB1C'}/>
                            <FaStar size={26} color={'#FECB1C'}/>
                            <FaStar size={26} color={'#FECB1C'}/>
                            <FaStar size={26} color={'#FECB1C'}/>
                            <FaRegStar size={26} color={'#FECB1C'}/>  
                        </div>
                    </div>
                    <div className='book-author'>By Timbur Hood</div> 
                    <p className='book-description'>Jump start your book reading by quickly check through the popular book categories. 1000+ books are published by different authors everyday. Buy your favourite books on TreeBooks Today.</p>
                    <div className='book-price'>$ 45.00</div> 
                    <Button variant="outline-danger" className='btn-1'>ADD TO CART</Button>
                    <Button variant="outline-dark" className='btn-1'>ADD TO WISHLIST</Button>
                </div>
            </section>
            <section style={{margin:'80px 0px'}}>
                <div style={{display: 'flex', justifyContent:'center', alignItems:'center', gap:'20px'}}>
                    <div className='line'></div>
                    <h2>Recommended Books</h2>
                    <div className='line'></div>
                </div>
                <div className='recbook'>
                    {data && <BookCard data={data} />}
                    {data && <BookCard data={data} />}
                    {data && <BookCard data={data} />}
                    {data && <BookCard data={data} />}
                    {/* {data && <p>Data from Flask API: {data.rcmd_1}</p>} */}
                </div>
            </section>
        </main>
    )
}

export default BookDetail
