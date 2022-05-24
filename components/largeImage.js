import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";

const LargeImage = ({ imagePage, category }) => {

  function checkCategory(cat){
    return cat.category === category;
  }
  const filteredImages = imagePage.filter(checkCategory)
  return (
    <>
      {filteredImages.map((image) => (
        <div key={image.id} >
        {console.log(filteredImages)}

                  <div className={styles.card}>
          <Link
            href={{
              pathname: `/images/${encodeURIComponent(image.id)}`,
              query: { largeimage: image.url },
            }}
          >
            <Image src={image.url} alt="Galaxy" height={4032} width={3024} />
          </Link>
          <p>{image.id}</p>
        </div>
        </div>


      ))}
    </>
  );
};

export default LargeImage;
