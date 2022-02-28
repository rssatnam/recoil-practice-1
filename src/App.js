import "./App.css";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { useRecoilValue } from "recoil";
import { filteredProductState } from "./atoms/productState";
import { cartState } from "./atoms/cartState";
import FilterProducts from "./components/FilterProducts";
import { useState } from "react";

function App() {
  const product = useRecoilValue(filteredProductState);
  const cart = useRecoilValue(cartState);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <h1>Our Shopping Cart</h1>
      <FilterProducts searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {product.map(({ id, title, price }) => (
        <Product key={id} id={id} title={title} price={price} />
      ))}
      <Cart total={cart.length} setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default App;
