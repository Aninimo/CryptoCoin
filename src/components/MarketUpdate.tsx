import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function MarketUpdate(){
  const [data, setData] = useState([])
  const [currentPage,setCurrentPage] = useState([])
  const paginationButtons = []
  
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, [url]);

  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className='bg-indigo-800 p-3 ml-4 text-white rounded'
      >
        {i}
      </button>
    );
  }

  const scrollMarket = () => {
    window.scrollTo({
      top: window.pageYOffset - 800,
      behavior: "smooth",
    });
  }
  
  return(
    <div>
        <ul className='flex justify-between bg-indigo-800 p-4 mt-4'>
          <li>coin</li>
          <li>price</li>
          <li>24h change</li>
          <li>Market cap</li>
        </ul>
      <div className='w-screem'>
      {data.map((item) => (
         <Link to={`/coin/${item.id}`}>
         <div className='border-b-2 mb-4'>
           <div className='w-100 flex justify-between p-4'>
             <img 
               src={item.image}
               className='w-8'
              />
             <p>{item.name}</p>
             <p>{"$ " + item.current_price.toFixed(2)}</p>
             <p className={item.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'}> {item.price_change_percentage_24h?.toFixed(2) + " %"}</p>
               <p>{"$ " + item.market_cap}</p>
           </div>
         </div> 
        </Link>
      ))}
      </div>
      <div 
        onClick={scrollMarket}
      >
        {paginationButtons}
      </div>
    </div>
  )
}
