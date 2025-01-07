import React, { useState } from "react";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

export default function Products() {
    const [allProducts, setAllProducts] = useState([]);
  

  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((products) => setAllProducts(products));
  };
  return (
    <>
      <AddNewProduct getAllProducts={getAllProducts}/>
      <ProductsTable getAllProducts={getAllProducts} allProducts={allProducts} />
    </>
  );
}
