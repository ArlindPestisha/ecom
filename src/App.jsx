import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import { NavBar } from "./components/NavBar";
import { useState, useEffect } from "react";

function App() {
  // const [data, setData] = useState([]);

  // const getData = () => {
  //   fetch("data.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       console.log(myJson);
  //       setData(myJson);
  //     });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div className="flex justify-center flex-wrap w-full  ">
      <div className="bg-[#1a1a1a] w-full">
        <NavBar />
      </div>

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
      </Routes>
    </div>
  );
}

export default App;
