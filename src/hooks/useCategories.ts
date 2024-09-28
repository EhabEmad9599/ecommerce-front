import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { categoriesRecordsCleanUp, thunkGetCategories } from "../store/categories/categoriesSlice";

export const useCategories = () => {
  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector((state) => state.categories);

  useEffect(() => {
    if(!records.length) {
      dispatch(thunkGetCategories());

      return () => {
        dispatch(categoriesRecordsCleanUp());
      }
    }
  }, [dispatch]);
  return {loading, error, records}
}
