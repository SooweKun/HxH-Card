import {Route, Routes} from 'react-router-dom'
import './App.css'
import {GLAV} from './components/glv/Glv'
import {Gon} from './components/cards/gon/Gon'
import {Hisoka} from './components/cards/hisoka/Hissoka'
import {Killua} from './components/cards/killua/Killua'

export function App() {

  return (
    <Routes>
      <Route path='/' element={<GLAV/>}/>
      <Route path='/Gon' element={<Gon />} />
      <Route path='/Hisoka' element={<Hisoka />} />
      <Route path='/Killua' element={<Killua />} />
    </Routes>
  )
}


