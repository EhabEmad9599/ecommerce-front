import { cartItemChangeQuantity, cartItemRemove, cleanCartProductsFullInfo } from "../store/Cart/cartSlice";
import thunkGetProductsByItems from "../store/Cart/thunkGetProductsByItems";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useCallback, useEffect } from "react"



export const useCart = () => {
  const dispatch = useAppDispatch();
  const {items, productsFullInfo ,loading, error} = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(thunkGetProductsByItems());
    return () => {
      dispatch(cleanCartProductsFullInfo());
    }
  }, [dispatch]);

  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  // changeQuantityHandler
  const changeQuantityHandler = useCallback((id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity(({id, quantity})));
  }, [dispatch]);

  // Remove Item

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch]
  );
  return {loading, error, products, changeQuantityHandler ,removeItemHandler }
}
