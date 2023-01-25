export default function Post ({ params }) {
  const { id } = params

  return (
    <h2>Este es el post {id}</h2>
  )
}
