import Image from 'next/image'

const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function CommentsPage ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <ul style={{ padding: '10px', backgroundColor: '#444', fontSize: '10px', listStyle: 'none' }}>
      {
        comments.map(comment => (
          <li key={comment.id} style={{ marginBottom: '10px', display: 'flex' }}>
            <div style={{ marginRight: '5px' }}>
              <Image width='40' height='40' alt={comment.name} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} />
            </div>
            <div>
              <h2>{comment.name}</h2>
              <p>{comment.body}</p>
            </div>
          </li>
        ))
      }
    </ul>
  )
}
