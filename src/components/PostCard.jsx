import React from "react";

// simple card to display a post with improved styling
export default function PostCard({ post }) {
  return (
    <div className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-indigo-500">
      <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:bg-gradient-to-r dark:from-indigo-400 dark:to-purple-400">
        {post.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
    </div>
  );
}
