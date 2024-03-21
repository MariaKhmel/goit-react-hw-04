import css from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";

function SearchBar({ onSubmit }) {
  return (
    <header className={css.searchBar}>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <input
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.searchFormInput}
        />
        <button type="submit" className={css.searchFormBtn}>
          <FcSearch />
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
