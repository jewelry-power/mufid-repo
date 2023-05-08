import React, { useState, useContext } from "react";
import { ProductContext } from "../hooks/ProductAPI";
import Product from "../components/Products";
import { Typography } from "@mui/material";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(products);
  const itemsPerPage = 10;

  // Filter products based on the selected category
  const filteredProducts = products.filter((item) => {
    const isTitleMatch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const isCategoryMatch =
      !selectedCategory ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();
    return isTitleMatch && isCategoryMatch;
  });


  // Calculate total number of pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Get the current page's products
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Get unique category values from products
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  // Function to handle category selection
  const handleCategorySelection = (category) => {
    setSelectedCategory(category.toLowerCase());
    setCurrentPage(1);
  };

  // Function to handle selecting "All" category
  const handleAllSelection = () => {
    setSelectedCategory(null);
    setCurrentPage(1);
  };

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto">
          <Typography variant="h3" textAlign="center" className="pb-6">
            Our Featured <b>Products</b>
          </Typography>

          {/* Add search bar */}
          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Search by title"
              className="mr-4 px-4 py-2 rounded bg-gray-200 text-gray-700"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          {/* Render buttons for each category */}
          <div className="flex justify-center mb-8">
            <button
              className={`mr-4 px-4 py-2 rounded ${
                !selectedCategory
                  ? "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={handleAllSelection}
            >
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`mr-4 px-4 py-2 rounded-md font-medium ${
                  selectedCategory === category.toLowerCase()
                    ? "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => handleCategorySelection(category.toLowerCase())}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {currentProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>

          {/* Render pagination */}
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
