
import React, { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [page, setPage] = useState("home");

  const handleHome = () => {
    setPage("home");
    setShowProductList(false);
  };

  const handleGetStarted = () => {
    setShowProductList(true);
    setPage("products");
  };

  const handleProducts = () => {
    setShowProductList(true);
    setPage("products");
  };

  const handleAbout = () => {
    setShowProductList(false);
    setPage("about");
  };

  const handleCart = () => {
    setShowProductList(false);
    setPage("cart");
  };

  return (
    <>
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>

        <div>
          <button onClick={handleHome}>Home</button>
          <button onClick={handleProducts}>Plants</button>
          <button onClick={handleAbout}>About Us</button>
          <button onClick={handleCart}>Shopping Cart</button>
        </div>
      </nav>

      {page === "home" && (
        <section className="background-image">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Bring Nature Home. Grow Happiness.</p>
            <button onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </section>
      )}

      {showProductList && page === "products" && <ProductList />}

      {page === "cart" && (
  <CartItem onContinueShopping={() => setPage("products")} />
)}
      {page === "about" && <AboutUs />}
    </>
  );
}

export default App;
