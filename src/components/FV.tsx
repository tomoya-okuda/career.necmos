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
      <Button title="もっと見る" link="/jobs" />
      {/* <Image
        className={styles.image}
        src="/images/fv.webp"
        alt="background image"
        fill
      /> */}
    </div>
  );
}

export default FV;