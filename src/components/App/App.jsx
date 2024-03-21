import { useState, useEffect } from "react";
import Searchbar from "../SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [searchText, setSearchText] = useState("");
  const key = "UkUvtFMmD5oVuyg6VqxNecHCXdBh4jU0Efit5U6Q764";

  // useEffect(() => {
  //   async function fetchPictures() {
  //     try {
  //       const response = await axios.get(
  //         `https://api.unsplash.com/search/photos?page=1&query=${searchText}`,
  //         {
  //           params: {
  //             client_id: key,
  //           },
  //         }
  //       );
  //       console.log(response.data.results);
  //     } catch (error) {
  //       console.error("Error fetching pictures:", error);
  //     }
  //   }

  //   fetchPictures();
  // }, [searchText]);

  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.elements.input;
    if (value.trim() === "") {
      toast.error("Please enter text");
    }
    setSearchText(value);
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Searchbar onSubmit={onSubmit}></Searchbar>
    </>
  );
}

export default App;
