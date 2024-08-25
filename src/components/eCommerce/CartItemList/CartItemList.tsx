import CartItem from "../CartItem/CartItem";
import { TProduct } from "../../../types/product";


type CartItemListProps = {
  products: TProduct[];
  changeQuantityHandler: (id:number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};



export const CartItemList = ({products, changeQuantityHandler, removeItemHandler }: CartItemListProps) => {
  const renderList = products.map(product => (
    <CartItem key={product.id} {...product}
    changeQuantityHandler={changeQuantityHandler}
    removeItemHandler = {removeItemHandler}
    />))
  
  return (
    <div>{renderList}</div>
  )
}
