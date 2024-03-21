import axios from "axios";
const key = "UkUvtFMmD5oVuyg6VqxNecHCXdBh4jU0Efit5U6Q764";

const fetchsss = async () => {
    const response = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${searchText}`,
        {
            params: {
                client_id: key,
            },
        }
    );
}