import CartItem from "../CartItem/CartItem";
import { TProduct } from "../../../types/product";


type CartItemListProps = {
  products: TProduct[];
  changeQuantityHandler: (id:number, quantity: number) => void;
};



export const CartItemList = ({products, changeQuantityHandler }: CartItemListProps) => {
  const renderList = products.map(product => (
    <CartItem key={product.id} {...product}
    changeQuantityHandler={changeQuantityHandler}
    />))
  
  return (
    <div>{renderList}</div>
  )
}
