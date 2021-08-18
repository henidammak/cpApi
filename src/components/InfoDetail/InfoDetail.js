import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import "./InfoDetail.css";
const InfoDetail = ({ match }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      });
  }, [match.params.id]);
  if (loading) {
    return <Spinner animation="border" variant="dark" />;
  }
  return (
    <div className="detail">
      <h1>{user.name} </h1>
      <p>{user.phone}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default InfoDetail;
