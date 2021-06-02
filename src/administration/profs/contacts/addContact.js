import React, { useState } from "react";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { addContact } from "../actions/contactAction";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const createContact = (e) => {
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name,
      phone,
      email,
    };
    dispatch(addContact(new_contact));
    history.push("/appIndex");
  };

  return (
    <div className="container card border-0 shadow">
      <div className="card-header">Ajouter un prof</div>
      <div className="card-body">
        <form onSubmit={(e) => createContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Prénom et Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="form-control btn btn-primary" type="submit">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
