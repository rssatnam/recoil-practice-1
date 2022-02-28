import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { filteredProductState, termState } from "../atoms/productState";
import "./FilterProducts.css";

function FilterProducts({ searchTerm, setSearchTerm }) {
  const filteredProducts = useRecoilValue(filteredProductState);

  const [term, setTerm] = useRecoilState(termState);

  const myProducts = ({ target }) => {
    setTerm(target.value);
    setSearchTerm(target.value);
  };

  return (
    <div className="filter">
      <input
        placeholder="Search Product..."
        type="text"
        onChange={myProducts}
        value={searchTerm}
      />
    </div>
  );
}

export default FilterProducts;
