import CartItem from "../CartItem/CartItem";
import { TProduct } from "../../../types/product";


type CartItemListProps = {products: TProduct[]};

CartItem

export const CartItemList = ({products}: CartItemListProps) => {
  const renderList = products.map(product => (<CartItem key={product.id} {...product}/>))
  
  return (
    <div>{renderList}</div>
  )
}
