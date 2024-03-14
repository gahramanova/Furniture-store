import React from 'react'

const SingleHomeProducts = ({img,title,category, price,id,rating}) => {
  return (
    <>
    <div className="col col-mb-3 my-3">
    <div className="card">
      <img src={img} className="card-img-middle" alt="..." style={{objectFit: "contain", height: "300px"}}/>
      <div className="card-body">
        <div className='d-flex justify-content-between'>
        <p className="card-title fw-bold">{title}</p> 
        <p>{rating}<i class="fa-solid fa-star" style={{color: "#EABE12"}}></i></p> 
        </div>
        <p style={{color: "#ABA5A5"}} className="card-title">{category}</p>
        <p style={{color: "#F59A57"}} className='card-title fw-bold'>${price}</p>
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

export default SingleHomeProducts