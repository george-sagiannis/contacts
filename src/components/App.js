import "../css/App.css";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact.js";
import { useState, useEffect } from "react";
import * as ContactsAPI from "../utils/ContactsAPI";
const App = () => {
  const [contacts, setContacts] = useState([]);
  const [screen, setScreen] = useState("create");

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
    <div>
      {screen === "list" && (
        <ListContacts contacts={contacts} onDeleteContact={removeContact} />
      )}
      {screen === "create" && <CreateContact />}
    </div>
  );
};
export default App;
