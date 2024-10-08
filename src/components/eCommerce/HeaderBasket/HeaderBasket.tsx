import { useEffect, useState } from "react";
import Logo from "../../../assets/svg/cart.svg?react";

import { getCarTotalQuantitySelector } from "../../../store/Cart/cartSlice";
import { useAppSelector } from "../../../store/hooks";
import styles from './styles.module.css';
import { useNavigate } from "react-router-dom";
const {container, totalNum, pumpAnimate, iconWrapper} = styles;

export const HeaderBasket = () => {

  const navigate = useNavigate();

  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getCarTotalQuantitySelector);
  const quantityStyle = `${totalNum} ${
    isAnimate ? pumpAnimate : ""
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
    <div className={container} onClick={() => navigate('/cart')}>
      <div className={iconWrapper}>
        <span> | Cart</span>
        <Logo title="basket icon" />
        {totalQuantity > 0 && (
          <div className={quantityStyle}>{totalQuantity}</div>
        )}
      </div>
    </div>
  )
}
