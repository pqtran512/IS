import React from 'react';
import { Button } from 'react-bootstrap';
import { BookCard, Select } from '../components'
import './Search.css'

const categories = ["Horror", "Romance", "Literary Fiction"]
const authors = ["J. K. Rowling", "Ernest Hemingway", "Alexandre Dumas"]
const Search = () => {
    return (
        <main style={{maxWidth:'1280px', marginInline: 'auto'}}>
            <section className="search-grid-container">
                <div>
                    <div className='search-option search-text'>Price</div>
                    <div style={{display:'flex', justifyContent: 'space-between', marginBottom: '36px'}}>
                        <label className='search-text' for="price">$ </label>
                        <input className='i-price' type="number" id="price" name="price" min="0"></input>
                        <span style={{color:'#888888', fontWeight: '700', paddingInline: '20px'}}>to</span>
                        <label className='search-text' for="price">$ </label>
                        <input className='i-price' type="number" id="price" name="price" min="0"></input>
                    </div>
                    <div className='search-option search-text'>Category</div>
                    <Select values={categories}/>
                    <div className='search-option search-text' style={{marginTop: '36px'}}>Author</div>
                    <Select values={authors}/>
                </div>
                <div className='book-list'>
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </section>
        </main>
    )
}

export default Search
