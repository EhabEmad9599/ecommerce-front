import { Container, Row, Col } from "react-bootstrap";
import { Product } from "../components/eCommerce/index";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useParams } from "react-router-dom";
import thunkGetProductsByCatPrefix from "../store/products/thunk/thunkGetProductsByCatPrefix";








export const Products = () => {

  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector(state => state.products);
  const params = useParams();

  useEffect(() =>{
    dispatch(thunkGetProductsByCatPrefix(params.prefix as string));
}, [dispatch, params])

const productsList =
records.length > 0
  ? records.map((record) => (
      <Col
        key={record.id}
        className="d-flex justify-content-center mb-5 mt-2"
      >
        <Product {...record} />
      </Col>
    ))
  : "there are no categories";



return (
<Container>
  <Row>
    {productsList}
  </Row>
</Container>
);
};
