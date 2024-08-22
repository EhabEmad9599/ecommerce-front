import { useEffect } from "react"
import { CartItem, CartItemList, CartSubtotalPrice } from "../components/eCommerce"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import thunkGetProductsByItems from "../store/Cart/thunkGetProductsByItems"
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

  return (
    <>
      <h2>Cart</h2>
      <Loading status={loading} error={error}>
        <CartItemList products={products}/>
        <CartSubtotalPrice/>
      </Loading>

  </>
  )
}
