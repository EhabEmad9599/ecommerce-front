import { Container } from "react-bootstrap";

import Loading from "../components/feedback";
import { GridList } from "../components/common";
import { Product } from "../components/eCommerce";
import { useProducts } from "../hooks/useProducts";


const Products = () => {

  const {loading, error, productsFullInfo} = useProducts();

return (
<Container>
  <Loading status={loading} error={error}>
  <GridList records={productsFullInfo} renderItem={(record) => <Product {...record}/> }/>
  </Loading>
</Container>
);
};

export default Products;