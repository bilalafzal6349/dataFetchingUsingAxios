import React from "react";

// simple card to display a post with improved styling
export default function PostCard({ post }) {
  return (
    <div className="w-full h-full bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-indigo-500 flex flex-col justify-between">
      <h3 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-300">
        <span className="font-semibold text-black">post title :</span>{" "}
        {post.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        {" "}
        <span className="font-semibold text-black">post body :</span>{" "}
        {post.body}
      </p>
    </div>
  );
}
