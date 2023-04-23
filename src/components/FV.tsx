import Image from 'next/image';
import styles from 'src/components/componentsCSS/FV.module.scss';
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
      <div className={styles.bottom}>
        <Button />
      </div>
      <Image
        className={styles.image}
        src="/images/fv.webp"
        alt="background image"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default FV;
