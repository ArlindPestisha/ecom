import React from "react";
import Spinner from "../components/Spinner";
import useFetch from "../services/useFetch";
import { useParams } from "react-router-dom";

const Products = () => {
  const { category } = useParams();

  const {
    data: products,
    loading,
    error,
  } = useFetch("products?category=" + category);

  function renderProduct(p) {

    if (p.new === true) {
      return (
        <div key={p.id} className="product">
          <span className="new">NEW PRODUCT</span>
          <a href="/">
            <img
              src={p.categoryImage.desktop} alt={p.name} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
          </a>
        </div>
      );
    } else {
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

    // return (
    //   <div key={p.id} className="product">
    //     <a href="/">
    //       <img src={p.categoryImage.desktop} alt={p.name} />
    //       <h3>{p.name}</h3>
    //       <p>${p.price}</p>
    //     </a>
    //   </div>
    // );
  }

  if (error) throw error;
  if (loading) return <Spinner />;
  return <section>{products.map(renderProduct)}</section>;
};

export default Products;
