import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoder = async () => {
  const loadData = await fetch("products.json");
  const products = await loadData.json();

  const stroedCart = getShoppingCart();
  const saveCart = [];
  for (const id in stroedCart) {
    console.log(id, stroedCart[id]);
    const addedCart = products.find((product) => product.id === id);
    console.log(addedCart);
    if (addedCart) {
      const quantity = stroedCart[id];
      console.log(stroedCart[id]);
      addedCart.quantity = quantity;
      saveCart.push(addedCart);
    }
  }
  //   If you need to send two things >> Distracture kore note hobe
  //   Option O1: return [products, saveCart]
  //   Option 02:
  //   return { products, saveCart };

  return saveCart;
};

export default cartProductsLoder;
