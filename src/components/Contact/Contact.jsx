import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "../Contact/Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.container}>
      <div className={css.contact}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
