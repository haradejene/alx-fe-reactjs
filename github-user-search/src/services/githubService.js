import axios from "axios";


export const minRepos = 5;

// Fetch a single GitHub user by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    throw error;
  }
};

// Advanced search for GitHub users
// options is an object: { location, repos, followers, language, etc. }
export const searchUsers = async (query, options = {}) => {
  try {
    let searchQuery = query.trim();

    // Build query string properly
    if (options.location) searchQuery += `+location:${options.location}`;
    if (options.repos) searchQuery += `+repos:>=${options.repos}`;
    else searchQuery += `+repos:>=${minRepos}`; 
    if (options.followers) searchQuery += `+followers:>=${options.followers}`;
    if (options.language) searchQuery += `+language:${options.language}`;

    const page = options.page || 1;

    // Encode the full query string
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}&page=${page}&per_page=30`
    );

    return response.data.items;
  } catch (error) {
    console.error("Error searching GitHub users:", error);
    throw error;
  }
};
