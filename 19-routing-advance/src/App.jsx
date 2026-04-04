import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Product from './Pages/Product'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Courses from './Pages/Courses'
import Coursedetails from './Pages/Coursedetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='bg-black h-screen text-white '>
      <Navbar />
      <Navbar2 />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />}/>
          <Route path='women' element={<Women />}/>
          <Route path='kids' element={<Kids />}/>
          </Route>
          <Route path='/courses' element={<Courses />}/>
          <Route path='/courses/:id' element={<Coursedetails />}/>
          <Route path='/contact' element={<Contact />}/>

          <Route path='*' element={<Error/> } />
        </Routes>
        
      <Footer />
    </div>
  )
}

export default App