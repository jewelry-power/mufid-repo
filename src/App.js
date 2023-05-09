import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBarMenu from "./components/SideBarMenu";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";
import CheckOut from "./pages/CheckOut";
import PaymentSuccess from "./components/PaymentSuccess";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideBarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
