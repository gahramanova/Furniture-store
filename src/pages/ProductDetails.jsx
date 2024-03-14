import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import { ProductContext } from "../context/ProductContext";
import slug from "react-slugify";
import { useCart } from "react-use-cart";

const ProductDetails = () => {
  // const [productsData] = useContext(ProductContext);

  const { url } = useParams();
  const { addItem } = useCart();
  const navigate = useNavigate();

  // const dataDetails = productsData.filter((item) => slug(item.title) == url);

  return (
    <>
      {dataDetails.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  {dataDetails[0].images.map((item, c) => (
                    <div className={`carousel-item ${c === 0 ? "active" : ""}`}>
                      <img
                        src={item}
                        style={{ height: "300px", objectFit: "contain" }}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                {dataDetails[0].title}
              </h1>
              <p className="lead">{dataDetails[0].description}</p>
              <h5 className="text fw-bold">{dataDetails[0].price}$</h5>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link onClick={()=>{localStorage.getItem("login")=== "true"?addItem(dataDetails[0]):navigate("/login")}}
                  to={"/cart"}
                  className="btn btn-secondary btn-lg px-4 me-md-2"
                >
                  Add to cart
                </Link>
                <Link
                  to="/products"
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
