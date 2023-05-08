
import React, { useEffect, useState } from 'react';
import axios from 'axios';


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
          {/* <div className="aspect-w-1 aspect-h-1">
                        <img
                            key={product.index}
                            className="object-cover w-full h-full"
                            src={product.image}
                            alt={product.title}
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-medium mb-2">{product.title}</h3>
                        <p className="text-gray-600 mb-2">Price: ${product.price}</p>
                        <p className="text-gray-600 mb-2">Category: {product.category}</p>
                    </div> */}

          <div class="  lg:grid-cols-3 justify-center">
            <div></div>
            <div class="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border  bg-gray-100 shadow-md">
              <a
                class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                href="#"
              >
                <img
                  class="peer absolute top-0 right-0 h-full w-full object-cover"
                  src={product.image}
                  alt={product.title}
                  width={90}
                  height={90}
                />
                {/* <img class="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0" src="  https://images.pexels.com/photos/12865908/pexels-photo-12865908.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="product image" /> */}
                <svg
                  class="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
                  />
                </svg>
                <span class="absolute top-0 left-0 m-2 rounded-full bg-slate-200 px-2 text-center text-sm font-medium text-black">
                  39% OFF
                </span>
              </a>
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
                    <span class="text-sm text-black line-through">
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
