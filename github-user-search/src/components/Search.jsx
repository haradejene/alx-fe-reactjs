import { useState } from "react";
import { searchUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]); // 👈 show only 4 at a time
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(false);
    setUsers([]);
    setDisplayedUsers([]);
    setPage(1);

    try {
      const data = await searchUsers(username, {
        location: location.trim() || undefined,
        repos: minRepos ? parseInt(minRepos) : undefined,
        page: 1,
      });
      setUsers(data);
      setDisplayedUsers(data.slice(0, 4)); // show first 4
      setHasMore(data.length > 4);
      setShowResults(true);
      if (data.length === 0) setError(true);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    const nextCount = displayedUsers.length + 4;
    setDisplayedUsers(users.slice(0, nextCount));
    setHasMore(nextCount < users.length);
  };

  const handleBack = () => {
    setShowResults(false);
    setUsers([]);
    setDisplayedUsers([]);
    setError(false);
    setUsername("");
    setLocation("");
    setMinRepos("");
  };

  return (
    <div className="max-w-4xl w-full mx-auto mt-10 p-6 bg-black rounded-2xl shadow-lg border border-gray-700 text-white">
      {!showResults ? (
        // 🔍 SEARCH FORM
        <>
          <h1 className="text-2xl font-semibold text-gray-100 mb-6 text-center">
            GitHub User Search
          </h1>

          <form
            onSubmit={handleSearch}
            className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6"
          >
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="col-span-1 sm:col-span-2 border border-gray-500 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border border-gray-500 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="number"
              placeholder="Min Repos"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              className="border border-gray-500 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition-colors col-span-1 sm:col-span-4"
            >
              Search
            </button>
          </form>
        </>
      ) : (
        // 🧍 RESULTS SECTION
        <>
          {loading && (
            <p className="text-center text-gray-400 mb-4">Loading...</p>
          )}
          {error && !loading && (
            <p className="text-center text-red-500 font-semibold mb-4">
              Looks like we can’t find the user.
            </p>
          )}

          {displayedUsers.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center mb-8">
              {displayedUsers.map((user) => (
                <div
                  key={user.id}
                  className="p-5 border border-gray-600 rounded-xl flex items-center gap-4 bg-gray-900 hover:scale-[1.02] transition-transform"
                >
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-16 h-16 rounded-full border border-gray-500"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-gray-100">
                      {user.login}
                    </h2>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline mt-1 inline-block text-sm"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Buttons at the bottom */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button
              onClick={handleBack}
              className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg text-sm transition-all"
            >
              ← Back
            </button>
            {hasMore && !loading && (
              <button
                onClick={loadMore}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition-colors"
              >
                Load More
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
