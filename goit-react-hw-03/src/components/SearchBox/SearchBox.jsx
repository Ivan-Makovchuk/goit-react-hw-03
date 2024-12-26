import css from "../SearchBox/SearchBox.module.css";

const SearchBox = ({ search, onSearch }) => {
  return (
    <div className={css.searchWrapp}>
      <p>Find contacts by name</p>
      <input
        className={css.search}
        type="text"
        name="searchUser"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
