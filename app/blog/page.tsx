'use client'

import { Suspense } from 'react'

async function getPosts() {
  const res = await fetch('https://63d271c606556a0fdd3c55ed.mockapi.io/articles')
  const posts = await res.json()
  return posts
}

export default async function Page() {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts()
  // Forward fetched data to your Client Component
  //@ts-ignore
  return (
    <Suspense>
      <List recentPosts={recentPosts} />
    </Suspense>
  )
}
//@ts-ignore
async function List({ recentPosts }: { recentPosts: any }): Promise<JSX.Element> {
  const albums = await recentPosts

  return (
    <ul>
      {albums.map((album: any) => (
        <li key={album.id}>{album.name}</li>
      ))}
    </ul>
  )
}
