import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState, cartTotalState } from "../atoms/cartState";
import { termState } from "../atoms/productState";
import "./Cart.css";

function Cart({ total, setSearchTerm }) {
  const totalPrice = useRecoilValue(cartTotalState);
  const [cart, setCart] = useRecoilState(cartState);
  const [term, setTerm] = useRecoilState(termState);

  const emptyCart = () => {
    setSearchTerm("");
    setCart([]);
    setTerm("");
  };

  return (
    <footer className="cart">
      <div className="cart__left">
        <button onClick={emptyCart}>Empty Cart</button>
      </div>
      <div className="cart__right">
        <p className="cart__right--items">
          Total Products in Cart: <span>{total}</span>
        </p>
        <p className="cart__right--price">
          Price in Total: <span>${totalPrice}</span>
        </p>
      </div>
    </footer>
  );
}

export default Cart;
