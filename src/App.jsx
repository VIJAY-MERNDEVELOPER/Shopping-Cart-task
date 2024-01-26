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
    },
    {
      id: 2,
      description: "Tee Black",
      imageUrl:
        "https://emea.blvck.com/cdn/shop/files/Front_9a7b85b9-764e-4311-8b09-64e70cb28025_3000x.jpg?v=1699631515",
      price: 2000,
      new: false,
    },
    {
      id: 3,
      description: "Gradient Hoodie",
      imageUrl:
        "https://emea.blvck.com/cdn/shop/files/BLACK-NOV0673_3000x.jpg?v=1702055791",
      price: 1800,
      new: true,
    },
    {
      id: 4,
      description: "Black Jacket",

      imageUrl:
        "https://emea.blvck.com/cdn/shop/files/AJ8A3701_3000x.png?v=1695988682",
      price: 1300,
      new: false,
    },
    {
      id: 5,
      description: "Black Christmas Hoodie",

      imageUrl:
        "https://emea.blvck.com/cdn/shop/files/BLACKNOV0921_3000x.png?v=1699542378",
      price: 1400,
      new: true,
    },
    {
      id: 6,
      description: "Black Branded Sweater",

      imageUrl:
        "https://emea.blvck.com/cdn/shop/files/IMG_0789_3000x.png?v=1699461477",
      price: 2100,
      new: false,
    },
    {
      id: 7,
      description: "Black Long Sleeves",

      imageUrl:
        "https://emea.blvck.com/cdn/shop/files/BLACKNOV1138_3000x.png?v=1699900092",
      price: 1900,
      new: true,
    },
    {
      id: 8,
      description: "Tee Grey",

      imageUrl:
        "https://emea.blvck.com/cdn/shop/files/m_01_374b59b6-116e-425e-b724-57a5ee35ea56_3000x.png?v=1700076201",
      price: 2000,
      new: true,
    },
  ];

  const [cart, setCart] = useState([]);
  const [buttonState, setButtonState] = useState(true);

  let addToCart = () => {
    if (buttonState === true) {
      setCart(cart + 1);
      setButtonState(false);
    }
    if (buttonState === false) {
      setCart(cart - 1);
      setButtonState(true);
    }
  };

  return (
    <div>
      <Navbar cartValue={cart.length}></Navbar>
      <Header></Header>
      <div className="container my-3  ">
        <div className="row gap-3 ">
          {productDetails.map((product) => {
            return (
              <Products
                image={product.imageUrl}
                price={product.price}
                description={product.description}
                addCart={addToCart}
                buttonState={buttonState}
                new={product.new}
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
