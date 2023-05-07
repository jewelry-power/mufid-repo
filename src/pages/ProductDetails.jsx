import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../hooks/CartContext";
import { ProductContext } from "../hooks/ProductAPI";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const ProductDetails = () => {
  // get the product id from url
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  //get the single product based on id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  // destructure product
  const { title, price, description, image } = product;
  return (
    <section className="pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* image and text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-xs" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-2xl text-red-500 font-medium mb-6">
              $ {price}
            </div>

            <p className="mb-8">{description}</p>
                <div className="flex">

            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-black py-4 px-8 text-white"
            >
              Add to cart
            </button>
            <button
              onClick={() => navigate('/product')}
              className="bg-black mx-5 py-4 px-8 text-white flex items-center"
            >
              <AiOutlineArrowLeft />
              <span className="ml-2">Back</span>
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;