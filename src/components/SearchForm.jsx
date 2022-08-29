function SearchForm(props) {
  return (
    <div id="search-form" className="p-4">
      <div>
        <input
          type="text"
          id="title"
          value={props.searchTitle}
          onInput={(e) => props.setSearchTitle(e.target.value)}
          className="bg-amber-100 border border-amber-300 text-amber-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 outline-none"
          autoComplete="off"
          placeholder="Cari Judul Catatan, React JS..."
        />
      </div>
    </div>
  );
}

export default SearchForm;
