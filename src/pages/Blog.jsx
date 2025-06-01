import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { Box } from "@mui/material";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error al cargar los posts", error));
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: { xs: 4, md: 10 },
        px: { xs: 1, sm: 2, md: 4 },
        background:
          "linear-gradient(135deg, #232526 0%,rgb(0, 0, 0) 100%)",
        color: "#fff",
      }}
    >
      <section className="p-10">
        <h1 className="text-3xl font-bold">Últimos Posts 📝</h1>
        {loading ? (
          <Loader />
        ) : (
          <ul className="mt-6 space-y-4">
            {posts.map((post) => (
              <li key={post.id} className="border p-4 rounded shadow">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-gray-600">{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </Box>
  );
};

export default Blog;
