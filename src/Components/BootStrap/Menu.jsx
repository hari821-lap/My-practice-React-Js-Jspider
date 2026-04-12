// src/pages/Menu.js
import React from "react";
import { Row, Col } from "react-bootstrap";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../../data";
import { useCart } from "./CardContext";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const { addToCart } = useCart();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const q = params.get("search")?.toLowerCase() || "";

  const filtered = restaurants.filter(r =>
    r.name.toLowerCase().includes(q) ||
    r.cuisine.join(" ").toLowerCase().includes(q)
  );

  return (
    <div>
      <h2>Restaurants</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {filtered.map(r => (
          <Col key={r.id}>
            <RestaurantCard r={r} onAdd={(r) => addToCart({ id: r.id, name: r.name, price: r.avgPrice })} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Menu;
