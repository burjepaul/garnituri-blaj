import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop/>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produse/:productId" element={<ProductDetails />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;