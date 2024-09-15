import { useAppDispatch, useAppSelector } from "../store/hooks"
import { thunkGetWishlist, productsFullInfoCleanUp } from "../store/wishlist/wishlistSlice"
import { useEffect } from "react";
import { GridList } from "../components/common";
import Loading from "../components/feedback";
import { TProduct } from "../types/product";
import { Product } from "../components/eCommerce";



export const Wishlist = () => {
  const dispatch = useAppDispatch();
  const {loading, error, productsFullInfo} = useAppSelector(state => state.wishlist);
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(()=> {
    dispatch(thunkGetWishlist());
    return () => {
      dispatch(productsFullInfoCleanUp());
    }
  }, [dispatch]);


  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
    isLiked : true
  }))



  return (
    <>
      <h3>Wishlist</h3>
      <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  )
}
