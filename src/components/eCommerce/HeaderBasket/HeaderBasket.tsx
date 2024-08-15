import Logo from "../../../assets/svg/cart.svg?react";
import { getCarTotalQuantitySelector } from "../../../store/Cart/cartSlice";
import { useAppSelector } from "../../../store/hooks";
import styles from './styles.module.css';
const {basketContainer, basketQuantity} = styles;

export const HeaderBasket = () => {

  const totalQuantity = useAppSelector(getCarTotalQuantitySelector);

  return (
    <div className={basketContainer}>
      <Logo title="basket icon"/>
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  )
}
