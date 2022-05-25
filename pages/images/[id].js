import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
const Comment = () => {
  const router = useRouter()
  const { id, largeimage, description } = router.query

  return (
    <>
        <h1 className={styles.title}>Welcome to The Anchor Inn at Ocean Isle Beach</h1>
    <p className={styles.description}>{description}</p>
      <p>
      </p>
      {console.log(largeimage)}
              <Image
                  src={largeimage}
                  alt="Galaxy"
                  height={4032}
                  width={3024}
                />
    </>
  )
}

export default Comment
