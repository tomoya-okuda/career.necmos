import styles from 'src/components/styles/Button.module.scss';
import Link from 'next/link';

function Button() {
  return (
    <div>
      <Link className={styles.button} href='/jobs'>
        もっと見る
      </Link>
    </div>
  );
}

export default Button;
