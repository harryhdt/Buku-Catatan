function Header(props) {
  return (
    <div
      id="header"
      className="bg-amber-400 flex items-center justify-between px-4 py-2 border-b border-amber-500"
    >
      <h1 className="text-lg font-semibold text-slate-800">Buku Catatan</h1>
      <button
        onClick={() =>
          props.buttonTampilkanFormInput(() => {
            return {
              title: "Tambah Catatan",
              status: 1,
              data: { id: new Date().getTime(), title: "", body: "" },
            };
          })
        }
        type="button"
        className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none"
      >
        Tambah
      </button>
    </div>
  );
}

export default Header;
