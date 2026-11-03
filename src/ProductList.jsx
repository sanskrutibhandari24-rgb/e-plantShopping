import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 25,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 30,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Succulents",
    price: 15,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 4,
    name: "Jade Plant",
    category: "Succulents",
    price: 20,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 5,
    name: "Monstera",
    category: "Indoor Plants",
    price: 40,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
    id: 6,
    name: "Areca Palm",
    category: "Outdoor Plants",
    price: 35,
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="page-container">
      <h1>Our Plants</h1>
      <p>Bring nature home with our beautiful plant collection.</p>

      {categories.map((category) => (
        <section key={category}>
          <h2 className="category-title">{category}</h2>

          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>Price: ${product.price}</p>

                  <button onClick={() => dispatch(addItem(product))}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
