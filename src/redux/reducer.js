import { createAction, createReducer } from "@reduxjs/toolkit";
const intial={
    cartitems:[],
    subtotal:0,
    shipping:0,
    tax:0,
    total:0,
}
const addtocart=createAction('/addtocart');
const decrement=createAction('/decrement');
const deleteformcart=createAction('/deleteformcart');
const calculateprice=createAction('/calculateprice');

export const cartreducer=createReducer(intial,(builder)=>{
    builder
    .addCase(addtocart,(state,action)=>{
        const item=action.payload;
        const isitemexist=state.cartitems.find((i)=>i.id===item.id);

        if(isitemexist){
            state.cartitems.forEach((i)=>{
                if(i.id===item.id){
                    i.quantity+=1;
                }
            })
        }else{
            state.cartitems.push(item);
        }
    })

    .addCase(decrement,(state,action)=>{
        const item=state.cartitems.find((i)=>i.id===action.payload);

        if(item.quantity>1){
            state.cartitems.forEach((i)=>{
                if(i.id===item.id){
                    i.quantity-=1;
                }
            })
        }
    })

    .addCase(deleteformcart,(state,action)=>{
        state.cartitems=state.cartitems.filter((i)=>i.id!==action.payload);
    })

    .addCase(calculateprice,(state)=>{
        let sum=0;
        state.cartitems.forEach((i)=>sum+=(i.price*i.quantity));
        state.subtotal=sum;
        state.shipping=state.subtotal>2000?0:200;
        state.tax=+(state.subtotal*0.18).toFixed();
        state.total=state.subtotal+state.shipping+state.tax;        
    })
})