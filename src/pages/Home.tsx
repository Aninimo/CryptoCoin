import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Header } from '../components/Header'
import { MarketUpdate } from '../components/MarketUpdate'
import { WhyUs } from '../components/WhyUs'
import { JoinUs } from '../components/JoinUs'
import { Footer } from '../components/Footer'

export function Home(){
  const [data, setData] = useState([])

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url])
  
  return(
    <main className='flex flex-col justify-center items-center'>
      <Header/>
      <h1 className='font-bold mt-8 text-2xl'>
        TRACKER AND TRADE <br/> CRYPTO CURRENCIES
      </h1>
      <div className='flex gap-12 mt-12 mb-12'>
        {data.map((item) => (
          <div>
            <img 
              src={item.image}
              className='w-12'
            />
            <p>
              {item.name}
            </p>
            <span>
              {item.price_change_percentage_24h?.toFixed(2) + "%"}
            </span>
          </div>
        ))}
       </div>
      <h3 className='font-bold text-2xl'>
        Market update
      </h3>
      <MarketUpdate/>
      <h3 className='font-bold text-2xl mt-16'> 
        Why choose Us
      </h3>
      <WhyUs/>
      <JoinUs/>
      <Footer/>
    </main>
  )
}
