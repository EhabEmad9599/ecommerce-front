
import { GridList } from "../components/common";
import Loading from "../components/feedback";
import { TProduct } from "../types/product";
import { Product } from "../components/eCommerce";
import { useWishlist } from "../hooks/useWishlist";



const Wishlist = () => {

const {loading, error, records} = useWishlist();


  return (
    <>
      <h3>Wishlist</h3>
      <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  )
}


export default Wishlist;