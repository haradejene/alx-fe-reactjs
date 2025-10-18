// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

// Fetch function
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    // 🕒 Advanced configuration:
    cacheTime: 1000 * 60 * 5, // Keep data in cache for 5 minutes even if component unmounts
    staleTime: 1000 * 60, // Data considered fresh for 1 minute
    refetchOnWindowFocus: false, // Prevent automatic refetch when window regains focus
    keepPreviousData: true, // Retain previous data while fetching new data
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        style={{
          marginBottom: "1rem",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        🔄 Refresh Posts
      </button>

      {isFetching && <p>Updating...</p>}

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            style={{
              marginBottom: "1rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px",
              backgroundColor: "#fafafa",
            }}
          >
            <h3 style={{ marginBottom: "6px" }}>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
