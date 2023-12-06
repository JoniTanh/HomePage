import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(({ text, success }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
    close() {
      dialog.current.close();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 bg-sky-50 border-2 border-black rounded-lg p-5 max-w-lg w-full mx-auto my-12 shadow-lg top-40 sourceCodePro"
    >
      <div className={success ? "text-teal-500" : "text-red-500"}>{text}</div>
      <form method="dialog">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => dialog.current.close()}
            className={`mt-5 px-4 py-2 rounded-xl font-bold focus:outline-none focus:ring-2 transition ease-in duration-200 ${
              success
                ? "bg-teal-300 text-black hover:bg-teal-400 focus:ring-teal-500"
                : "bg-red-300 text-black hover:bg-red-400 focus:ring-red-500"
            }`}
          >
            Close
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
