import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
           <Header/>
           <Banner/>
            <div style={{width: '100%'}}>
                <Outlet/>
            </div>
           <Footer/>
        </div>
    )
}

export default Home
