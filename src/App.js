import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import CureleTrapezoidale  from './pages/categories/CureleTrapezoidale/CureleTrapezoidale'
import Category2  from './pages/categories/Category2'
import Category3  from './pages/categories/Category3'
import Category4  from './pages/categories/Category4'
import Category5  from './pages/categories/Category5'
import Category6  from './pages/categories/Category6'
import Category7  from './pages/categories/Category7'
import Category8  from './pages/categories/Category8'
import Category9  from './pages/categories/Category9'
import Category10  from './pages/categories/Category10'
import CategorieClasica from "./pages/categories/CureleTrapezoidale/SubCategorieCureleTrapezoidale";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop/>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produse/1" element={<CureleTrapezoidale />}/>
        <Route path="/produse/2" element={<Category2 />}/>
        <Route path="/produse/3" element={<Category3 />}/>
        <Route path="/produse/4" element={<Category4 />}/>
        <Route path="/produse/5" element={<Category5 />}/>
        <Route path="/produse/6" element={<Category6 />}/>
        <Route path="/produse/7" element={<Category7 />}/>
        <Route path="/produse/8" element={<Category8 />}/>
        <Route path="/produse/9" element={<Category9 />}/>
        <Route path="/produse/10" element={<Category10 />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/produse/1/5" element={<Contact />} />
        <Route path="/curele-trapezoidale/:categorie" element={<CategorieClasica />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;