import LikeButton from './LikeButton'
import Link from 'next/link'

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
    .then(res => res.json())
}

async function ListOfPosts () {
  const posts = await fetchPosts()

  return posts.slice(0, 5).map(post => (
    <article key={post.id} style={{ marginBottom: '10px' }}>
      <Link href='/posts/[id]' as={`/posts/${post.id}`}>
        <h2 style={{ color: '#09f' }}>{post.title}</h2>
      </Link>
      <p>{post.body}</p>
      <LikeButton />
    </article>
  ))
}

export default ListOfPosts
