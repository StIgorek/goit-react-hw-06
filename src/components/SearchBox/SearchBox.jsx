import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        type="input"
        className={css.input}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
