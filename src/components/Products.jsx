import React from "react";
import { useState } from "react";

function Products({ product, cart, setCart }) {
  const [buttonState, setButtonState] = useState(true);
  let addToCart = () => {
    setButtonState(false);
    setCart([...cart, product]);
  };
  let removeFromCart = () => {
    setButtonState(true);
    setCart(
      cart.filter((cartProduct) => {
        return cartProduct.id !== product.id;
      })
    );
  };

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
              className="btn btn-primary text-center"
              onClick={addToCart}
              value={buttonState}
            >
              Add To Cart
            </button>
          ) : (
            <button
              className="btn btn-danger text-center"
              onClick={removeFromCart}
              value={buttonState}
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
