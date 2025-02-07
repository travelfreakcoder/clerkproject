import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'

const initialState = {
  cart:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
        console.log(action);
        
        toast.success("Item added to cart")
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const existingProduct=state.cart.find((item)=>item.id===action.payload.id)

      if(existingProduct){
        existingProduct.qty+=1
      }
      else{
        state.cart.push({...action.payload,qty:1})
      }
    },
    removeFromCart: (state,action) => {
        toast.success("Item removed from cart")
      state.cart=state.cart.filter((item)=>item.id!=action.payload)
    },
    increaseQty:(state,action)=>{
        const productIncrease=state.cart.find((item)=>item.id==action.payload)
        if(productIncrease){
            productIncrease.qty+=1
        }
    },
    decreaseQty:(state,action)=>{
        const productDecrease=state.cart.find((item)=>item.id==action.payload)
        if(productDecrease){
            productDecrease.qty=Math.max(productDecrease.qty-1,1)
        }
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart,increaseQty,decreaseQty } = cartSlice.actions

export default cartSlice.reducer