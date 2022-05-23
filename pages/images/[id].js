import { useRouter } from 'next/router'
import Image from 'next/image'

const Comment = () => {
  const router = useRouter()
  const { id, largeimage } = router.query

  return (
    <>
      <h1>Post: {id}</h1>
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
