// src/components/RestaurantCard.js
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const RestaurantCard = ({ r, onAdd }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={r.image} style={{ height: 160, objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{r.name}</Card.Title>
        <Card.Text className="text-muted small mb-2">{r.cuisine.join(", ")}</Card.Text>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <Link to={`/restaurant/${r.id}`} className="btn btn-link p-0">View</Link>
          <div>
            <Button size="sm" onClick={() => onAdd(r)}>Add</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RestaurantCard;
