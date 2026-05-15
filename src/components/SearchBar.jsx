import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;