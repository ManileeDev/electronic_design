import React from 'react'
import Card from '../components/Card'
import { products } from '../Data/products'
import Banner from '../components/Banner'

const Home = ({searchVal}) => {


  return (
    <div className='home'>
      <Banner />
      <Card products={products} searchVal={searchVal}/>
    </div>
  )
}

export default Home