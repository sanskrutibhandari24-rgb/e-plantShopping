
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    name: "Monstera",
    category: "Indoor Plants",
    price: 40,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
    id: 4,
    name: "Areca Palm",
    category: "Indoor Plants",
    price: 35,
    image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
  },
  {
    id: 5,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 32,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 6,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 28,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 7,
    name: "Aloe Vera",
    category: "Succulents",
    price: 15,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 8,
    name: "Jade Plant",
    category: "Succulents",
    price: 20,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 9,
    name: "Echeveria",
    category: "Succulents",
    price: 18,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a"
  },
  {
    id: 10,
    name: "Haworthia",
    category: "Succulents",
    price: 17,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 11,
    name: "Cactus",
    category: "Succulents",
    price: 12,
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a"
  },
  {
    id: 12,
    name: "Burro's Tail",
    category: "Succulents",
    price: 22,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    id: 13,
    name: "Rose Plant",
    category: "Outdoor Plants",
    price: 25,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  },
  {
    id: 14,
    name: "Hibiscus",
    category: "Outdoor Plants",
    price: 28,
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321"
  },
  {
    id: 15,
    name: "Bougainvillea",
    category: "Outdoor Plants",
    price: 30,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  },
  {
    id: 16,
    name: "Jasmine",
    category: "Outdoor Plants",
    price: 22,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  },
  {
    id: 17,
    name: "Marigold",
    category: "Outdoor Plants",
    price: 15,
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321"
  },
  {
    id: 18,
    name: "Lavender",
    category: "Outdoor Plants",
    price: 24,
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec"
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState([]);

  const categories = [...new Set(products.map((product) => product.category))];

  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedItems((previous) => [...previous, product.id]);
  };

  return (
    <div className="page-container">
      <div className="navbar">
        <h2>🌿 Paradise Nursery</h2>
        <h3>🛒 Cart ({totalCartQuantity})</h3>
      </div>

      <h1>Our Plants</h1>
      <p>Bring nature home with our beautiful plant collection.</p>

      {categories.map((category) => (
        <section key={category}>
          <h2 className="category-title">{category}</h2>

          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => {
                const isAdded = addedItems.includes(product.id);

                return (
                  <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>

                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={isAdded}
                    >
                      {isAdded ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
