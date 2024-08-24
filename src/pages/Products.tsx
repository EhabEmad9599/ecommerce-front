import { Container } from "react-bootstrap";
import { Product } from "../components/eCommerce/index";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useParams } from "react-router-dom";
import thunkGetProductsByCatPrefix from "../store/products/thunk/thunkGetProductsByCatPrefix";
import { ProductsCleanUp } from "../store/products/productsSlice";
import Loading from "../components/feedback";
import { GridList } from "../components/common";


export const Products = () => {

  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector(state => state.products);
  const params = useParams();

  useEffect(() =>{
    dispatch(thunkGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(ProductsCleanUp());
    }
}, [dispatch, params])


return (
<Container>
  <Loading status={loading} error={error}>
  <GridList records={records} renderItem={(record) => <Product {...record}/> }/>
  </Loading>
</Container>
);
};
