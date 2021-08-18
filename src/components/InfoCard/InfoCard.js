import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./InfoCard.css";
const InfoCard = ({ user }) => {
  return (
    <div>
      <Card className="card" style={{ width: "20rem", marginTop: "20px" }}>
        <Card.Body>
          <span className="profile">{user.username[0]}</span>
          <Card.Title>{user.username}</Card.Title>
          <Card.Text>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </Card.Text>
          <Link to={`/Effectif/info/${user.id}`}>
            <Button variant="danger">info</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InfoCard;
