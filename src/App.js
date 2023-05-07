import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBarMenu from "./components/SideBarMenu";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideBarMenu />
      <Routes>
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
