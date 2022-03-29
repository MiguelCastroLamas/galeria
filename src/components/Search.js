function Search({ searchText, handleChange }) {
  return (
    <form>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={handleChange}
      />
    </form>
  );
}

export default Search;
