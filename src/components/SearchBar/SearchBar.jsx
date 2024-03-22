import css from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";
import toast from "react-hot-toast";

function SearchBar({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { value } = form.elements.input;
    if (value.trim() === "") {
      toast.error("Please enter text");
      return;
    }
    onSubmit(value);
    form.reset();
  };
  return (
    <header className={css.searchBar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
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
