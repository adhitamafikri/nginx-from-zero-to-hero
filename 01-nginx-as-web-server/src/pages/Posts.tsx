import { useNavigate, useLoaderData } from "react-router";

export function Posts() {
  const navigate = useNavigate();
  const { posts } = useLoaderData() as { posts: any[] };

  if (posts.length === 0) {
    return <div>No posts found</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <button role="button" onClick={() => navigate("/")}>
        Navigate to Home Page
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
