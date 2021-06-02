import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import shortid from "shortid";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../actions/contactAction";

const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (contact !== null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
    dispatch(getContact(id));
  }, [contact, dispatch, id]);

  const onUpdateContact = (e) => {
    e.preventDefault();
    const update_contact = Object.assign(contact, {
      name: name,
      phone: phone,
      email: email,
    });
    dispatch(updateContact(update_contact));
    history.push("/appIndex");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Modifier l'utilisateur</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-group"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-group"
              placeholder="Votre telephone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-group"
              placeholder="Votre E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Modifier
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
