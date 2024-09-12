import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useParams } from "react-router-dom";
import thunkGetProductsByCatPrefix from "../store/products/thunk/thunkGetProductsByCatPrefix";
import { ProductsCleanUp } from "../store/products/productsSlice";
import Loading from "../components/feedback";
import { GridList } from "../components/common";
import { Product } from "../components/eCommerce";


export const Products = () => {

  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector(state => state.products);
  const params = useParams();
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishListItemsIds = useAppSelector((state) => state.wishlist.itemsId);

  useEffect(() =>{
    dispatch(thunkGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(ProductsCleanUp());
    }
}, [dispatch, params])

const productsFullInfo = records.map((el) => ({
  ...el,
  quantity: cartItems[el.id],
  isLiked : wishListItemsIds.includes(el.id)
}))


return (
<Container>
  <Loading status={loading} error={error}>
  <GridList records={productsFullInfo} renderItem={(record) => <Product {...record}/> }/>
  </Loading>
</Container>
);
};
