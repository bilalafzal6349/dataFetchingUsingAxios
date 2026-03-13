import "./App.css";
import useAxiosFetch from "./hooks/useAxiosFetch";
import PostCard from "./components/PostCard";

function App() {
  const {
    data: posts,
    loading,
    error,
    refetch,
  } = useAxiosFetch("https://jsonplaceholder.typicode.com/posts");

  const count = Array.isArray(posts) ? posts.length : 0;

  return (
    <div className="min-h-screen bg-[#225c3a] text-gray-500 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center bg-clip-text text-gray-200 py-20">
          API Data Viewer with React & Axios
        </h1>
        <h2 className="text-gray-200 font-semibold text-3xl mx-auto text-center mb-2">
          {count} posts fetched from JSONPlaceholder and showing first 12
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 py-12">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <svg
                className="w-16 h-16 text-green-300 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            </div>
          ) : error ? (
            <div className="text-center">
              <p className="text-4xl text-red-400">Error: {error}</p>
              <button
                className="mt-4 px-5 py-2 purple-600 rounded-lg text-white font-medium shadow"
                onClick={refetch}
              >
                Retry
              </button>
            </div>
          ) : posts && posts.length > 0 ? (
            posts.slice(0, 12).map((p) => {
              return (
                <div>
                  <PostCard key={p.id} post={p} />;
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-300">No posts to display.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
