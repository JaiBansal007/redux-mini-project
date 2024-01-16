import React from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import {deleteformcart,decrement,calculateprice,addtocart} from '../redux/reducer'


const Cart = () => {

  const {cartitems,subtotal,tax,shipping,total}=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
  console.log(cartitems);
  const decrementkaro=(id)=>{
    dispatch(decrement(id));
    dispatch(calculateprice());
    toast.success("Item decreased");
  }
  const increment=(id)=>{
    dispatch(addtocart(id));
    dispatch(calculateprice());
    toast.success("item added");
  }
  const deletehandler=(id)=>{
    dispatch(deleteformcart(id));
    dispatch(calculateprice());
    toast.success("item removed");
  }
  const Cartitem=({
    imgsrc,
    name,
    price,
    quantity,
    decrement,
    increment,
    deletehandler,
    id,
    })=>(
      <div className="cartitems" key={id}>
        <img src={imgsrc} alt="item"/>
        <div className="midcart">
          <p>{name}</p>
          <h4>${price}</h4>
        </div>
        
        <div className="button">
          <button onClick={()=>{
            decrement(id)
          }}>-</button>
          <p>{quantity}</p>
          <button onClick={()=> increment({id,name,price,quantity,imgsrc})}>+</button>
        </div>
    
        <MdDelete onClick={()=>deletehandler(id)}/>
      </div>
    )
  return (
    <>
      <div className="cart">
        <main>{cartitems.length>0?cartitems.map((i)=>(
            <Cartitem
              imgsrc={i.imgsrc}
              name={i.name}
              price={i.price}
              id={i.id}
              key={i.id}
              qty={i.quantity}
              decrement={decrementkaro}
              increment={increment}
              deletehandler={deletehandler}
            />
          )):<h1>No item in Cart</h1>}
        </main>
        <aside>
          <p>Subtotal : ${subtotal}</p>
          <p>Shipping : ${shipping}</p>
          <p>Tax : ${tax}</p>
          <h5>Total: ${total}</h5>
        </aside>
      </div>
    </>
  )
}
export default Cart
