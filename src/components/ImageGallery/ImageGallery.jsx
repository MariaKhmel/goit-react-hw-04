import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.imageList}>
      {images.map(({ id, urls, description }) => (
        <li key={id} className={css.imageItem}>
          <ImageCard
            description={description}
            urls={urls}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
