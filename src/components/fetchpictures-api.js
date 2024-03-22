import axios from "axios";
const key = "UkUvtFMmD5oVuyg6VqxNecHCXdBh4jU0Efit5U6Q764";
const params = {
    params: {
        client_id: key,
    }
}


axios.defaults.baseURL = "https://api.unsplash.com";

const fetchPicturesByQuery = async (searchText, page) => {
    const response = await axios.get(`/search/photos?page=1&per_page=30&query=${searchText}`,
        params
    );
    return response.data;
}

export default fetchPicturesByQuery;