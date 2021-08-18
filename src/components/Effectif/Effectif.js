import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Effectif.css";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addJoueuse, deleteJoueuse } from "../../redux/Actions/ActionCard";

const Effectif = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");

  const [num, setNum] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addJoueuse({ id: Math.random, name, num, src: url }));
    setName("");
    setNum("");

    setUrl("");
  };
  const joueuses = useSelector((state) => state.CardReducer.joueuses);
  return (
    <div className="bgeffectif">
      <h1 className="titre">Effectif Féminines Paris Saint-Germain - PSG</h1>
      <div className="d-flex justify-content-around  flex-wrap ">
        {joueuses.map((el) => (
          <div>
            <Card.Img className="imgeff" src={el.src} />{" "}
            <Card.Title className="nameeff">{el.name}</Card.Title>
            <Card.Text className="numeff">{el.num}</Card.Text>{" "}
            <div>
              <Button
                className="delete"
                onClick={() => dispatch(deleteJoueuse(el.id))}
              >
                Supp
              </Button>
            </div>
          </div>
        ))}
        <Link to={`/Effectif/info`}>
          <Button className="voirplus">Voir plus</Button>
        </Link>

        <div className="bouton3">
          <Link to={`/Effectif`}>
            <Button className="ajouter" onClick={handleShow}>
              Ajouter
            </Button>
          </Link>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="Case">
              <Modal.Title>Add Joueuse :</Modal.Title>
            </Modal.Header>
            <Modal.Body className="Case">
              <form onSubmit={(e) => e.preventDefault()}>
                name:
                <input
                  id="case"
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                num:
                <input
                  id="case"
                  type="number"
                  className="form-control"
                  onChange={(e) => setNum(e.target.value)}
                  value={num}
                />
                src:
                <input
                  id="case"
                  type="url"
                  className="form-control"
                  onChange={(e) => setUrl(e.target.value)}
                  value={url}
                />
              </form>
            </Modal.Body>
            <Modal.Footer className="Case">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="danger"
                type="submit"
                onClick={() => {
                  add();
                  handleClose();
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Effectif;
