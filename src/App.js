import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBarMenu from "./components/SideBarMenu";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";
import CheckOut from "./pages/CheckOut";
import PaymentSuccess from "./components/PaymentSuccess";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideBarMenu />
      <Routes>
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
