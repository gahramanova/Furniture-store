import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { useCart } from 'react-use-cart';

const Cart = () => {
    const { 
        items, 
        updateItemQuantity, 
        removeItem,
        isEmpty,
        cartTotal } = useCart();
  return (
   isEmpty?<div className='d-flex justify-content-center'><img src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png" width={"500px"}></img></div>: 
   <> <div className='container '>
   <div className='row my-5'>
       <div className='col-12 '>
          {items.map(item=> (
            <div className="card my-4" >
            <div className='d-flex'>
            <div className='d-flex align-items-center'>
            <img src={item.images[0]} style={{width: "150px", padding: "10px"}} className="card-img-top" alt="..." />
            </div>
           <div className='d-flex'>
           <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
            </div>
           </div>
            <div className='d-flex align-items-center '>
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-danger mx-3'>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn btn-success mx-3'>+</button>
            <p>{item.price*item.quantity}$</p>
            </div>
            <div  className='d-flex mx-4 align-items-center'>
                <button  onClick={() => removeItem(item.id)} className='btn btn-dark'><MdDeleteOutline /></button>
            </div>
            </div>
            </div>
          ))}

       </div>
   </div>
</div>
<h5 className='mx-4'>Total price: {cartTotal}$</h5>
</>
  )
}

export default Cart