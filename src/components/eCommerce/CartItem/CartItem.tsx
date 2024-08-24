import { Form, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "../../../types/product";
import { memo } from "react";


const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;

  type CartItemProps = TProduct & {changeQuantityHandler: (id:number, quantity: number) => void};

const CartItem = memo(({id, title, img, price, max, quantity, changeQuantityHandler}: CartItemProps) => {

      // render option list
      const renderOptions = Array(max)
      .fill(0)
      .map((_, idx) => {
        const quantity = ++idx;
        return (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        );
      });

      const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const quantity = +event.target.value;
        changeQuantityHandler(id, quantity);
      };



  return (
    <div className={cartItem}>
      <div className={product}>
        <div className={productImg}>
          <img
            src={img}
            alt={title}
          />
        </div>
        <div className={productInfo}>
          <h2>{title}</h2>
          <h3>{Number(price).toFixed(2)} EGP</h3>

        </div>
      </div>

      <div className={cartItemSelection}>
        <span className="d-block mb-1">Quantity</span>
        <Form.Select value={quantity} onChange={changeQuantity}>
          {renderOptions}
        </Form.Select>
        <Button
            variant="secondary"
            style={{ color: "white", width:'100px' }}
            className="mt-4"
          >
            Remove
          </Button>
      </div>
    </div>
  );
});

export default CartItem;