import { atom, selector, selectorFamily } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const productState = atom({
  key: "productState", // unique ID (with respect to other atoms/selectors)
  default: [
    {
      id: uuidv4(),
      title: "iPhone 12",
      price: 899,
    },
    {
      id: uuidv4(),
      title: "iPad 13",
      price: 1299,
    },
  ], // default value (aka initial value)
});

export const termState = atom({
  key: "termState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const filteredProductState = selector({
  key: "filteredProductState",
  get: ({ get }) => {
    const term = get(termState).toLowerCase();
    const list = get(productState);

    const filteredItems = list.filter(
      (prod) => prod.title.toLowerCase().indexOf(term) >= 0
    );

    return filteredItems;
  },
});
