import styles from 'src/components/componentsCSS/Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.menu}>
        <Image src="icons/logo-black.svg" alt="logo" width={32} height={32} />
      </Link>
      <Link href="/" className={styles.menu}>
        Menu
      </Link>
    </header>
  );
}

export default Header;
