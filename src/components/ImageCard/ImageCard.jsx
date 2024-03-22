import css from "./ImageCard.module.css";

function ImageCard({ description, urls: { regular, small }, openModal }) {
  return (
    <div>
      <img
        className={css.imageCard}
        src={small}
        alt={description}
        onClick={() => openModal(regular)}
      />
    </div>
  );
}

export default ImageCard;
