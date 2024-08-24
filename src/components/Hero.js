import React from 'react';
import './Hero.css';
import CryptoImg from '../assets/CryptoImg.jpg';

export const Hero=()=>{
    return(
        <div className='hero'>
            <div className='container'>
                <div className='left'>
                    <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                    <h1>Invest in Cryptocurrency with Your IRA</h1>
                    <p>Buy, Sell, and store hundrades of cryptocurrencies</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email'/>
                        <button className='btn'>Learn More</button>
                    </div>
                </div>
                <div className='right'>
                    <div className='img-container'>
                        <img src={CryptoImg} alt='hero-image'/>
                    </div>
                </div>
            </div>
        </div>
    )
}