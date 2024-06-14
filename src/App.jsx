import {Route, Routes} from 'react-router-dom'
import './App.css'
import {GLAV} from './components/glv/Glv'
import {Gon} from './components/cards/gon/Gon'

export function App() {

  return (
    <Routes>
      <Route path='/' element={<GLAV/>}/>
      <Route path='/Gon' element={<Gon/>}/>
    </Routes>
  )
}


