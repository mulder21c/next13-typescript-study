import axios from "axios";
import Image from "next/image";
import type { GetStaticProps, NextPage } from "next";

interface BlogData {
  createdAt: string;
  name: string;
  avatar: string;
  title: number;
  id: string;
}

interface HomeProps {
  data: BlogData[];
}

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>
          <span>
            <img src={post.avatar} alt={post.name} />
          </span>
          <strong>{post.title}</strong>
          {post.name}
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await axios.get("http://localhost:3000/api/getBlog");
  const data = response.data;

  return {
    props: {
      data,
    },
  };
};

export default Home;
