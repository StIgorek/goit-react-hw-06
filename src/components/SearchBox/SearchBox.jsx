import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useId } from "react";
import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        type="input"
        className={css.input}
        id={searchId}
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}
