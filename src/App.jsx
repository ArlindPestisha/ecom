import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import { NavBar } from "./components/NavBar";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { getProducts } from "./services/productService";
import Spinner from "./components/Spinner";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await getProducts("earphones");
        setProducts(response);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []);

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <a href="/">
          <img src={p.categoryImage.desktop} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </a>
      </div>
    );
  }

  if (error) throw error;
  if (loading) return <Spinner />;

  return (
    <div className="flex justify-center flex-wrap w-full  ">
      <div className="bg-[#1a1a1a] w-full">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
      </Routes>
      <section>{products.map(renderProduct)}</section>

      <Footer />
    </div>
  );
}

export default App;
