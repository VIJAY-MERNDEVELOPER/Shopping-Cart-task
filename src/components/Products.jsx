import React from "react";

function Products(props) {
  return (
    <div
      class="card "
      style={{ width: "18rem", backgroundColor: "rgb(183,183,183)" }}
    >
      <div className="row justify-content-end mx-1 mt-1">
        <span class="badge text-bg-info col-2 ">New</span>
      </div>
      <div className="card-body">
        <img src={props.image} class="card-img-top" alt="..." />

        <h5 class="card-title text-center my-3 mt-4">{props.description}</h5>

        <h6 className="text-center text-black my-3 mt-4">Rs.{props.price}</h6>

        <div className=" text-center mt-4 my-3">
          {props.buttonState ? (
            <button
              href="/"
              class="btn btn-primary text-center"
              onClick={props.addCart}
            >
              Add To Cart
            </button>
          ) : (
            <button
              href="/"
              class="btn btn-danger text-center"
              onClick={props.addCart}
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
