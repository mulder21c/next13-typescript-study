"use client";

import type { NextPage } from "next";
interface BlogData {
  createdAt: string;
  name: string;
  avatar: string;
  title: number;
  id: string;
}

interface HomeProps {
  recentPosts: BlogData[];
}

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
const List: NextPage<HomeProps> = ({ recentPosts }) => {
  return (
    <div className="blog__container">
      <ul className="blog__list">
        {recentPosts.map((post) => (
          <li key={post.id} className="item">
            <div className="img">
              <img src={post.avatar} alt={post.name} width={128} height={128} />
            </div>
            <strong className="title">{post.title}</strong>
            <span className="name">{post.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
