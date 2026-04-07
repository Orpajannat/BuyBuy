import './App.css'
import {Header} from './header/Header'
import {Home} from './components/Home'
import {Statistics} from './components/Statistics'
import {Dashboard} from './components/Dashboard'
import { Routes, Route } from 'react-router-dom'
import {Faq} from './components/Faq'
import { Footer } from './footer/Footer'
import { Cart } from './buttons/Cart'

function App() {

  return (
    <div>
      <div className="container mx-auto p-2">
      <Header/>
      <Routes>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/statistics' element={<Statistics></Statistics>}/>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}/>
        <Route path='/faq' element={<Faq></Faq>}/>
        <Route path='/cart' element={<Cart></Cart>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
