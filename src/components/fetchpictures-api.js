import axios from "axios";
const key = "UkUvtFMmD5oVuyg6VqxNecHCXdBh4jU0Efit5U6Q764";
const params = {
    params: {
        client_id: key,
    }
}



axios.defaults.baseURL = "https://api.unsplash.com";

const fetchPicturesByQuery = async (searchText, page) => {
    const response = await axios.get(`/search/photos?page=${page}&per_page=20&query=${searchText}`,
        params
    );
    console.log(page)
    return response.data;
}

export default fetchPicturesByQuery;