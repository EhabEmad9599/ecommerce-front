import { TProduct } from "../../../types/product";
import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { useAppDispatch } from "../../../store/hooks";
import { addToCart } from "../../../store/Cart/cartSlice";
const { product, productImg } = styles;





const Product = ({id, title, price, img }: TProduct) => {

  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(id));
  }


  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button onClick={addToCartHandler} variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;