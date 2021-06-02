import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const BookForm = (props) => {
  const [book, setBook] = useState(() => {
    return {
      bookname: props.book ? props.book.bookname : "",
      author: props.book ? props.book.author : "",
      quantity: props.book ? props.book.quantity : "",
      // price: props.book ? props.book.price : "",
      date: props.book ? props.book.date : "",
    };
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { bookname, author, quantity } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [bookname, author, quantity];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        // price,
        quantity,
        date: new Date(),
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = "Tous les champs sont requis.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      // case "price":
      //   if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
      //     setBook((prevState) => ({
      //       ...prevState,
      //       [name]: value,
      //     }));
      //   }
      //   break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  const handleChange = ({ target: { files } }) => {
    console.log(files[0]);
    let data = new FormData();
    data.append("fichier", files[0]);

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
      },
    };

    axios.post("http:localhost:3000/add", data, options).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="container card mainMorm">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Cours</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="Intitulé du cours..."
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Professeur</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Nom du professeur..."
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Durée</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Durée du cours..."
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Documents</Form.Label>
          <Form.Control
            className="input-control"
            type="file"
            name="price"
            // value={price}
            placeholder="Ajouter votre cours..."
            onChange={handleChange}
            // onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Envoyer
        </Button>
      </Form>
      <br />
    </div>
  );
};

export default BookForm;
