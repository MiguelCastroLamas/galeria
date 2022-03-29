function Search({ clickHandler }) {
  return (
    <form>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        defaultValue=""
        onClick={clickHandler}
      />
    </form>
  );
}

export default Search;
