// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import slug from 'react-slugify'
// import { useCart } from 'react-use-cart'

// const SingleProducts = ({img, title, desc, alldata}) => {
//   const { addItem } = useCart();
//   const navigate = useNavigate()
  
//   return (
//     <>   
//     <div className="col-12 col-sm-6 col-md-4 my-3">
//     <div className="card">
//       <img src={img[0]} className="card-img-top" alt="..." style={{objectFit: "contain", height: "300px"}}/>
//       <div className="card-body">
//         <p className="card-title fw-bold">{title.slice(0,10)}...</p>
//         <p>{desc.slice(0,100)}...</p>
//         <Link to={`/products/${slug(title)}`} className="card-text fw-bold btn btn-outline-secondary">
//           View More
//         </Link>
//         <button onClick={()=>{localStorage.getItem("login")=== ("true")?addItem(alldata):navigate("/login")}} className="card-text fw-bold btn btn-outline-dark mx-3">
//           Add to cart
//         </button>
//            </div>
//   </div>
//   </div>
//   </>
//   )
// }


// export default SingleProducts


import React from 'react'

const SingleProducts = ({img,title,price,category,id}) => {
  return (
    <>
    <div className="col-12 col-sm-6 col-md-3 my-3">
    <div className="card">
      <img src={img} className="card-img-top" alt="..." style={{objectFit: "contain", height: "300px"}}/>
      <div className="card-body">
        <p className="card-title fw-bold">{title}</p>
        <p style={{color: "#ABA5A5"}} className="card-title">{category}</p>
        <p style={{color: "#F59A57"}} className='card-title fw-bold'>{price}$</p>
        {/* <Link to={`/products/${slug(title)}`} className="card-text fw-bold btn btn-outline-secondary">
          View More
        </Link> */}
        {/* <button onClick={()=>{localStorage.getItem("login")=== ("true")?addItem(alldata):navigate("/login")}} className="card-text fw-bold btn btn-outline-dark mx-3">
          Add to cart
        </button> */}
           </div>
  </div>
  </div>

    </>
  )
}

export default SingleProducts