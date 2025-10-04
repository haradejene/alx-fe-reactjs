const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const BASE_URL = "https://api.github.com";

import axios from "axios";

export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_API_KEY}`, 
    },
  });
  return response.data;
};
