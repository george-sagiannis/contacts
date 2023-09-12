import "../css/App.css";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact.js";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as ContactsAPI from "../utils/ContactsAPI";
const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    };

    getContacts();
  }, []);

  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ListContacts contacts={contacts} onDeleteContact={removeContact} />
        }
      />
      <Route path="/create" element={<CreateContact />} />
    </Routes>
  );
};
export default App;
