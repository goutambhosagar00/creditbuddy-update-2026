import { useParams, useNavigate } from "react-router-dom";
import { posts } from "../../data/blogPosts";

export default function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate(); // ✅ navigation hook

  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div className="p-10 text-center">Post not found</div>;

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-gray-600 hover:text-black transition"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

      <img
        src={post.img}
        alt={post.title}
        className="w-full h-[300px] object-cover rounded-lg mb-6"
      />

      <p className="text-gray-500 mb-4">
        By {post.author} · {post.read} · {post.date}
      </p>

      <p className="text-gray-700 leading-relaxed">{post.content}</p>
    </section>
  );
}
