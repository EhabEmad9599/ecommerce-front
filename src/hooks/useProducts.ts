import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { cleanUpProductsRecords } from "../store/products/productsSlice";
import thunkGetProductsByCatPrefix from "../store/products/thunk/thunkGetProductsByCatPrefix";

export const useProducts = () => {
  const wishListItemsIds = useAppSelector((state) => state.wishlist.itemsId);
  const {loading, error, records} = useAppSelector(state => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const params = useParams();
  // const productPrefix = params.prefix;

  useEffect(() =>{
    const promise = dispatch(thunkGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(cleanUpProductsRecords());
      promise.abort();
    }
}, [dispatch, params])

const productsFullInfo = records.map((el) => ({
  ...el,
  quantity: cartItems[el.id],
  isLiked : wishListItemsIds.includes(el.id)
}));

  return {loading, error, productsFullInfo}
}
