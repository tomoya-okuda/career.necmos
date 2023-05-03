import Image from 'next/image';
import styles from 'src/components/styles/Breadcrumb.module.scss';

function Breadcrumb() {
  return (
    <div className={styles.breadcrumb}>
      <Image src="/icons/icon-home.svg" alt="home icon" width={32} height={32} />
      <Image src="/icons/logo-black.svg" alt="logo" width={32} height={32} />
    </div>
  );
}

export default Breadcrumb;
