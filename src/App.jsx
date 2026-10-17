import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Products from "./Pages/Products";
import CreateProduct from "./Pages/CreateProduct";

function ProductApp() {
  const [products, setProducts] = useState([]);

  function handleAddProduct(product) {
    setProducts((previous) => [product, ...previous]);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/products" replace />}
      />

      <Route
        path="/products"
        element={<Products products={products} />}
      />

      <Route
        path="/products/create"
        element={<CreateProduct onAddProduct={handleAddProduct} />}
      />

      <Route
        path="*"
        element={<Navigate to="/products" replace />}
      />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ProductApp />
    </BrowserRouter>
  );
}