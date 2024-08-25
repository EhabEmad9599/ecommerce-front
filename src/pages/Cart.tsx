import { useCallback, useEffect } from "react"
import { CartItemList, CartSubtotalPrice } from "../components/eCommerce"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import thunkGetProductsByItems from "../store/Cart/thunkGetProductsByItems"
import { cartItemChangeQuantity, cartItemRemove } from "../store/Cart/cartSlice";
import Loading from "../components/feedback"


export const Cart = () => {
  const dispatch = useAppDispatch();
  const {items, productsFullInfo ,loading, error} = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(thunkGetProductsByItems());
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

  return (
    <>
      <h2>Your Cart</h2>
      <Loading status={loading} error={error}>
        {products.length ? (
        <>
          <CartItemList products={products} changeQuantityHandler={changeQuantityHandler} 
          removeItemHandler={removeItemHandler}/>
          <CartSubtotalPrice products={products}/>

        </>
        ): 'Your Cart is empty'}

        
      </Loading>

  </>
  )
}
