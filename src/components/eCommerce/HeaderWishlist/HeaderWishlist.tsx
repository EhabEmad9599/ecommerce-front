import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import Wishlist from "../../../assets/wishlist.svg?react";
import styles from './styles.module.css';

const {container, totalNum, pumpAnimate, iconWrapper} = styles;

export const HeaderWishlist = () => {

  const navigate = useNavigate();

  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector((state) => state.wishlist.itemsId);
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
        <span> | Wishlist</span>
        <Wishlist title="Wishlist icon" />
        {totalQuantity.length > 0 && (
          <div className={quantityStyle}>{totalQuantity.length}</div>
        )}
      </div>
    </div>
  )
}
