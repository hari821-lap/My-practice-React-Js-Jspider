// src/pages/RestaurantPage.js
import React from "react";
import { useParams } from "react-router-dom";
import restaurants from "../../data";
import { useCart } from "./CardContext";
import Button from "react-bootstrap/Button";

const RestaurantPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const rest = restaurants.find(r => String(r.id) === id);
  if (!rest) return <div>Restaurant not found</div>;

  return (
    <div>
      <h2>{rest.name}</h2>
      <p className="text-muted">{rest.cuisine.join(", ")}</p>
      <img src={rest.image} alt={rest.name} style={{ maxWidth: 600, width: "100%", objectFit: "cover" }} />
      <h4 className="mt-3">Menu</h4>
      <ul>
        {rest.menu.map((m) => (
          <li key={m.id} className="d-flex justify-content-between align-items-center mb-2">
            <div>
              <strong>{m.name}</strong>
              <div className="text-muted small">{m.desc}</div>
            </div>
            <div>
              <span className="me-2">₹{m.price}</span>
              <Button size="sm" onClick={() => addToCart({ id: `${rest.id}-${m.id}`, name: m.name, price: m.price })}>Add</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantPage;
