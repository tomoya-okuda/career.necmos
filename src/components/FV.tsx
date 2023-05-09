import Image from 'next/image';
import styles from 'src/components/styles/FV.module.scss';
import Button from '@/components/Button';

function FV() {
  return (
    <div className={styles.fv}>
      <div className={styles.upper}>
        <h1>
          仕事を<br></br>もっと自由に
        </h1>
        <p>NECMOS CAREERS</p>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          link="/welcome"
          color="primary"
          variant="fill"
          text="もっと見る"
        />
      </div>
      {/* <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/images/fv.webp"
          alt="background image"
          width={776}
          height={766}
          sizes="100vw"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '200%',
            height: 'auto',
          }}
        />
      </div> */}
    </div>
  );
}

export default FV;
