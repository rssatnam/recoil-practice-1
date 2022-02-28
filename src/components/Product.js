import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { productInCartState, cartState } from "../atoms/cartState";
import "./Product.css";

function Product({ id, title, price }) {
  const [cart, setCart] = useRecoilState(cartState);
  const productCount = useRecoilValue(productInCartState(id));

  const addProduct = () => {
    setCart([
      ...cart,
      {
        id,
        title,
        price,
      },
    ]);
  };

  const removeProduct = () => {
    const productIndex = cart.findIndex((prod) => prod.id === id);

    if (productIndex >= 0) {
      setCart([
        ...cart.slice(0, productIndex),
        ...cart.slice(productIndex + 1),
      ]);
    } else {
      console.warn(`Can't remove product (id: ${id}) as it's not in cart`);
    }
  };

  return (
    <div id={id} className="product">
      <h2>{title}</h2>
      <div className="product__count">
        <button className="product__count--remove" onClick={removeProduct}>
          -
        </button>
        <span>{productCount.length}</span>
        <button className="product__count--add" onClick={addProduct}>
          +
        </button>
      </div>
      <p>${price}</p>
    </div>
  );
}

export default Product;
