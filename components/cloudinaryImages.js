import Image from 'next/image'
import styles from '../styles/Home.module.css'

function CloudinaryImages({ images }) {


  return (
    <>
    {console.log(images)}
      {images.map((image) => (
                <div key={image} className={styles.card}>
                <Image
                  src={image.url}
                  alt={image.id}
                  height={4032}
                  width={3024}
                />
              </div>
      ))}
    </>
  )
}

export default CloudinaryImages
