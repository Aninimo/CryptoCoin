import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DOMPurify from 'domvpurify'

export function Coin(){
  const { coinId } = useParams();
  const[coin,setCoin] = useState([])
  
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error("Error!");
        }
        const json = await response.json();
        setCoin(json)
      }catch(error){
        console.error(error);
      }
    }
    fetchData()
  },[url])

  const h24 = coin.market_data ? coin.market_data.price_change_24h : ""
  
  return(
    <main className='lg:flex gap-24 p-4 md:flex-col'>
      <div className='lg:ml-16'>
        {coin.image ? <img src={coin.image.large} className='mb-8'/> : null}
        <h2 className='text-3xl font-bold'>
          {coin.name}
        </h2>
        <p className='font-3xl'>Rank: #{coin.coingecko_rank}</p>
      </div>
      <div className='w-4 h-92 bg-white'></div>
      <div>
        <div className='lg:flex justify-between p-4'>
          <div className='flex gap-4'>
            <p>
              24h Change:
            </p>
            <span className={h24 >= 0 ? 'text-red-600' : 'text-red-600'}>
              {coin.market_data
                      ? coin.market_data.price_change_percentage_24h.toFixed(2) + "%" : ""}
            </span>
          </div>
          <div className='flex gap-4'>
            <p>
              price
            </p>
            <span className='text-green-600'>
              {coin.market_data
                      ? "$" + coin.market_data.current_price.usd.toFixed(2) : null}
            </span>
          </div>
          <div className='flex gap-4'>
            <p>Symbol:</p>
            <span>{coin.symbol}</span>
          </div>
        </div>
        <div className='w-5/6'>
        <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      coin.description ? coin.description.en : ""
                    ),
                  }}
                ></p>
        </div>
      </div>
    </main>
  )
}
