import { CloseCircle } from "iconsax-react";

function FormInput(props) {
  let formData = {
    id: props.dataForm.data.id,
    title: props.dataForm.data.title,
    body: props.dataForm.data.body,
  };
  return (
    <>
      <div
        onClick={() =>
          props.buttonTutupFormInput((current) => {
            return {
              ...current,
              status: 0,
            };
          })
        }
        className={
          (props.dataForm.status ? "" : "hidden") +
          " overlay fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 z-10"
        }
      ></div>
      <div
        id="form-input"
        className={
          (props.dataForm.status ? "bottom-0" : "-bottom-full") +
          " p-4 fixed transition-all duration-500 left-0 right-0 w-full max-w-lg mx-auto bg-amber-400 rounded-t-3xl border-t border-amber-500 z-20"
        }
      >
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-semibold mb-4">{props.dataForm.title}</h2>
          <button
            onClick={() =>
              props.buttonTutupFormInput((current) => {
                return { ...current, status: 0 };
              })
            }
            className="font-medium text-amber-900"
          >
            <CloseCircle className="text-amber-900 hover:text-amber-700 transition-colors duration-300" />
          </button>
        </div>
        <form
          method="post"
          onSubmit={async (e) => {
            e.preventDefault();
            let firstExe = false;
            await props.setCatatans((catatans) => {
              if (firstExe) return [...catatans];
              firstExe = true;
              let catatanIndex = catatans.findIndex(
                (x) => x.id === props.dataForm.data.id
              );
              if (catatanIndex > -1) {
                catatans[catatanIndex] = {
                  ...catatans[catatanIndex],
                  title: formData.title,
                  body: formData.body,
                  createdAt: new Date().toISOString(),
                };
              } else {
                catatans[catatans.length] = {
                  id: new Date().getTime(),
                  title: formData.title,
                  body: formData.body,
                  createdAt: new Date().toISOString(),
                };
              }
              return [...catatans];
            });
            //
            firstExe = true;
            props.buttonTutupFormInput((current) => {
              return { ...current, status: 0 };
            });
          }}
        >
          <div className="mb-4">
            <label htmlFor="judul" className="block mb-2 text-sm font-medium">
              Judul
            </label>
            <input
              type="text"
              id="judul"
              defaultValue={props.dataForm.data.title}
              key={props.dataForm.data.id}
              onChange={(e) => (formData.title = e.target.value)}
              autoComplete="off"
              className="bg-amber-100 border border-amber-200 text-amber-900 text-sm rounded-lg focus:ring-amber-600 focus:border-amber-600 block w-full p-2.5 outline-none"
              placeholder="Hari ke 10"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block mb-2 text-sm font-medium">
              Isi
            </label>
            <textarea
              id="body"
              rows="8"
              className="block p-2.5 w-full text-sm text-amber-900 bg-amber-100 rounded-lg border border-amber-200 focus:ring-amber-600 focus:border-amber-600 outline-none resize-none"
              autoComplete="off"
              placeholder="Your message..."
              defaultValue={props.dataForm.data.body}
              key={props.dataForm.data.id}
              onChange={(e) => (formData.body = e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none"
          >
            Simpan
          </button>
        </form>
      </div>
    </>
  );
}

export default FormInput;
