import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  return (
    <nav
      class="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div class="container-fluid ">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    All products
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Popular items
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="nav justify-content-center">
            <span class="navbar-brand text-center" href="/">
              Extremes
            </span>
          </div>

          <form className="d-flex mx-4">
            <button className="btn  border-white  text-white gap-1">
              <FontAwesomeIcon
                icon={faShoppingCart}
                size="xl"
                color="white"
              ></FontAwesomeIcon>{" "}
              Cart
              <span class="badge bg-dark text-white ms-2 rounded-pill">
                {" "}
                {props.cartValue}
              </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
