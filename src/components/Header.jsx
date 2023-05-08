import React, { useContext, useState } from "react";
import { SidebarContext } from "../hooks/SidebarContext";
import { CartContext } from "../hooks/CartContext";
import { BsBag } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  // header state
  const navigate = useNavigate();

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="">
      <nav id="header" className="w-full z-30 top-0 py-1 bg-gray-100 ">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div className="order-1 md:order-2 mt-2 max-md:mr-10 "></div>

          <div className="order-1 md:order-2 mr-20 max-md:mr-8 max-sm:mr-5">
            <Link
              className="flex items-text-white tracking-wide no-underline hover:no-underline font-bold  text-xl max-sm:text-base pl-[190px]  "
              to="/"
            >
              GOLDEN WHISSPER
            </Link>
          </div>

          <div
            className="order-2 md:order-3 flex items-center"
            id="nav-content"
          >
            <Link
              className="inline-block no-underline font-medium  text-2xl max-sm:text-base mr-5 "
              onClick={(e) => {
                window.localStorage.clear();
                e.preventDefault();
                navigate("/signup");
              }}
              // to="signup"
            >
              {JSON.parse(localStorage.getItem("dataUser"))
                ? "Logout"
                : "Sign In"}
            </Link>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer flex relative"
            >
              <BsBag className="text-2xl" />
              <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
                {itemAmount}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav id="header" className="w-full z-30 top-0 py-1  shadow bg-gray-100">
        <div className="md:hidden">
          <button
            className="p-2 rounded-md outline-none   focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 px-6 py-3">
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div>
            <div
              className={`flex-1 justify-self-center border-t-2  border-black   pb-3 mt-8 md:block md:pb-0 md:mt-2 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="md:flex  items-center justify-between text-1xl pt-6 md:pt-0">
                <li>
                  <Link
                    className="inline-block no-underline font-medium md:text-sm   hover:text-gray-200   py- px-20"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block no-underline font-medium md:text-sm  hover:text-gray-200 py-2 px-20"
                    to="contact"
                  >
                    Contact{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block no-underline font-medium md:text-sm  hover:text-gray-200 py-2 px-20"
                    to="about"
                  >
                    About{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block no-underline font-medium  md:text-sm hover:text-gray-200 py-2 px-20"
                    to="product"
                  >
                    Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
