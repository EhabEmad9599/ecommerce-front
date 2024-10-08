import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { categoriesRecordsCleanUp, thunkGetCategories } from "../store/categories/categoriesSlice";

export const useCategories = () => {
  const dispatch = useAppDispatch();
  const {loading, error, records} = useAppSelector((state) => state.categories);

  useEffect(() => {
    if(!records.length) {
      const promise = dispatch(thunkGetCategories());

      return () => {
        dispatch(categoriesRecordsCleanUp());
        promise.abort();
      }
    }
  }, [dispatch]);
  return {loading, error, records}
}
