import ListOfPosts from './ListOfPosts'
import styles from './Posts.module.css'

export default async function PostsPage () {
  return (
    <section className={styles.section}>
      <ListOfPosts />
    </section>
  )
}
