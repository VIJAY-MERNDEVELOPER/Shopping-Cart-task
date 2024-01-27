// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  let productDetails = [
    {
      id: 1,
      description: "PSG Hoodie",
      imageUrl:
        "https://emea.blvck.com/cdn/shop/files/front_21ef7d1e-0856-4d73-9429-5c6acc2bd594_3000x.jpg?v=1699631390",
      price: 1200,
      new: true,
      // buttonState: true,
    },
    {
      id: 2,
      description: "Tee Black",
      imageUrl:
        "https://emea.blvck.com/cdn/shop/files/Front_9a7b85b9-764e-4311-8b09-64e70cb28025_3000x.jpg?v=1699631515",
      price: 2000,
      new: false,
      // buttonState: true,
    },
    {
      id: 3,
      description: "Gradient Hoodie",
      imageUrl:
        "https://emea.blvck.com/cdn/shop/files/BLACK-NOV0673_3000x.jpg?v=1702055791",
      price: 1800,
      new: true,
      // buttonState: true,
    },
    {
      id: 4,
      description: "Black Jacket",

      imageUrl:
        "https://emea.blvck.com/cdn/shop/files/AJ8A3701_3000x.png?v=1695988682",
      price: 1300,
      new: false,
      // buttonState: true,
    },
    {
      id: 5,
      description: "Black Christmas Hoodie",

      imageUrl:
        "https://emea.blvck.com/cdn/shop/files/BLACKNOV0921_3000x.png?v=1699542378",
      price: 1400,
      new: true,
      // buttonState: true,
    },
    {
      id: 6,
      description: "Black Branded Sweater",

      imageUrl:
        "https://emea.blvck.com/cdn/shop/files/IMG_0789_3000x.png?v=1699461477",
      price: 2100,
      new: false,
      // buttonState: true,
    },
    {
      id: 7,
      description: "Black Long Sleeves",

      imageUrl:
        "https://emea.blvck.com/cdn/shop/files/BLACKNOV1138_3000x.png?v=1699900092",
      price: 1900,
      new: true,
      // buttonState: true,
    },
    {
      id: 8,
      description: "Tee Grey",

      imageUrl:
        "https://emea.blvck.com/cdn/shop/files/m_01_374b59b6-116e-425e-b724-57a5ee35ea56_3000x.png?v=1700076201",
      price: 2000,
      new: true,
      // buttonState: true,
    },
  ];

  const [cart, setCart] = useState([]);
  const [buttonState, setButtonState] = useState(true);

  let addToCart = (product, buttonState, cart) => {
    if (buttonState === true) {
      console.log(cart);
      setCart([...cart, product]);
      setButtonState(!buttonState);
    }
    if (cart.id === product.id) {
      setButtonState(!buttonState);
    }
  };

  let removeFromCart = (product, buttonState, cart) => {
    if (buttonState === false) {
      setCart(
        cart.filter((cartProduct) => {
          return cartProduct.id !== product.id;
        })
      );

      setButtonState(!buttonState);
    }
  };

  return (
    <div>
      <Navbar cartValue={cart.length}></Navbar>
      <Header></Header>
      <div className="container my-3  ">
        <div className="row gap-3 ">
          {productDetails.map((product, idx) => {
            return (
              <Products
                key={idx}
                product={product}
                addToCart={addToCart}
                buttonState={buttonState}
                removeFromCart={removeFromCart}
                cart={cart}
              ></Products>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
