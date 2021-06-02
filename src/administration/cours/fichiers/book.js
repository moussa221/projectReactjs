import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const Book = ({
  id,
  bookname,
  author,
  price,
  quantity,
  date,
  handleRemoveBook,
}) => {
  const history = useHistory();
  return (
    <Card style={{ width: "18rem" }} className="book">
      <Card.Body>
        {/* <Card.Title className="book-title text-center">
          Détails du cours
        </Card.Title> */}
        <hr />
        <div className="card book-details">
          <div>
            <strong>Professeur: </strong>
            {author}
          </div>
          <div>
            <strong>Durée:</strong> {quantity} heures
          </div>
          <div>
            <a href="#">
              <strong>Document(s):</strong> {price}{" "}
            </a>
          </div>
          <div>
            <strong>Domain:</strong> {bookname}
          </div>
          <div>
            <strong>Date:</strong> {new Date(date).toDateString()}
          </div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Modifier
        </Button>{" "}
        <Button variant="danger" onClick={() => handleRemoveBook(id)}>
          Supprimer
        </Button>
        <Button variant="warning m-2">Archiver</Button>
      </Card.Body>
    </Card>
  );
};

export default Book;
