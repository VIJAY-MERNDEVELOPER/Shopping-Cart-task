import React from "react";

function Products({ product, addToCart, buttonState, removeFromCart, cart }) {
  return (
    <div
      className="card col-lg-4"
      style={{ width: "18rem", backgroundColor: "rgb(183,183,183)" }}
    >
      {product.new ? (
        <div className="row justify-content-end mx-1 mt-1">
          <span className="badge text-bg-info col-2 ">New</span>
        </div>
      ) : (
        <div className="row justify-content-end mx-1 mt-4"></div>
      )}

      <div className="card-body">
        <img src={product.imageUrl} className="card-img-top" alt="..." />

        <h5 className="card-title text-center my-3 mt-4">
          {product.description}
        </h5>

        <h6 className="text-center text-black my-3 mt-4">Rs.{product.price}</h6>

        <div className=" text-center mt-4 my-3">
          {buttonState ? (
            <button
              href="/"
              className="btn btn-primary text-center"
              value={product.id}
              onClick={() => addToCart(product, buttonState, cart)}
            >
              Add To Cart
            </button>
          ) : (
            <button
              href="/"
              className="btn btn-danger text-center"
              value={product.id}
              onClick={() => removeFromCart(product, buttonState, cart)}
            >
              Remove From Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
