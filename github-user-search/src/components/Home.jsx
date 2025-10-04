import { useState } from "react";
import { fetchUserData } from "../services/githubAPI";

export default function Home() {
  const [user, setUser] = useState(null);

  const handleSearch = async () => {
    const data = await fetchUserData("octocat");
    setUser(data);
  };

  return (
    <div>
      <button onClick={handleSearch}>Search User</button>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
    </div>
  );
}
