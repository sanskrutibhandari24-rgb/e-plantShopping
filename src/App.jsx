import React, { useState } from "react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>

        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("products")}>Plants</button>
          <button onClick={() => setPage("about")}>About Us</button>
          <button onClick={() => setPage("cart")}>Shopping Cart</button>
        </div>
      </nav>

      {page === "home" && (
        <section className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Bring Nature Home. Grow Happiness.</p>
            <button onClick={() => setPage("products")}>
              Get Started
            </button>
          </div>
        </section>
      )}

      {page === "products" && <ProductList />}

      {page === "cart" && <CartItem />}

      {page === "about" && <AboutUs />}
    </>
  );
}

export default App;
