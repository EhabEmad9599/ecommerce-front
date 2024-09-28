
import { CartItemList, CartSubtotalPrice } from "../components/eCommerce"
import Loading from "../components/feedback";
import { useCart } from "../hooks/useCart";


const Cart = () => {

const {loading, error, products, changeQuantityHandler ,removeItemHandler } = useCart();
  return (
    <>
      <h3>Your Cart</h3>
      <Loading status={loading} error={error}>
        {products.length ? (
        <>
          <CartItemList products={products} changeQuantityHandler={changeQuantityHandler} 
          removeItemHandler={removeItemHandler}/>
          <CartSubtotalPrice products={products}/>

        </>
        ): 'Your Cart is empty'}

        
      </Loading>

  </>
  )
}

export default Cart;