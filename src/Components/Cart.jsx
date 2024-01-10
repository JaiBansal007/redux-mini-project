import React from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";

const img1="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQek9grTjIaQF3TosKNNTwmX2j1wwJGCZA3ztjp9lmZBdJLVfZP0fowtuLaMRKPVbgPqDvum_TMhpV4jMYLfEsKCC1cxqwP8xNk9k53wbC7waE2QsZDrBS0"
const Cart = () => {
  const Itemlist=[{
    name:'macbook',
    imgsrc:img1,
    price:12000,
    id:"ejjhwhjwlekjlkwqjelkjw",
    qty:1,
  }]
  const decrement=(id)=>{
    console.log(id);
    toast.success("decrement ho gya");
  }
  const increment=(id)=>{
    console.log(id);
    toast.success("incrememt  ho gya");
  }
  const deletehandler=(id)=>{
    console.log(id);
    toast.success("delete ho gya");
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
        <article>{quantity}</article>
        <button onClick={()=>{
          increment(id)
        }}>+</button>
      </div>
  
      <MdDelete onClick={()=>{
        deletehandler(id)
      }}/>
    </div>
  )
  return (
    <>
      <div className="cart">
        <main>{Itemlist.map((i)=>(
            <Cartitem
              name={i.name}
              imgsrc={i.imgsrc}
              price={i.price}
              id={i.id}
              key={i.id}
              qty={i.quantity}
              decrement={decrement}
              increment={increment}
              deletehandler={deletehandler}
            />
          ))}
        </main>
        <aside>
          <p>Subtotal : ${1200}</p>
          <p>Shipping : ${200}</p>
          <p>Tax : ${90}</p>
          <h5>Total: ${1490}</h5>
        </aside>

      </div>
    </>
  )
}
export default Cart
