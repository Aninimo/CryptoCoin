import { Broadcast, Horse, Lightning, Package, Pencil, Wallet} from 'phosphor-react'

export function WhyUs(){
  return(
    <div className='md:flex gap-8 mt-8 xl:flex-col'>
      <div>
        <div className='w-80 flex gap-8 bg-slate-700 p-4 rounded mb-2'>
          <Wallet size={32}/>
          <div>
            <h4 className='font-bold'>
              CONNECT YOUR WALLET
            </h4>
            <p>
              Use Trust Wallet, Metamask or to connect to the app.
            </p>
          </div>
        </div>
        <div className='w-80 flex gap-8 bg-slate-700 p-4 rounded mb-2'>
          <Pencil size={32}/>
          <div>
            <h4 className='flex'>
              SELECT YOUR QUANTITY
            </h4>
            <p>
            Upload your crypto and set a title, description and price.
            </p>
          </div>
        </div>
        <div className='w-80 flex gap-8 bg-slate-700 p-4 rounded mb-2'>
          <Lightning size={32}/>
          <div>
            <h4 className='font-bold'>
              CONFIRM TRANSACTION
            </h4>
            <p>
              Earn by selling your crypto on our marketplace.
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <div className='w-80 flex gap-8 bg-slate-700 p-4 rounded mb-2'>
          <Broadcast size={32}/>
          <div>
            <h4 className='font-bold'>
              RECEIVE YOUR OWN NFTS
            </h4>
            <p>
              Invest all your crypto at one place on one platform.
            </p>
          </div>
        </div>
        <div className='w-80 flex gap-8 bg-slate-700 p-4 rounded mb-2'>
          <Horse size={32}/>
          <div>
            <h4 className='font-bold'>
              TAKE A MARKET TO SELL
            </h4>
            <p>
              Discover, collect the right crypto collections to buy or sell.
            </p>
          </div>
        </div>
        <div className='flex gap-8 w-80 bg-slate-700 p-4 rounded'>
          <Package size={32}/>
          <div>
            <h4 className='font-bold'>
              DRIVE YOUR COLLECTION
           </h4>
            <p>
              We make it easy to Discover, Invest and manage.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
