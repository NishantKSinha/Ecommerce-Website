import React, { useContext } from 'react'
import "./CartItems.css"
import remove_icon from "../../assets/remove.webp"
import { ShopContext } from '../../Context/ShopContext'
const CartItems = () => {
    const{gettotalcartAmount,all_product,cartItems,removeFromcart}=useContext(ShopContext);

  return (
    <div className='cartitems'>
           <div className="cartitems-format-main">
               <p> Products </p>
               <p>Title</p>
               <p>Price</p>
               <p>Quantity</p>
               <p>Totals</p>
               <p>Remove</p>
           </div>
           <hr />
           {all_product.map((e)=>{
             if(cartItems[e.id] > 0){
                  return <div>
                  <div className="cartitems-format cartitems-format-main">
                      <img src={e.image} alt=""height="150px" className='carticon-product-icon'/>
                      <p>{e.name}</p>
                      <p>${e.new_price}</p>
                      <button className='cartitems-quantity'>
                        {cartItems[e.id]}
                      </button>
                      <p>${e.new_price*cartItems[e.id]}</p>
                      <img src={remove_icon} alt="" height="20px"
                       onClick={()=>removeFromcart(e.id)}/>
                  </div>
                 
             </div>
             }
             return null;
           })}
           <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-items">
                            <p>Subtotal</p>
                            <p>${gettotalcartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                    <div className="cartitems-total-items">
                            <p>Total</p>
                            <p>${gettotalcartAmount()}</p>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
           </div>
           <div className="cartitems-promocode">
            <p>If you have a promo code ,Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='promocode' />
                <button>Submit</button>
            </div>
           </div>
           </div>
    </div>
  )
}

export default CartItems