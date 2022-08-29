import { ArchiveMinus, ArrowDown2, Brush2, Trash } from "iconsax-react";
import { showFormattedDate } from "../utils/data";

function ArsipCatatan(props) {
  //
  const listCatatans = props.catatans.filter(
    (x) =>
      x.archived &&
      x.title.toLowerCase().indexOf(props.searchTitle.toLowerCase()) > -1
  );
  const listCatatansElm =
    listCatatans.length > 0 ? (
      listCatatans.map((data) => (
        <div key={data.id} className="p-4 bg-amber-300 rounded-lg mb-4">
          <div
            className="flex items-start justify-between cursor-pointer"
            onClick={() => {
              data.expanded = !data.expanded;
              props.setCatatans((catatans) => [...catatans]);
            }}
          >
            <div>
              <h3 className="text-lg font-bold">{data.title}</h3>
              <span className="text-sm text-amber-700">
                {showFormattedDate(data.createdAt)}
              </span>
            </div>
            <button
              className={
                (data.expanded ? "-rotate-180" : "rotate-0") +
                " transform transition-transform duration-300"
              }
            >
              <ArrowDown2 />
            </button>
          </div>
          <div
            className={
              (data.expanded ? "max-h-[400px]" : "max-h-0") +
              " border-t border-amber-400 pt-2 mt-2 overflow-hidden transition-all duration-300"
            }
          >
            {data.body}
          </div>
          <div className="mt-1">
            <button
              title="Keluarkan dari Arsip"
              className="mr-4"
              onClick={() => {
                data.archived = false;
                props.setCatatans((catatans) => [...catatans]);
              }}
            >
              <ArchiveMinus className="text-amber-800 hover:text-amber-600 transition-colors" />
            </button>
            <button
              title="Ubah"
              className="mr-4"
              onClick={() =>
                props.buttonTampilkanFormInput(() => {
                  return {
                    title: "Ubah Catatan",
                    status: 1,
                    data: { id: data.id, title: data.title, body: data.body },
                  };
                })
              }
            >
              <Brush2 className="text-amber-800 hover:text-amber-600 transition-colors" />
            </button>
            <button
              title="Hapus"
              onClick={() => {
                props.setCatatans((catatans) => [
                  ...catatans.filter((x) => x.id !== data.id),
                ]);
              }}
            >
              <Trash className="text-amber-800 hover:text-amber-600 transition-colors" />
            </button>
          </div>
        </div>
      ))
    ) : (
      <span>Tidak ada apapun</span>
    );
  return (
    <div id="my-catatan" className="border-t border-amber-300 p-4">
      <h2 className="text-xl font-semibold mb-4">Arsip</h2>
      <div className="list">{listCatatansElm}</div>
    </div>
  );
}

export default ArsipCatatan;
