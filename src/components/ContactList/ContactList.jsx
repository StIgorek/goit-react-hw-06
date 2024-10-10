import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "../ContactList/ContactList.module.css";

const getVisibleContacts = (contacts, filteredName) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filteredName.toLowerCase())
  );
};

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filteredName = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, filteredName);

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
