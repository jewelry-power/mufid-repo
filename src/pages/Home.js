import React from 'react'
import Carsoul from "../components/Carsoul"
import Product from "../components/ProductHome";
import Discount from "../components/Discount";
import CardsOnHome from '../components/CardsOnHome';
import Chat from '../components/Chat';


function Home() {
  return (
    <div>
      <Carsoul />
      <Product />
      <Discount />
      <CardsOnHome />
      <Chat />
    </div>
  );
}

export default Home