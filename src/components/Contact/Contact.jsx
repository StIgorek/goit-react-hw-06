import css from "../Contact/Contact.module.css";

export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.contact}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
