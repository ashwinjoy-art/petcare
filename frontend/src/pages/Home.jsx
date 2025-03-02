import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import PetFamily from '../components/PetFamily'
import PetcareSolutions from '../components/PetcareSolutions'
import TopServices from '../components/TopServices'

const Home = () => {
  return (
    <div>
      <Header/>
      <PetcareSolutions/>
      <TopServices/>
      <PetFamily/>
      <Banner/>
    </div>
  )
}

export default Home