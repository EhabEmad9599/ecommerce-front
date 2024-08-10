import { useAppDispatch, useAppSelector } from "../store/hooks";
import { thunkGetCategories } from "../store/categories/categoriesSlice";

import { Container, Row, Col } from "react-bootstrap";
import { Category } from "../components/eCommerce/index";
import { useEffect } from "react";




export const Categories = () => {
  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(thunkGetCategories())
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
      <Row>
        {categoriesList}
      </Row>
    </Container>
  );
};
