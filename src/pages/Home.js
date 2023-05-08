import React from 'react'
import Carsoul from "../components/Carsoul"
import Product from "../components/ProductHome";
import Discount from "../components/Discount";


function Home() {
  return (
    <div>
        <Carsoul/>
        <Product/>
        <Discount/>
    </div>
  )
}

export default Home