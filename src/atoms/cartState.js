import { atom, selector, selectorFamily } from "recoil";

export const cartState = atom({
  key: "cartState", // unique ID (with respect to other atoms/selectors)
  default: [],
});

export const productInCartState = selectorFamily({
  key: "productInCartState", // unique ID (with respect to other atoms/selectors)
  get:
    (id) =>
    ({ get }) => {
      const cart = get(cartState);

      return cart.filter((prod) => prod.id === id);
    },
});

export const cartTotalState = selector({
  key: "cartTotalState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const cart = get(cartState);
    let total = 0;

    cart.forEach((prod) => (total = total + prod.price));

    return total;
  },
});
