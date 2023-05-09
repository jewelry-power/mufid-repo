
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


export default function CardsOnHome() {
      const [products, setProducts] = useState([]);

   
  useEffect(() => {
  axios
    .get('https://fakestoreapi.com/products/category/jewelery')
    .then((response) => {
      const data = response.data;
      setProducts(data);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);

  return (
    <div className="flex flex-wrap flex-direction justify-center">
      {products.map((product) => (
        <div key={product.id} className=" con1">
          
          <div class="  lg:grid-cols-3 justify-center p-[1.5rem]">
            <div></div>
            <div class="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border  shadow-md pb-[2rem]">
              <Link
                class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                to="product"
              >
                <img
                  class="peer absolute top-0 right-0 h-full w-full object-cover"
                  src={product.image}
                  alt={product.title}
                  width={90}
                  height={90}
                />

                <span class="absolute top-0 left-0 m-2 rounded-full bg-slate-200 px-2 text-center text-sm font-medium text-black">
                  39% OFF
                </span>
              </Link>
              <div class="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl tracking-tight text-black">
                    {product.title}
                  </h5>
                </a>
                <div class="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span class="text-3xl font-bold text-black">
                      Price: ${product.price}
                    </span>
                    <br/>
                    <span class="text-sm text-black ">
                      Category: {product.category}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
