import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import styles from "../../styles/Home.module.css"
import imageGallery from '../../data/images'

const LargeImage = ({ imagePage}) => {

  return (
    <>
      {imagePage.map((image) => (
                <div key={image.id} className={styles.card}>
        <Link href={{

          pathname: `/images/${encodeURIComponent(image.id)}`,
      query: {largeimage: image.url },
    }}>

                <Image
                  src={image.url}
                  alt="Galaxy"
                  height={4032}
                  width={3024}
                />

          </Link>

              </div>
      ))}
    </>
  )
}

export default LargeImage
