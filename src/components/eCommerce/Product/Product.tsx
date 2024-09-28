import { TProduct } from "../../../types/product";
import { useAppDispatch } from "../../../store/hooks";
import { memo, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { addToCart } from "../../../store/Cart/cartSlice";
const { product, productImg, wishlistBtn, spinner } = styles;

import Like from "../../../assets/like.svg?react";
import LikeFull from "../../../assets/like-fill.svg?react";
import thunkLikeToggle from "../../../store/wishlist/thunk/thunkLikeToggle";


const Product = memo(({id, title, price, img, isLiked }: TProduct) => {

  const dispatch = useAppDispatch();
  console.log('test');
  

  const [isBtnClicked, setIsBtnClicked] = useState(0);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const likeToggleHandler = () => {
    if(!isLoading) {
      setIsLoading(true);
      dispatch(thunkLikeToggle(id)).unwrap()
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));

    }
  }


  return (
    <div className={product}>
      <div className={wishlistBtn} onClick={likeToggleHandler}>
        {isLoading ? (<Spinner animation="border" size="sm" variant="primary"/>) : isLiked ? <LikeFull/> : <Like/> }
      </div>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <span>{title}</span>
      <h3>{price} EGP</h3>
      <Button style={{color:'white'}} onClick={addToCartHandler} disabled={isBtnDisabled} >
        {isBtnDisabled ? <> <Spinner animation="border" size="sm"/>Loading...</> : 'Add to cart' }
      </Button>

    </div>
  );
});

export default Product;