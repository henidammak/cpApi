import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import InfoCard from "../InfoCard/InfoCard";
import "./InfoList.css";

const InfoList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (loading) {
    return <Spinner animation="border" variant="dark" />;
  }
  return (
    <div id="bgcard" className="d-flex justify-content-around flex-wrap">
      {users.map((user) => (
        <InfoCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default InfoList;
