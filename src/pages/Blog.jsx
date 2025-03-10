import { useEffect, useState } from "react";
import Loader from "../components/Loader";

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
  );
};

export default Blog;
