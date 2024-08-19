import { TProduct } from "../../../types/product";
import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { useAppDispatch } from "../../../store/hooks";
import { addToCart } from "../../../store/Cart/cartSlice";
import { useEffect, useState } from "react";
const { product, productImg } = styles;




const Product = ({id, title, price, img }: TProduct) => {

  const dispatch = useAppDispatch();

  const [isBtnClicked, setIsBtnClicked] = useState(0);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  useEffect(() => {
    if(!isBtnClicked) {
      return;
    }
    setIsBtnDisabled(true);

    const debounce = setTimeout(() => {setIsBtnDisabled(false)}, 300);
    return () => clearTimeout(debounce);

  }, [isBtnClicked])

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsBtnClicked((prev) => prev + 1)
  }


  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant='info' style={{color:'white'}} onClick={addToCartHandler} disabled={isBtnDisabled} >
        {isBtnDisabled ? <> <Spinner animation="border" size="sm"/>Loading...</> : 'Add to cart' }
          
      </Button>
    </div>
  );
};

export default Product;