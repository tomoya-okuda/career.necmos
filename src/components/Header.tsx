import styles from 'src/components/styles/Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.menu}>
        <Image src="icons/logo-black.svg" alt="logo" width={32} height={32} />
      </Link>
      <HamburgerMenu />
    </header>
  );
}

export default Header;
