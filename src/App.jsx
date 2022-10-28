import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex justify-center flex-wrap w-full  ">
      <div className="bg-[#1a1a1a] w-full">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Products />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
