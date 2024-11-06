import { useEffect, useState } from "react";
import styles from './styles.module.css';
import { useNavigate } from "react-router-dom";

type HeaderCounterProps = {totalQuantity: number, svgIcon: React.ReactNode, page: string}

const {container, totalNum, pumpAnimate, iconWrapper} = styles;

export const HeaderCounter = ({totalQuantity, svgIcon, page}: HeaderCounterProps) => {

  const navigate = useNavigate();

  const [isAnimate, setIsAnimate] = useState(false);
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
    <div className={container} onClick={() => navigate(page)}>
      <div className={iconWrapper}>
        <span> | Cart</span>
        {svgIcon}
        {totalQuantity > 0 && (
          <div className={quantityStyle}>{totalQuantity}</div>
        )}
      </div>
    </div>
  )
}
