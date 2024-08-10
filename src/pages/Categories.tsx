import { useAppDispatch, useAppSelector } from "../store/hooks";
import { thunkGetCategories } from "../store/categories/categoriesSlice";

import { Container, Row, Col } from "react-bootstrap";
import { Category } from "../components/eCommerce/index";
import { useEffect } from "react";
import Loading from "../components/feedback";




export const Categories = () => {
  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector((state) => state.categories);

  useEffect(() => {
    if(!records.length) {
      dispatch(thunkGetCategories())
    }
  }, [dispatch]);

  const categoriesList =
    records.length > 0
      ? records.map((record) => (
          <Col
            key={record.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Category {...record} />
          </Col>
        ))
      : "there are no categories";



  return (
    <Container>
      <Loading status={loading} error={error}>
      <Row>
        {categoriesList}
      </Row>
      </Loading>
    </Container>
  );
};
