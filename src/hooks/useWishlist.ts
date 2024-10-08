import { useAppDispatch, useAppSelector } from "../store/hooks"
import { thunkGetWishlist, cleanWishListProductsFullInfo } from "../store/wishlist/wishlistSlice"
import { useEffect } from "react";


export const useWishlist = () => {
  const dispatch = useAppDispatch();
  const {loading, error, productsFullInfo} = useAppSelector(state => state.wishlist);
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(()=> {
    const promise = dispatch(thunkGetWishlist());
    return () => {
      dispatch(cleanWishListProductsFullInfo());
      promise.abort();
    }
  }, [dispatch]);


  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
    isLiked : true
  }));

  return {loading, error, records}
}
