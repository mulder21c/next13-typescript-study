'use client'
import List from './list'

async function getPosts() {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty')

  const posts = await res.json()
  console.log('posts ', posts)
  return posts
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts()
  // Forward fetched data to your Client Component
  return <List recentPosts={recentPosts} />
}
