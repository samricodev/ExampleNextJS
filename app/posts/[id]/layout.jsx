import Link from 'next/link'

const fetchSinglePost = async (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function Post ({ children, params }) {
  const { id } = params
  const post = await fetchSinglePost(id)

  return (
    <article style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ color: '#09f' }}>{post.title}</h1>
      <p style={{ textAlign: 'center' }}>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}
