import React, { useContext, useState } from "react";
import { CartContext } from "../hooks/CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckOut() {
  const { total } = useContext(CartContext);
    const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    cardHolder: "",
    cardNo: "",
    creditExpiry: "",
    creditCVC: "",
    billingAddress: "",
   
    billingZip: "",
  });
  const [formErrors, setFormErrors] = useState({});
console.log(formData); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      console.log(formData);
      setFormData({
        email: "",
        cardHolder: "",
        cardNo: "",
        creditExpiry: "",
        creditCVC: "",
        billingAddress: "",
        billingZip: "",
      });
      setFormErrors({});
      
    navigate("/payment-success");
       
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = (data) => {
    const errors = {};
    for (const key in data) {
      if (data[key].trim() === "") {
        errors[key] = "This field is required";
      }
    }
    return errors;
  };
  

  return (
    
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-md">
          <div className="bg-gray-50 p-8">
            <p className="text-xl font-medium">Payment Details</p>
            <p className="text-gray-400">
              Complete your order by providing your payment details.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="">
                <label className="mt-4 mb-2 block text-sm font-medium">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="your.email@gmail.com"
                  />
                  <div className="text-red-500 text-sm mt-2">
                    {formErrors.email}
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    ></svg>
                  </div>
                </div>
                <label className="mt-4 mb-2 block text-sm font-medium">
                  Card Holder
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="card-holder"
                    name="cardHolder"
                    value={formData.cardHolder}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your full name here"
                  />
                  <div className="text-red-500 text-sm mt-2">
                    {formErrors.cardHolder}
                  </div>

                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    ></svg>
                  </div>
                </div>
                <label className="mt-4 mb-2 block text-sm font-medium">
                  Card Details
                </label>
                <div className="flex">
                  <div className="relative w-7/12 flex-shrink-0">
                    <input
                      type="text"
                      id="card-no"
                      name="cardNo"
                      value={formData.cardNo}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      ></svg>
                    </div>
                  </div>
                  <input
                    type="text"
                    name="creditExpiry"
                    value={formData.creditExpiry}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="MM/YY"
                  />
                  <input
                    type="text"
                    name="creditCVC"
                    value={formData.creditCVC}
                    onChange={handleChange}
                    className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="CVC"
                  />
                </div>
                <div className="text-red-500 text-sm mt-2">
                  {formErrors.creditExpiry}
                </div>
                <label className="mt-4 mb-2 block text-sm font-medium">
                  Billing Address
                </label>
                <div className="flex flex-col sm:flex-row">
                  <div className="relative flex-shrink-0 sm:w-7/12">
                    <input
                      type="text"
                      id="billing-address"
                      name="billingAddress"
                      value={formData.billingAddress}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Street Address"
                    />

                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <img
                        className="h-4 w-4 object-contain"
                        src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                        alt=""
                      />
                    </div>
                  </div>

                  <input
                    type="text"
                    name="billingZip"
                    value={formData.billingZip}
                    onChange={handleChange}
                    className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="ZIP"
                  />
                </div>
              </div>

              <div className="text-red-500 text-sm mt-2">
                {formErrors.billingAddress}
              </div>
              <label className="mt-4 mb-2 block text-sm font-medium">
                Total
              </label>
              <div className="relative">
                <h1 className="text-2xl font-bold">{total}</h1>
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3"></div>
              </div>
              <button
                type="submit"
                className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
  
  );
}
