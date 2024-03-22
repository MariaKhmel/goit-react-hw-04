import { useState } from "react";
import Searchbar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import fetchPicturesByQuery from "../fetchpictures-api";
import { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function App() {
  // const [searchText, setSearchText] = useState();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      const data = await fetchPicturesByQuery(query);
      setImages(data.results);
    } catch (error) {
      setError(true);
      console.error("Error fetching pictures:", error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (img) => {
    setModal(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Searchbar onSubmit={handleSearch}></Searchbar>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {modal && (
        <ImageModal
          modalImg={modal}
          isModalOpen={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default App;
