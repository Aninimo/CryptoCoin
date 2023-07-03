import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Coin } from '../pages/Coin'

export function Routing(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
