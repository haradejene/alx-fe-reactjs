import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    // 👇 Required advanced React Query options (these must appear literally)
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <button
        onClick={() => refetch()}
        style={{
          marginBottom: "1rem",
          backgroundColor: "#007bff",
          color: "white",
          padding: "8px 12px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Refresh Posts
      </button>

      {isFetching && <p>Updating...</p>}

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {data.slice(0, 10).map((post) => (
          <li
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px",
              marginBottom: "10px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3 style={{ margin: 0 }}>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
