import { useState } from "react";
//
import ArsipCatatan from "./components/ArsipCatatan";
import FormInput from "./components/FormInput";
import Header from "./components/Header";
import MyCatatan from "./components/MyCatatan";
import SearchForm from "./components/SearchForm";
import { getInitialData } from "./utils/data";

function App() {
  const dataCatatan = getInitialData();
  const [searchTitle, setSearchTitle] = useState("");
  const [getShowFormInput, setShowFormInput] = useState({
    status: 0,
    title: "Catatan Baru",
    data: { id: 0, title: "", body: "" },
  });
  const [catatans, setCatatans] = useState(dataCatatan);
  return (
    <div className="bg-black text-slate-700">
      <div className="w-full max-w-lg mx-auto bg-amber-200 min-h-screen">
        <Header buttonTampilkanFormInput={setShowFormInput} />
        <SearchForm searchTitle={searchTitle} setSearchTitle={setSearchTitle} />
        <MyCatatan
          searchTitle={searchTitle}
          buttonTampilkanFormInput={setShowFormInput}
          catatans={catatans}
          setCatatans={setCatatans}
        />
        <ArsipCatatan
          searchTitle={searchTitle}
          buttonTampilkanFormInput={setShowFormInput}
          catatans={catatans}
          setCatatans={setCatatans}
        />
        <FormInput
          dataForm={getShowFormInput}
          setCatatans={setCatatans}
          buttonTutupFormInput={setShowFormInput}
        />
      </div>
    </div>
  );
}

export default App;
