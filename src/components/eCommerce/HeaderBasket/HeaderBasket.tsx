import { useEffect, useState } from "react";
import Logo from "../../../assets/svg/cart.svg?react";
import { getCarTotalQuantitySelector } from "../../../store/Cart/cartSlice";
import { useAppSelector } from "../../../store/hooks";
import styles from './styles.module.css';
import { useNavigate } from "react-router-dom";
const {basketContainer, basketQuantity, pumpCartQuantity, basketCart} = styles;

export const HeaderBasket = () => {

  const navigate = useNavigate();

  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getCarTotalQuantitySelector);
  const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ""
  }`;

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <div className={basketContainer} onClick={() => navigate('/cart')}>
      <div className={basketCart}>
        <Logo title="basket icon" />
        <div className={quantityStyle}>{totalQuantity}</div>
      </div>
    </div>
  )
}
