import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [Loading, setLoading] = useState(false);
  const [Data, setData] = useState([]);
  const [Error, setError] = useState(null);

  useEffect(() => {
    const FetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
        console.log("fetching data is done");
      }
    };

    FetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-purple-900 to-black text-gray-100 px-4">
      <h1 className="text-5xl font-extrabold underline text-center text-indigo-300 py-12">
        API Fetching using axios and <br />
        show its results using React Hooks in cards
      </h1>
      <h2 className="text-amber-200 font-bold text-4xl mx-auto text-center">
        the data is {Data.length} posts
      </h2>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 py-12">
        {Loading ? (
          <p className="text-center text-5xl text-yellow-400">Loading...</p>
        ) : Error ? (
          <p className="text-center text-5xl text-red-500">Error: {Error}</p>
        ) : (
          Data.slice(0, 12).map((p) => {
            return (
              <div
                key={p.id}
                className="mx-auto bg-white p-4 rounded-lg shadow-lg mb-4  hover:scale-102 transition-transform"
              >
                <h1 className="text-gray-900">
                  {" "}
                  <span className="text-red-500 font-bold">
                    title of post {p.id} :
                  </span>{" "}
                  {p.title}
                </h1>
                <p className="py-4 text-gray-800">
                  <span className="text-blue-500 font-bold">
                    body of post {p.id} :
                  </span>{" "}
                  {p.body}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default App;
