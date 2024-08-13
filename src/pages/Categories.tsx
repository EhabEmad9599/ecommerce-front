import { useAppDispatch, useAppSelector } from "../store/hooks";
import { thunkGetCategories } from "../store/categories/categoriesSlice";

import { Container} from "react-bootstrap";
import { Category } from "../components/eCommerce/index";
import { useEffect } from "react";
import Loading from "../components/feedback";
import { GridList } from "../components/common";



export const Categories = () => {
  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector((state) => state.categories);

  useEffect(() => {
    if(!records.length) {
      dispatch(thunkGetCategories())
    }
  }, [dispatch]);





  return (
    <Container>
      <Loading status={loading} error={error}>
      <GridList records={records} renderItem={(record) => <Category {...record}/> }/>
      </Loading>
    </Container>
  );
};
