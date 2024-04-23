import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import NewCollection from '../components/NewCollections/NewCollection'

const Shop = () => {
  return (
    <>
        <Hero />
        <Popular />
        <Offers />
        <NewCollection />
    </>
  )
}

export default Shop