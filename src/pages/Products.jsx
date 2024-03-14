// import React, { useContext } from 'react'
// import SingleProducts from '../components/SingleProducts'
// import { ProductContext } from '../context/ProductContext'

// const Products = () => {
//   const productsData = useContext(ProductContext)
//   return (
//     <div className='container'>
//         <div className='row'>
//            {productsData.map(item=>(
//             <SingleProducts 
//             key={item.id} 
//             id={item.id} 
//             title={item.title} 
//             price={item.price} 
//             img={item.img} 
//             desc={item.description}
//             alldata={item}/>
            
//            ))}
            
//         </div>
//     </div>
//   )
// }

// export default Products

import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import SingleProducts from '../components/SingleProducts'



const Products = () => {
  const [productData] = useContext(ProductContext)
  return (
    <>
    <div className='container'>
      <div className='row'>
        {productData.map(item=> (
          <SingleProducts
          id={item.id}
          title={item.title}
          img={item.img}
          price = {item.price}
          category={item.category}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Products