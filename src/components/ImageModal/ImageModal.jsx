import ReactModal from "react-modal";
import css from "./ImageModal.module.css";

function ImageModal({ modalImg, isModalOpen, closeModal }) {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      overlayClassName={css.overlay}
      className={css.modalImg}
    >
      <img src={modalImg} alt="modal image" className={css.image} />
    </ReactModal>
  );
}

export default ImageModal;
