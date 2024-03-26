import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
// import slug from "react-slugify";
import { useCart } from "react-use-cart";
import { CiDiscount1 } from "react-icons/ci";

const ProductDetails = () => {
  const [productsData] = useContext(ProductContext);

  const { url } = useParams();
  const { addItem } = useCart();
  const navigate = useNavigate();

  const dataDetails = productsData.filter(p=>p.id == url);

  return (
    <>
      {dataDetails.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
<>
<section className="product-details">
          <div className="container mx-5 my-5">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col-mb-3">
                <img src={dataDetails[0].img[0]} style={{width: "100%"}}/>
              </div>
              <div className="col-mb-3">
                <img src={dataDetails[0].img[1]} style={{width: "100%"}}/>
              </div>
              <div className="col-mb-3">
                <img src={dataDetails[0].img[2]} style={{width: "100%"}}/>
              </div>
              <div className="col-mb-3">
                <img src={dataDetails[0].img[3]} style={{width: "100%"}}/>
              </div>
            </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <h2 className="fw-bold">{dataDetails[0].title}</h2>
              <h6 className="mt-5">SKU: <span style={{color: "#747474"}}>{dataDetails[0].sku}</span></h6>
              
              <div className="mt-5 text d-flex">
              <div className="discount d-flex align-items-center"><CiDiscount1 /></div>
              <div className="">
              <h5 className="fw-bold">Soft Edge Collection</h5>
              <p>Hurry and get discounts up to 20%</p>
              </div>
              </div>
              <p className="mt-4" style={{color: "#747474"}}>{dataDetails[0].description}</p>
              <h1 className="fw-bold mt-4" style={{color:"#F59A57"}}>{dataDetails[0].price}$</h1>
             <div>
             <Link to={"/cart"}><button className="addtocart mt-4">Add to Cart</button></Link>
              <Link to={"/products"}><button className="goback mt-4">Go back</button></Link>
              
             </div>
            </div>
          </div>
        </div>
        </section>
        <section className="product-details-2 mx-5 my-5">
          <h3 className="fw-bold">Maybe Interested</h3>
          
        </section>
</>




        // <div className="container col-xxl-8 px-4 py-5">
        //   <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        //     <div className="col-10 col-sm-8 col-lg-6">
        //       <div id="carouselExample" className="carousel slide">
        //         <div className="carousel-inner">
        //         </div>
        //         <button
        //           className="carousel-control-prev"
        //           type="button"
        //           data-bs-target="#carouselExample"
        //           data-bs-slide="prev"
        //         >
        //           <span
        //             className="carousel-control-prev-icon"
        //             aria-hidden="true"
        //           />
        //           <span className="visually-hidden">Previous</span>
        //         </button>
        //         <button
        //           className="carousel-control-next"
        //           type="button"
        //           data-bs-target="#carouselExample"
        //           data-bs-slide="next"
        //         >
        //           <span
        //             className="carousel-control-next-icon"
        //             aria-hidden="true"
        //           />
        //           <span className="visually-hidden">Next</span>
        //         </button>
        //       </div>
        //     </div>

        //     <div className="col-lg-6">
        //       <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
        //         {dataDetails[0].title}
        //       </h1>
        //       <p className="lead">{dataDetails[0].description}</p>
        //       <h5 className="text fw-bold">{dataDetails[0].price}$</h5>
        //       <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        //         <Link onClick={()=>{localStorage.getItem("login")=== "true"?addItem(dataDetails[0]):navigate("/login")}}
        //           to={"/cart"}
        //           className="btn btn-secondary btn-lg px-4 me-md-2"
        //         >
        //           Add to cart
        //         </Link>
        //         <Link
        //           to="/products"
        //           type="button"
        //           className="btn btn-outline-secondary btn-lg px-4"
        //         >
        //           Back
        //         </Link>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      )}
    </>
  );
};

export default ProductDetails;
