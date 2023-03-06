'use client'

//@ts-ignore
async function List({ recentPosts }) {
  const albums = await recentPosts

  return (
    <ul>
      {albums.map((album: any) => (
        <li key={album.id}>{album.name}</li>
      ))}
    </ul>
  )
}

export default List
