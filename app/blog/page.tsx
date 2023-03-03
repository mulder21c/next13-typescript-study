import List from "./list";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/getBlog");
  const posts = await res.json();
  return posts;
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts();
  // Forward fetched data to your Client Component
  return <List recentPosts={recentPosts} />;
}
