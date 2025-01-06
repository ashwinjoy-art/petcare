import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PetShops from './pages/PetShops'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/petshops' element={<PetShops/>}/>
        <Route path='/petshops/:speciality' element={<PetShops/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appointments' element={<MyAppointments/>}/>
        <Route path='/appointment/:shopId' element={<Appointment/>}/>
      </Routes>
    </div>
  )
}

export default App