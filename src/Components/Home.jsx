import React from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

const img1="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQek9grTjIaQF3TosKNNTwmX2j1wwJGCZA3ztjp9lmZBdJLVfZP0fowtuLaMRKPVbgPqDvum_TMhpV4jMYLfEsKCC1cxqwP8xNk9k53wbC7waE2QsZDrBS0"

const img2="https://rukminim2.flixcart.com/image/612/612/kxhvf680/watch/o/f/r/1-tyd426-new-silicone-digital-rectangle-and-square-trandyaddy-original-imag9xvgv3rucng5.jpeg?q=70"

const Home = () => {
  
  const ProductList=[{
    name:"Macbook",
    price:12000,
    imgsrc:img1,
    id:"jfdkjasnfjsnkdj"
  },{
    name:"Watch",
    price:520,
    imgsrc:img2,
    id:"fjdsljlksdasda"
  }]
  const dispatch=useDispatch();
  const addtocart=(options)=>{
    dispatch({type:"addtocart",payload:options});
    dispatch({type:"calculateprice"});
    toast.success('Add to cart');
  }
  const Card=({id,name,price,imgsrc,handler})=>(
    <div className='cardproduct' key={id}>
      <img src={imgsrc} alt={name} />
      
      <p>{name}</p>
      <h4>${price}</h4>
      <button onClick={()=>handler({id,name,price,quantity:1,imgsrc})}> Add to Cart</button>
    </div>
  )
  return (
    <>
    <div className='home'>
    {ProductList.map((i)=>(
      <Card
      key={i.id}
      name={i.name}
      price={i.price}
      imgsrc={i.imgsrc}
      id={i.id}
      handler={addtocart}
      />
    ))} 
    </div>
    </>
  )
  
}

export default Home
