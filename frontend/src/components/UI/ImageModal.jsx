import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import styles from "../../assets/carousel.module.css";

const ImageModal = forwardRef(({ imageSrc, onPrev, onNext }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
    close() {
      dialog.current.close();
    },
  }));

  function handleOverlayClick(event) {
    if (event.target === dialog.current) {
      dialog.current.close();
    }
  }

  return createPortal(
    <dialog
      ref={dialog}
      onClick={handleOverlayClick}
      className="backdrop:bg-stone-900/90 border-2 border-black rounded-lg mx-auto shadow-lg sourceCodePro max-w-[100vh] max-h-[100vh]"
    >
      <div>
        <img src={imageSrc} alt="Modal content" />
        <button
          className={classNames(styles.carouselButton, styles.prev)}
          onClick={onPrev}
        >
          {"< Prev"}
        </button>
        <button
          className={classNames(styles.carouselButton, styles.next)}
          onClick={onNext}
        >
          {"Next >"}
        </button>
      </div>

      <form method="dialog">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => dialog.current.close()}
            className="absolute top-0 right-0 mt-5 px-4 py-2 rounded-xl font-bold focus:outline-none focus:ring-2 transition ease-in duration-200 text-white bg-red-500 hover:bg-red-400 mr-4 opacity-90"
          >
            Close
          </button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ImageModal;
