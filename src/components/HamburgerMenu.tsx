'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from 'src/components/styles/HamburgerMenu.module.scss';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.menuButton} onClick={toggleMenu}>
        MENU
      </button>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <div className={styles.closeButton} onClick={toggleMenu}>
          CLOSE
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/" onClick={toggleMenu}>
                トップ
              </Link>
            </li>
            <li>
              <Link href="/welcome" onClick={toggleMenu}>
                会社を知る
              </Link>
            </li>
            <li>
              <Link href="/welcome" onClick={toggleMenu}>
                仲間を知る
              </Link>
            </li>
            <li>
              <Link href="/welcome" onClick={toggleMenu}>
                文化を知る
              </Link>
            </li>
            <li>
              <Link href="/questions" onClick={toggleMenu}>
                よくある質問
              </Link>
            </li>
            <li>
              <Link href="/jobs" onClick={toggleMenu}>
                募集一覧/応募
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
