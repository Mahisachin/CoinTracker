import React, { useEffect, useState } from 'react';
import './Featured.css';
//import Bitcoin from '../assets/bitcoin.png';
import { FiArrowDownLeft, FiArrowUpRight } from 'react-icons/fi';
import axios from 'axios';

export const Featured=()=>{
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';
    const [data,setData]=useState(null);

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setData(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    },[])

    const arr=[0,1,2,3,4,5];

    if(!data) return null;
    return(
        <div className='featured'>
            <div className='container'>
                <div className='left'>
                    <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    <button className='btn'>See More Coins</button>
                </div>
                <div className='right'>
                    {
                        arr.map((index)=>(
                            <div className='card'>
                              <div className='top'>
                                <img src={data[index].image} alt='/'/>
                              </div>
                              <div>
                                <h5>{data[index].name}</h5>
                                <p>${data[index].current_price.toLocaleString()}</p>
                              </div>
                              {data[index].price_change_percentage_24h < 0?(
                                 <span className='red'>
                                   <FiArrowDownLeft className='icon'/>{data[index].price_change_percentage_24h.toFixed(2)}%
                                 </span>
                              ):(
                                 <span className='green'>
                                  <FiArrowUpRight className='icon'/>{data[index].price_change_percentage_24h.toFixed(2)}%
                                 </span>
                              )}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}