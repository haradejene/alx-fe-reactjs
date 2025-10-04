import { useState } from "react";
import { fetchUserData } from "../services/githubService";


export default function Search() {
  const [username, setUsername] = useState("");      // Input field value
  const [user, setUser] = useState(null);            // Fetched user data
  const [loading, setLoading] = useState(false);     // Loading state
  const [error, setError] = useState(false);         // Error state

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return; // prevent empty searches
    setLoading(true);
    setError(false);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      console.error(err);
      setError(true);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto mt-12 p-6 bg-black rounded-2xl shadow-lg border border-gray-200">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex mb-6">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-grow border border-gray-300 rounded-l-2xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-r-2xl hover:bg-blue-500 transition-colors"
        >
          Search
        </button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      {error && <p className="text-center text-red-500 font-semibold">Looks like we can't find the user.</p>}
      {user && (
        <div className="mt-4 p-4 border border-gray-200 rounded-xl flex items-center gap-4 bg-white shadow-sm">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-20 h-20 rounded-full border border-gray-300"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">{user.name || user.login}</h2>
            <p className="text-gray-500">@{user.login}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-1 inline-block"
            >
              View GitHub Profile
            </a>
            <div className="mt-2 text-gray-600 text-sm">
              {user.company && <p>Company: {user.company}</p>}
              {user.location && <p>Location: {user.location}</p>}
              <p>Public Repos: {user.public_repos}</p>
              <p>Followers: {user.followers}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
